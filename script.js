// Inspiration data with translations
const inspirationData = [
    {
        id: "MW-101",
        title: {
            en: "Modern Interior Design",
            nl: "Modern Interieur Ontwerp",
            de: "Modernes Innenarchitektur Design",
            fr: "Design d'Intérieur Moderne"
        },
        image: "images/20250810_2006_Modern Interieur Ontwerp_remix_01k2ajejtbernv7bqnat5r6xn8.png",
        description: {
            en: "A stylish modern living room with carefully chosen furniture and accessories.",
            nl: "Een stijlvolle moderne woonkamer met zorgvuldig gekozen meubels en accessoires.",
            de: "Ein stilvolles modernes Wohnzimmer mit sorgfältig ausgewählten Möbeln und Accessoires.",
            fr: "Un salon moderne élégant avec des meubles et accessoires soigneusement choisis."
        },
        products: [
            {
                name: {
                    en: "Modern Sofa",
                    nl: "Moderne Bank",
                    de: "Moderne Couch",
                    fr: "Canapé Moderne"
                },
                link: "https://amzn.to/4mv97GA"
            },
            {
                name: {
                    en: "Abstract Painting",
                    nl: "Abstract Schilderij",
                    de: "Abstraktes Gemälde",
                    fr: "Peinture Abstraite"
                },
                link: "https://amzn.to/4ma6n1F"
            },
            {
                name: {
                    en: "Coffee Table",
                    nl: "Salontafel",
                    de: "Couchtisch",
                    fr: "Table Basse"
                },
                link: "https://amzn.to/4mbdPcY"
            },
            {
                name: {
                    en: "Cushion Cover",
                    nl: "Kussensloop",
                    de: "Kissenbezug",
                    fr: "Housse de Coussin"
                },
                link: "https://amzn.to/3HoiyJ5"
            }
        ],
        tips: {
            en: [
                "Combine different textures for a warm appearance",
                "Use a mix of modern and classic elements",
                "Ensure sufficient lighting to let the space breathe"
            ],
            nl: [
                "Combineer verschillende texturen voor een warme uitstraling",
                "Gebruik een mix van moderne en klassieke elementen",
                "Zorg voor voldoende verlichting om de ruimte te laten ademen"
            ],
            de: [
                "Kombinieren Sie verschiedene Texturen für ein warmes Aussehen",
                "Verwenden Sie eine Mischung aus modernen und klassischen Elementen",
                "Stellen Sie ausreichende Beleuchtung sicher, damit der Raum atmen kann"
            ],
            fr: [
                "Combinez différentes textures pour une apparence chaleureuse",
                "Utilisez un mélange d'éléments modernes et classiques",
                "Assurez-vous d'un éclairage suffisant pour laisser l'espace respirer"
            ]
        }
    },
    {
        id: "MW-102",
        title: "Elegante Woonkamer Sfeer",
        image: "images/20250810_2215_Elegante Woonkamer Sfeer_remix_01k2asw4zcfqc8gxz0737gexfg.png",
        description: "Een elegante woonkamer met kunstverlichting en een prachtige collectie abstracte schilderijen.",
        products: [
            {
                name: "Kunstverlichting",
                link: "https://amzn.to/4lrouPx"
            },
            {
                name: "Abstract Schilderij 1",
                link: "https://www.europosters.nl/art-photo/colour-study-i-abstract-rainbow-karl-wiener-v124266?affil=SOFIESINTERIORDESIGN10"
            },
            {
                name: "Abstract Schilderij 2",
                link: "https://www.europosters.nl/art-photo/colour-study-iii-abstract-rainbow-karl-wiener-v124269?affil=SOFIESINTERIORDESIGN10"
            },
            {
                name: "Abstract Schilderij 3",
                link: "https://www.europosters.nl/art-photo/colour-study-v-abstract-rainbow-karl-wiener-v124268?affil=SOFIESINTERIORDESIGN10"
            },
            {
                name: "Elegante Hoekbank",
                link: "https://amzn.to/4oqyrzr"
            },
            {
                name: "Stijlvol Behang",
                link: "https://amzn.to/459zvjw"
            },
            {
                name: "Moderne Salontafel",
                link: "https://amzn.to/3UUyfL6"
            }
        ],
        tips: [
            "Gebruik kunstverlichting om je schilderijen te laten stralen",
            "Combineer de drie schilderijen in een verticale lijn voor een dynamisch effect",
            "Kies behang dat de kleuren van je kunstwerken complementeert"
        ]
    },
    {
        id: "MW-103",
        title: {
            en: "Colorful Vase Collection",
            nl: "Kleurrijke Vaas Collectie",
            de: "Farbige Vasen Kollektion",
            fr: "Collection de Vases Colorés"
        },
        image: "images/20250812_1424_Chique Bloemenvazen Display_remix_01k2f3pw0ze51sfbn3eat46rjs.png",
        description: {
            en: "A beautiful collection of colorful vases in different shapes and sizes, perfect for adding vibrant accents to any room.",
            nl: "Een prachtige collectie kleurrijke vazen in verschillende vormen en maten, perfect voor het toevoegen van levendige accenten aan elke ruimte.",
            de: "Eine wunderschöne Kollektion farbiger Vasen in verschiedenen Formen und Größen, perfekt zum Hinzufügen lebendiger Akzente in jedem Raum.",
            fr: "Une belle collection de vases colorés dans différentes formes et tailles, parfaite pour ajouter des accents vibrants à n'importe quelle pièce."
        },
        products: [
            {
                name: {
                    en: "Blue Vase",
                    nl: "Blauwe Vaas",
                    de: "Blaue Vase",
                    fr: "Vase Bleu"
                },
                link: "https://amzn.to/4m6G6RK"
            },
            {
                name: {
                    en: "Green Vase",
                    nl: "Groene Vaas",
                    de: "Grüne Vase",
                    fr: "Vase Vert"
                },
                link: "https://amzn.to/4oxBzt6"
            },
            {
                name: {
                    en: "Brown Vase",
                    nl: "Bruine Vaas",
                    de: "Braune Vase",
                    fr: "Vase Marron"
                },
                link: "https://amzn.to/414Y9zs"
            },
            {
                name: {
                    en: "Crystal Vase",
                    nl: "Kristallen Vaas",
                    de: "Kristallvase",
                    fr: "Vase en Cristal"
                },
                link: "https://amzn.to/45eVS7i"
            }
        ],
        tips: {
            en: [
                "Arrange the vases in a group for maximum visual impact",
                "Mix different heights and shapes for an interesting composition",
                "Use seasonal flowers to complement the vase colors"
            ],
            nl: [
                "Rangschik de vazen in een groep voor maximaal visueel effect",
                "Meng verschillende hoogtes en vormen voor een interessante compositie",
                "Gebruik seizoensbloemen om de vaaskleuren te complementeren"
            ],
            de: [
                "Arrangieren Sie die Vasen in einer Gruppe für maximale visuelle Wirkung",
                "Mischen Sie verschiedene Höhen und Formen für eine interessante Komposition",
                "Verwenden Sie saisonale Blumen, um die Vasenfarben zu ergänzen"
            ],
            fr: [
                "Disposez les vases en groupe pour un impact visuel maximal",
                "Mélangez différentes hauteurs et formes pour une composition intéressante",
                "Utilisez des fleurs saisonnières pour compléter les couleurs des vases"
            ]
        }
    },
    {
        id: "MW-104",
        title: "Elegant Coffee Table Display",
        image: "images/20250810_2236_Elegant Coffee Table Display_remix_01k2av263tf21bdrn68ay8w4hj.png",
        description: "Een elegante koffietafel met decoratieve accessoires voor een verfijnde woonkamer.",
        products: [
            {
                name: "Decoratieve Boeken",
                link: "https://amzn.to/4oMro4n"
            },
            {
                name: "Sieraden Schaaltje",
                link: "https://amzn.to/45IQxoS"
            },
            {
                name: "Asymmetrische Spiegel",
                link: "https://amzn.to/4ou4AGh"
            },
            {
                name: "Keramische Vaas Set",
                link: "https://amzn.to/4fAcbiu"
            }
        ],
        tips: [
            "Gebruik decoratieve boeken om hoogte en textuur toe te voegen",
            "Combineer verschillende materialen voor een interessante look",
            "Plaats accessoires in oneven aantallen voor een natuurlijke balans"
        ]
    },
    {
        id: "MW-105",
        title: "Luxe Tafelindeling",
        image: "images/20250810_2254_Luxe Tafelindeling_remix_01k2aw3s52exra8k5xm0pcze45.png",
        description: "Een luxueuze tafelindeling met kristalglazen, elegant bestek en stijlvolle borden voor speciale gelegenheden.",
        products: [
            {
                name: "Nachtmann Kristalglazen",
                link: "https://amzn.to/45smDnE"
            },
            {
                name: "Amefa Felicity Bestekset",
                link: "https://amzn.to/46RheJc"
            },
            {
                name: "Stijlvolle Borden Set",
                link: "https://amzn.to/45tvJQQ"
            }
        ],
        tips: [
            "Gebruik kristalglazen voor een luxueuze uitstraling bij speciale diners",
            "Zorg voor voldoende ruimte tussen bestek en borden voor een elegante look",
            "Combineer verschillende materialen voor een interessante textuur"
        ]
    },
    {
        id: "MW-106",
        title: "Elegantly Styled Vases",
        image: "images/20250810_2344_Elegantly Styled Vases_remix_01k2ayzay1eh9t2g0c9y6afw3y.png",
        description: "Een elegante display van gestileerde vazen met decoratieve accessoires voor een verfijnde woonkamer.",
        products: [
            {
                name: "Little Book of Hermès",
                link: "https://amzn.to/45Jmttd"
            },
            {
                name: "ARJDXDP Sieradenschaal",
                link: "https://amzn.to/4oqyL17"
            },
            {
                name: "Keramische Kleine Bloemenvazen",
                link: "https://amzn.to/4ouSbBO"
            },
            {
                name: "Abstract Art Seize the Day",
                link: "https://www.europosters.nl/marketplace/abstract-art-seize-the-day-v156011?affil=SOFIESINTERIORDESIGN10"
            }
        ],
        tips: [
            "Gebruik het Hermès boek als decoratief element voor hoogte en stijl",
            "Combineer de sieradenschaal met de vazen voor een gebalanceerde look",
            "Het abstracte schilderij voegt kleur en dynamiek toe aan de compositie"
        ]
    },
    {
        id: "MW-107",
        title: {
            en: "Colorful Glass Collection",
            nl: "Kleurrijke Glas Collectie",
            de: "Farbige Glas Kollektion",
            fr: "Collection de Verres Colorés"
        },
        image: "images/20250814_1911_Kan met Water_remix_01k2mrx8ztemvtxrrfed5ndz61.png",
        description: {
            en: "A beautiful collection of handcrafted colorful glasses, perfect for adding vibrant accents to any table setting.",
            nl: "Een prachtige collectie handgemaakte kleurrijke glazen, perfect voor het toevoegen van levendige accenten aan elke tafelsetting.",
            de: "Eine wunderschöne Kollektion handgefertigter farbiger Gläser, perfekt zum Hinzufügen lebendiger Akzente in jedem Tischsetting.",
            fr: "Une belle collection de verres colorés artisanaux, parfaite pour ajouter des accents vibrants à n'importe quel dressage de table."
        },
        products: [
            {
                name: {
                    en: "Zafferano Colorful Glasses Set",
                    nl: "Zafferano Kleurrijke Glazen Set",
                    de: "Zafferano Farbige Gläser Set",
                    fr: "Set de Verres Colorés Zafferano"
                },
                link: "https://amzn.to/4mgPn9S"
            }
        ],
        tips: {
            en: [
                "Use these glasses for special occasions and elegant dinners",
                "Combine with subtle lighting for an elegant atmosphere",
                "Ensure sufficient space between glasses for a balanced look"
            ],
            nl: [
                "Gebruik deze glazen voor speciale gelegenheden en elegante diners",
                "Combineer met subtiele verlichting voor een elegante sfeer",
                "Zorg voor voldoende ruimte tussen de glazen voor een gebalanceerde look"
            ],
            de: [
                "Verwenden Sie diese Gläser für besondere Anlässe und elegante Diners",
                "Kombinieren Sie mit subtiler Beleuchtung für eine elegante Atmosphäre",
                "Stellen Sie ausreichend Platz zwischen den Gläsern für einen ausgewogenen Look sicher"
            ],
            fr: [
                "Utilisez ces verres pour des occasions spéciales et des dîners élégants",
                "Combinez avec un éclairage subtil pour une atmosphère élégante",
                "Assurez-vous d'avoir suffisamment d'espace entre les verres pour un look équilibré"
            ]
        }
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
        const productName = typeof product.name === 'object' ? product.name[currentLanguage] : product.name;
        const nameLower = productName.toLowerCase();
        
        // Define hover label translations
        const hoverLabels = {
            en: {
                sofa: 'SOFA',
                painting: 'PAINTING',
                table: 'TABLE',
                cushion: 'CUSHION',
                lighting: 'LIGHTING',
                wallpaper: 'WALLPAPER',
                glassware: 'GLASSWARE',
                books: 'BOOKS',
                tray: 'TRAY',
                mirror: 'MIRROR',
                vase: 'VASE',
                cutlery: 'CUTLERY',
                plates: 'PLATES',
                product: 'PRODUCT'
            },
            nl: {
                sofa: 'BANK',
                painting: 'SCHILDERIJ',
                table: 'TAFEL',
                cushion: 'KUSSEN',
                lighting: 'VERLICHTING',
                wallpaper: 'BEHANG',
                glassware: 'GLAZEN',
                books: 'BOEKEN',
                tray: 'SCHAALTJE',
                mirror: 'SPIEGEL',
                vase: 'VAAS',
                cutlery: 'BESTEK',
                plates: 'BORDEN',
                product: 'PRODUCT'
            },
            de: {
                sofa: 'COUCH',
                painting: 'GEMÄLDE',
                table: 'TISCH',
                cushion: 'KISSEN',
                lighting: 'BELEUCHTUNG',
                wallpaper: 'TAPETE',
                glassware: 'GLÄSER',
                books: 'BÜCHER',
                tray: 'SCHALE',
                mirror: 'SPIEGEL',
                vase: 'VASE',
                cutlery: 'BESTECK',
                plates: 'TELLER',
                product: 'PRODUKT'
            },
            fr: {
                sofa: 'CANAPÉ',
                painting: 'PEINTURE',
                table: 'TABLE',
                cushion: 'COUSSIN',
                lighting: 'ÉCLAIRAGE',
                wallpaper: 'PAPIER PEINT',
                glassware: 'VERRERIE',
                books: 'LIVRES',
                tray: 'PLATEAU',
                mirror: 'MIROIR',
                vase: 'VASE',
                cutlery: 'COUTELLERIE',
                plates: 'ASSIETTES',
                product: 'PRODUIT'
            }
        };
        
        let productType = 'product';
        if (nameLower.includes('bank') || nameLower.includes('hoekbank') || nameLower.includes('sofa') || nameLower.includes('couch') || nameLower.includes('canapé')) productType = 'sofa';
        else if (nameLower.includes('schilderij') || nameLower.includes('painting') || nameLower.includes('gemälde') || nameLower.includes('peinture')) productType = 'painting';
        else if (nameLower.includes('salontafel') || nameLower.includes('coffee table') || nameLower.includes('couchtisch') || nameLower.includes('table basse')) productType = 'table';
        else if (nameLower.includes('kussensloop') || nameLower.includes('cushion') || nameLower.includes('kissenbezug') || nameLower.includes('housse')) productType = 'cushion';
        else if (nameLower.includes('verlichting') || nameLower.includes('kunstverlichting') || nameLower.includes('lighting') || nameLower.includes('lamp')) productType = 'lighting';
        else if (nameLower.includes('behang') || nameLower.includes('wallpaper')) productType = 'wallpaper';
        else if (nameLower.includes('glazen') || nameLower.includes('zafferano') || nameLower.includes('kristalglas') || nameLower.includes('glassware')) productType = 'glassware';
        else if (nameLower.includes('boeken') || nameLower.includes('decoratieve') || nameLower.includes('hermès') || nameLower.includes('books')) productType = 'books';
        else if (nameLower.includes('schaaltje') || nameLower.includes('sieradenschaal') || nameLower.includes('arjdxdp') || nameLower.includes('tray')) productType = 'tray';
        else if (nameLower.includes('spiegel') || nameLower.includes('asymmetrische') || nameLower.includes('mirror')) productType = 'mirror';
        else if (nameLower.includes('vaas') || nameLower.includes('keramische') || nameLower.includes('bloemenvazen') || nameLower.includes('vase')) productType = 'vase';
        else if (nameLower.includes('bestek') || nameLower.includes('felicity') || nameLower.includes('cutlery')) productType = 'cutlery';
        else if (nameLower.includes('borden') || nameLower.includes('stijlvolle') || nameLower.includes('plates')) productType = 'plates';
        
        return hoverLabels[currentLanguage] ? hoverLabels[currentLanguage][productType] : hoverLabels.en[productType];
    });
    div.setAttribute('data-product-type', productTypes.join(', '));
    
    const title = typeof item.title === 'object' ? item.title[currentLanguage] : item.title;
    div.innerHTML = `
        <img src="${item.image}" alt="${title}" class="inspiration-image">
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
    
    // Get translated content
    const title = typeof item.title === 'object' ? item.title[currentLanguage] : item.title;
    const description = typeof item.description === 'object' ? item.description[currentLanguage] : item.description;
    const tips = typeof item.tips === 'object' ? item.tips[currentLanguage] : item.tips;
    
    // Create new page content
    const productPageHTML = `
        <div class="product-page">
            <div class="product-container">
                <button class="back-btn" onclick="goBack()">
                    <i class="fas fa-arrow-left"></i>
                    ${currentLanguage === 'en' ? 'Back to Inspiration' : 
                      currentLanguage === 'nl' ? 'Terug naar Inspiratie' :
                      currentLanguage === 'de' ? 'Zurück zur Inspiration' :
                      'Retour à l\'Inspiration'}
                </button>
                
                <div class="product-header">
                    <img src="${item.image}" alt="${title}" class="product-image">
                    <div class="product-info">
                        <h1>${title}</h1>
                        <p class="product-description">${description}</p>
                        
                        <div class="product-details">
                            <h3>${currentLanguage === 'en' ? 'Available Products' : 
                                 currentLanguage === 'nl' ? 'Beschikbare Producten' :
                                 currentLanguage === 'de' ? 'Verfügbare Produkte' :
                                 'Produits Disponibles'}</h3>
                            <ul class="product-list">
                                ${item.products.map(product => {
                                    const productName = typeof product.name === 'object' ? product.name[currentLanguage] : product.name;
                                    const isEuroposters = product.link.includes('europosters');
                                    return `
                                        <li class="product-item">
                                            <span class="product-name">${productName}</span>
                                            <div>
                                                <a href="${product.link}" target="_blank" class="buy-btn">
                                                    ${isEuroposters ? 
                                                        (currentLanguage === 'en' ? 'View on Europosters' : 
                                                         currentLanguage === 'nl' ? 'Bekijk op Europosters' :
                                                         currentLanguage === 'de' ? 'Auf Europosters ansehen' :
                                                         'Voir sur Europosters') :
                                                        (currentLanguage === 'en' ? 'View on Amazon' : 
                                                         currentLanguage === 'nl' ? 'Bekijk op Amazon' :
                                                         currentLanguage === 'de' ? 'Auf Amazon ansehen' :
                                                         'Voir sur Amazon')}
                                                </a>
                                            </div>
                                        </li>
                                    `;
                                }).join('')}
                            </ul>
                        </div>
                        
                        <div class="product-tips">
                            <h3>💡 ${currentLanguage === 'en' ? 'Styling Tips from Sofie' : 
                                     currentLanguage === 'nl' ? 'Styling Tips van Sofie' :
                                     currentLanguage === 'de' ? 'Styling-Tipps von Sofie' :
                                     'Conseils de Style de Sofie'}</h3>
                            <p>${Array.isArray(tips) ? tips.join(' ') : tips}</p>
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
    
    // Save current language before reloading
    const currentLang = localStorage.getItem('selectedLanguage') || 'en';
    
    // Reload the page to ensure we get back to the original state
    window.location.href = window.location.pathname;
    
    // The language will be restored by the load event listener
}

