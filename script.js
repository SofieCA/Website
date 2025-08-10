// Inspiration Data - Sofie's Interior Design
const inspirationData = [
    {
        id: "MW-101",
        title: "Luxe Woonkamer met Spiegeldecor",
        description: "Stijlvolle woonkamer met elegante spiegeldecoratie en moderne inrichting",
        category: "interior",
        image: "images/20250802_1815_Luxe Woonkamer Spiegeldecor_remix_01k1nryj44f02vwsztya666hda (1).png",
        products: [
            {
                name: "Lijstloze wandspiegel Lia in organische vorm",
                price: "€249",
                shop: "Westwing",
                link: "https://www.westwing.nl/lijstloze-wandspiegel-lia-in-organische-vorm-149603.html"
            }
        ],
        tips: "Voor een luxe woonkamer, combineer grote spiegels met warme verlichting. Kies voor hoogwaardige materialen zoals leder en marmer. Zorg voor een goede balans tussen functionaliteit en stijl."
    },
    {
        id: "MW-102",
        title: "Stijlvolle Woonkamer met Kunstwerk",
        description: "Moderne woonkamer met handbeschilderd canvas kunstwerk en elegante inrichting",
        category: "interior",
        image: "images/20250804_1338_Stijlvolle Woonkamerreclame_remix_01k1tdx1rsfgea7qqy9s5szysd.png",
        products: [
            {
                name: "Handbeschilderde canvas Abstract Seven",
                price: "€289",
                shop: "Westwing",
                link: "https://www.westwing.nl/handbeschilderde-canvas-abstract-seven-159047.html"
            }
        ],
        tips: "Voor een stijlvolle woonkamer, kies voor handbeschilderde kunstwerken die de ruimte karakter geven. Combineer abstracte kunst met neutrale meubels voor een moderne uitstraling."
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
    
    // Add product type for hover label
    const productType = item.products[0]?.name.toLowerCase().includes('spiegel') ? 'mirror' : 
                       item.products[0]?.name.toLowerCase().includes('canvas') ? 'painting' : 'product';
    div.setAttribute('data-product-type', productType);
    
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
                                            <span style="color: #cccccc; margin-right: 1rem;">${product.price}</span>
                                            <a href="${product.link}" target="_blank" class="buy-btn">
                                                Kopen bij ${product.shop}
                                            </a>
                                        </div>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                        
                        <div class="product-tips">
                            <h3>💡 Styling Tips van Sofie</h3>
                            <p>${item.tips}</p>
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