// Inspiration data
const inspirationData = [
    {
        id: "MW-101",
        title: "Modern Interieur Ontwerp",
        image: "images/20250810_2006_Modern Interieur Ontwerp_remix_01k2ajejtbernv7bqnat5r6xn8.png",
        description: "Een stijlvolle moderne woonkamer met zorgvuldig gekozen meubels en accessoires.",
        products: [
            {
                name: "Moderne Bank",
                link: "https://www.amazon.nl/dp/B0D8146QWP/?coliid=I1BIAHPT7ZBMZ9&colid=3CLI1OZ4DKKQP&ref_=list_c_wl_lv_ov_lig_dp_it&th=1"
            },
            {
                name: "Abstract Schilderij",
                link: "https://www.amazon.nl/dp/B0F4KDS3DF/?coliid=I2U063EXSSVHKL&colid=8QXCNJOMMETN&ref_=list_c_wl_lv_ov_lig_dp_it_im&th=1"
            },
            {
                name: "Salontafel",
                link: "https://www.amazon.nl/dp/B0DT6RBKY7/?coliid=I3TE9JIWV0TYGZ&colid=16UL6N6XUY1I7&ref_=list_c_wl_lv_ov_lig_dp_it&th=1"
            },
            {
                name: "Kussensloop",
                link: "https://www.amazon.nl/dp/B0BPST9VV9/?coliid=IFEB4KD29TFUA&colid=3CLI1OZ4DKKQP&ref_=list_c_wl_lv_ov_lig_dp_it&th=1"
            }
        ],
        tips: [
            "Combineer verschillende texturen voor een warme uitstraling",
            "Gebruik een mix van moderne en klassieke elementen",
            "Zorg voor voldoende verlichting om de ruimte te laten ademen"
        ]
    }
];

// Global variables
let originalPageContent = null;
let isOnProductPage = false;

// DOM Elements
const inspirationGrid = document.getElementById('inspirationGrid');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Store original page content
    originalPageContent = document.body.innerHTML;
    loadInspiration();
    setupEventListeners();
});

// Load inspiration items
function loadInspiration() {
    if (!inspirationGrid) {
        console.error('Inspiration grid not found!');
        return;
    }
    
    inspirationGrid.innerHTML = '';
    
    console.log('Loading inspiration items:', inspirationData.length);
    console.log('All items:', inspirationData);
    
    inspirationData.forEach((item, index) => {
        console.log(`Loading item ${index + 1}:`, item.title, 'Image:', item.image);
        const inspirationItem = createInspirationItem(item);
        inspirationGrid.appendChild(inspirationItem);
    });
    
    console.log('Finished loading inspiration items');
}

// Create inspiration item element (pure image)
function createInspirationItem(item) {
    const div = document.createElement('div');
    div.className = 'inspiration-item';
    div.setAttribute('data-id', item.id);
    
    // Add product type for hover label - show all product types
    const productTypes = item.products.map(product => {
        if (product.name.toLowerCase().includes('bank')) return 'sofa';
        if (product.name.toLowerCase().includes('schilderij')) return 'painting';
        if (product.name.toLowerCase().includes('salontafel')) return 'table';
        if (product.name.toLowerCase().includes('kussensloop')) return 'cushion';
        return 'product';
    });
    div.setAttribute('data-product-type', productTypes.join(', '));
    
    div.innerHTML = `
        <img src="${item.image}" alt="${item.title}" class="inspiration-image">
    `;
    
    div.addEventListener('click', () => openProductPage(item));
    return div;
}

// Setup event listeners
function setupEventListeners() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Open product page
function openProductPage(item) {
    isOnProductPage = true;
    
    // Create new page content
    const productPageHTML = `
        <div class="product-page">
            <div class="product-container">
                <button class="back-btn" onclick="goBack()">
                    <i class="fas fa-arrow-left"></i>
                    Terug naar Inspiratie
                </button>
                
                <div class="product-header">
                    <img src="${item.image}" alt="${item.title}" class="product-image">
                    <div class="product-info">
                        <h1>${item.title}</h1>
                        <p class="product-description">${item.description}</p>
                        
                        <div class="product-details">
                            <h3>Beschikbare Producten</h3>
                            <ul class="product-list">
                                ${item.products.map(product => `
                                    <li class="product-item">
                                        <span class="product-name">${product.name}</span>
                                        <div>
                                            <a href="${product.link}" target="_blank" class="buy-btn">
                                                Bekijk op Amazon
                                            </a>
                                        </div>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                        
                        <div class="product-tips">
                            <h3>💡 Styling Tips van Sofie</h3>
                            <p>${item.tips.join(' ')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Replace current page content
    document.body.innerHTML = productPageHTML;
    
    // Update browser history
    window.history.pushState({ product: item.id }, '', `?product=${item.id}`);
}

// Go back to inspiration page
function goBack() {
    isOnProductPage = false;
    
    // Reload the page to ensure we get back to the original state
    window.location.href = window.location.pathname;
}

// Handle browser back button
window.addEventListener('popstate', function(event) {
    if (!event.state || !event.state.product) {
        // User clicked browser back button, reload to get back to home
        window.location.reload();
    }
});

// Scroll to inspiration section
function scrollToInspiration() {
    const inspirationSection = document.getElementById('inspiration');
    if (inspirationSection) {
        inspirationSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe inspiration items for animation
document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.inspiration-item');
    items.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        observer.observe(item);
    });
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && isOnProductPage) {
        goBack();
    }
});

// Add touch support for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', function(e) {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe up - could be used for navigation
            console.log('Swipe up detected');
        } else {
            // Swipe down - could be used for navigation
            console.log('Swipe down detected');
        }
    }
}

// Check for URL parameters on page load
window.addEventListener('load', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productParam = urlParams.get('product');
    
    if (productParam) {
        const foundItem = inspirationData.find(item => item.id === productParam);
        if (foundItem) {
            openProductPage(foundItem);
        }
    }
});