// Handle browser back button
window.addEventListener('popstate', function(event) {
    if (!event.state || !event.state.product) {
        // User clicked browser back button, reload to get back to home
        // The language will be restored by the load event listener
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
    // Restore selected language
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && savedLanguage !== 'en') {
        changeLanguage(savedLanguage);
    }
    
    const urlParams = new URLSearchParams(window.location.search);
    const productParam = urlParams.get('product');
    
    if (productParam) {
        const foundItem = inspirationData.find(item => item.id === productParam);
        if (foundItem) {
            openProductPage(foundItem);
        }
    }
});

// Language functionality
let currentLanguage = localStorage.getItem('selectedLanguage') || 'en';

const translations = {
    en: {
        'hero-subtitle': 'Scroll through our inspiration and discover how you can bring these designs to life. From elegant wall designs to complete spaces - every photo tells a story of style and comfort. No overpriced items, just affordable products you can shop directly from the inspiration photos.',
        'cta-button': 'Get Inspired',
        'section-title': 'Interior Inspiration',
        'section-subtitle': 'Discover our collection of stylish interior ideas',
        'nav-inspiration': 'Inspiration',
        'nav-about': 'About Sofie',
        'footer-description': 'Your source for stylish interior inspiration and design tips.',
        'footer-quick-links': 'Quick Links',
        'footer-contact': 'Contact',
        'footer-copyright': '© 2024 Sofie\'s Interior Design. All rights reserved.'
    },
    nl: {
        'hero-subtitle': 'Scroll door onze inspiratie en ontdek hoe jij deze designs tot leven kunt brengen. Van elegante muurdesigns tot complete ruimtes - elke foto vertelt een verhaal van stijl en comfort. Geen overdreven prijzen, gewoon betaalbare producten die je direct kunt shoppen uit de inspiratiefoto\'s.',
        'cta-button': 'Laat Je Inspireren',
        'section-title': 'Interieur Inspiratie',
        'section-subtitle': 'Ontdek onze collectie van stijlvolle interieurideeën',
        'nav-inspiration': 'Inspiratie',
        'nav-about': 'Over Sofie',
        'footer-description': 'Jouw bron voor stijlvolle interieurinspiratie en design tips.',
        'footer-quick-links': 'Quick Links',
        'footer-contact': 'Contact',
        'footer-copyright': '© 2024 Sofie\'s Interior Design. Alle rechten voorbehouden.'
    },
    de: {
        'hero-subtitle': 'Durchsuchen Sie unsere Inspiration und entdecken Sie, wie Sie diese Designs zum Leben erwecken können. Von eleganten Wanddesigns bis hin zu kompletten Räumen - jedes Foto erzählt eine Geschichte von Stil und Komfort. Keine überteuerten Artikel, nur erschwingliche Produkte, die Sie direkt aus den Inspirationsfotos kaufen können.',
        'cta-button': 'Inspirieren lassen',
        'section-title': 'Innenarchitektur Inspiration',
        'section-subtitle': 'Entdecken Sie unsere Sammlung stilvoller Innenarchitektur-Ideen',
        'nav-inspiration': 'Inspiration',
        'nav-about': 'Über Sofie',
        'footer-description': 'Ihre Quelle für stilvolle Innenarchitektur-Inspiration und Design-Tipps.',
        'footer-quick-links': 'Schnelllinks',
        'footer-contact': 'Kontakt',
        'footer-copyright': '© 2024 Sofie\'s Interior Design. Alle Rechte vorbehalten.'
    },
    fr: {
        'hero-subtitle': 'Parcourez notre inspiration et découvrez comment vous pouvez donner vie à ces designs. Des designs de murs élégants aux espaces complets - chaque photo raconte une histoire de style et de confort. Pas d\'articles surévalués, juste des produits abordables que vous pouvez acheter directement depuis les photos d\'inspiration.',
        'cta-button': 'Se laisser inspirer',
        'section-title': 'Inspiration Intérieure',
        'section-subtitle': 'Découvrez notre collection d\'idées d\'intérieur élégantes',
        'nav-inspiration': 'Inspiration',
        'nav-about': 'À propos de Sofie',
        'footer-description': 'Votre source d\'inspiration intérieure élégante et de conseils de design.',
        'footer-quick-links': 'Liens Rapides',
        'footer-contact': 'Contact',
        'footer-copyright': '© 2024 Sofie\'s Interior Design. Tous droits réservés.'
    }
};

function toggleLanguageMenu() {
    const menu = document.getElementById('languageMenu');
    menu.classList.toggle('show');
}

function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Save selected language to localStorage
    localStorage.setItem('selectedLanguage', lang);
    
    // Update current language indicator
    document.querySelector('.current-lang').textContent = lang.toUpperCase();
    
    // Update all translatable elements
    const elements = document.querySelectorAll('[data-en]');
    elements.forEach(element => {
        const key = element.getAttribute('data-en');
        const translatedText = element.getAttribute(`data-${lang}`);
        if (translatedText) {
            element.textContent = translatedText;
        } else if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    if (navLinks[0]) navLinks[0].textContent = translations[lang]['nav-inspiration'];
    if (navLinks[1]) navLinks[1].textContent = translations[lang]['nav-about'];
    
    // Reload inspiration grid with new language
    if (!isOnProductPage) {
        loadInspiration();
    }
    
    // Close language menu
    document.getElementById('languageMenu').classList.remove('show');
}

// Close language menu when clicking outside
document.addEventListener('click', (e) => {
    const languageSelector = document.querySelector('.language-selector');
    const languageMenu = document.getElementById('languageMenu');
    
    if (languageSelector && languageMenu && !languageSelector.contains(e.target)) {
        languageMenu.classList.remove('show');
    }
});