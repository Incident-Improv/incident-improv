let scenarios = [];
let currentScenario = null;
let currentCategory = 'all';
let searchTerm = '';

// Category icons mapping - Consolidated categories
const categoryIcons = {
    'AI & Emerging Tech': '🤖',
    'Incident Response': '🚨',
    'Security Operations': '🎯',
    'Access & Identity': '🔐',
    'Data Security & Privacy': '🛡️',
    'Cloud & Infrastructure': '☁️',
    'Network & Endpoint': '🌐',
    'Threats & Vulnerabilities': '⚠️',
    'Social Engineering': '🎣',
    'Supply Chain Risk': '🔗',
    'Compliance & Governance': '📋',
    'Physical & Insider Threats': '🕵️',
    'Technical Incidents': '💻',
    'Specialized Security': '🏢'
};

// Load scenarios from JSON file
async function loadScenarios() {
    try {
        const response = await fetch('scenarios.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        scenarios = await response.json();
        
        // Load initial scenario and display categories
        if (scenarios.length > 0) {
            loadRandomScenario();
            displayCategoryFilters();
            displayScenariosGrid();
        } else {
            displayError('No scenarios available');
        }
    } catch (error) {
        console.error('Error loading scenarios:', error);
        displayError('Failed to load scenarios. Please refresh the page.');
    }
}

// Load and display a random scenario
function loadRandomScenario() {
    if (scenarios.length === 0) {
        displayError('No scenarios loaded');
        return;
    }
    
    // If filtering by category, only choose from that category
    let availableScenarios = scenarios;
    if (currentCategory !== 'all') {
        availableScenarios = scenarios.filter(s => s.category === currentCategory);
    }
    
    const randomIndex = Math.floor(Math.random() * availableScenarios.length);
    const scenario = availableScenarios[randomIndex];
    displayScenario(scenario);
}

// Load a specific scenario by ID
function loadScenario(scenarioId) {
    const scenario = scenarios.find(s => s.id === scenarioId);
    if (scenario) {
        displayScenario(scenario);
        // Scroll to top of page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Display a scenario in the container
function displayScenario(scenario) {
    currentScenario = scenario;
    const container = document.getElementById('scenario-container');
    
    const optionsHtml = scenario.options.map(option => 
        `<div class="option" onclick="selectOption(this, ${option.correct})">
            <span class="option-letter">${option.letter})</span>
            ${option.text}
        </div>`
    ).join('');
    
    container.innerHTML = `
        <div class="scenario-tweet">
            <div class="scenario-header">
                <div class="scenario-meta">
                    <div class="difficulty-tag difficulty-${scenario.difficulty}">
                        ${scenario.difficulty}
                    </div>
                    <div class="category-tag">${scenario.category}</div>
                </div>
                <div class="scenario-number-display">#${scenario.id}</div>
            </div>
            
            <div class="scenario-content">
                ${scenario.scenario}
            </div>
            
            <div class="scenario-question">
                ${scenario.question}
            </div>
            
            <div class="options-container">
                ${optionsHtml}
            </div>
            
            <div class="real-world-section">
                <div class="real-world-label">Real World Context:</div>
                <div class="real-world-text">
                    ${scenario.realWorld.description}
                    <a href="${scenario.realWorld.link}" target="_blank" class="real-world-link">
                        Learn more →
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Display category filter buttons
function displayCategoryFilters() {
    const container = document.getElementById('category-filters');
    
    // Group scenarios by category and count
    const categories = {};
    scenarios.forEach(scenario => {
        if (!categories[scenario.category]) {
            categories[scenario.category] = 0;
        }
        categories[scenario.category]++;
    });
    
    // Sort categories alphabetically
    const sortedCategories = Object.keys(categories).sort();
    
    // Build HTML for category filters
    let html = `
        <div class="category-filter-btn all-categories ${currentCategory === 'all' ? 'active' : ''}" 
             onclick="filterByCategory('all')">
            <div class="category-icon">🎯</div>
            <div class="category-name">All</div>
            <div class="category-count">${scenarios.length} scenarios</div>
        </div>
    `;
    
    sortedCategories.forEach(category => {
        const icon = categoryIcons[category] || '📌';
        const isActive = currentCategory === category ? 'active' : '';
        html += `
            <div class="category-filter-btn ${isActive}" 
                 onclick="filterByCategory('${category.replace(/'/g, "\\'")}')">
                <div class="category-icon">${icon}</div>
                <div class="category-name">${category}</div>
                <div class="category-count">${categories[category]} scenarios</div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Filter scenarios by category
function filterByCategory(category) {
    currentCategory = category;
    
    // Update active state of category buttons
    document.querySelectorAll('.category-filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.closest('.category-filter-btn').classList.add('active');
    
    // Update title
    const titleElement = document.getElementById('scenarios-title');
    if (category === 'all') {
        titleElement.textContent = '📚 All Scenarios';
    } else {
        const icon = categoryIcons[category] || '📌';
        titleElement.textContent = `${icon} ${category} Scenarios`;
    }
    
    // Re-display scenarios grid with filter
    displayScenariosGrid();
}

// Display scenarios in a grid layout
function displayScenariosGrid() {
    const container = document.getElementById('scenarios-grid');
    
    // Filter scenarios based on current category and search term
    let filteredScenarios = scenarios;
    
    if (currentCategory !== 'all') {
        filteredScenarios = filteredScenarios.filter(s => s.category === currentCategory);
    }
    
    if (searchTerm) {
        filteredScenarios = filteredScenarios.filter(scenario => {
            const searchText = `${scenario.scenario} ${scenario.question} ${scenario.category}`.toLowerCase();
            return searchText.includes(searchTerm.toLowerCase());
        });
    }
    
    if (filteredScenarios.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                No scenarios found. Try a different filter or search term.
            </div>
        `;
        return;
    }
    
    // Build HTML for scenario cards
    let html = '';
    filteredScenarios.forEach(scenario => {
        const icon = categoryIcons[scenario.category] || '📌';
        html += `
            <div class="scenario-card" onclick="loadScenario(${scenario.id})">
                <div class="scenario-card-header">
                    <div class="scenario-card-meta">
                        <span class="scenario-number">#${scenario.id}</span>
                        <span class="scenario-card-difficulty difficulty-tag difficulty-${scenario.difficulty}">
                            ${scenario.difficulty}
                        </span>
                    </div>
                </div>
                <div class="scenario-card-category">${icon} ${scenario.category}</div>
                <div class="scenario-preview">
                    ${scenario.scenario}
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Filter scenarios based on search input
function filterScenarios() {
    searchTerm = document.getElementById('searchInput').value;
    displayScenariosGrid();
}

// Handle option selection
function selectOption(element, isCorrect) {
    // Remove any existing selections
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Mark selected option
    element.classList.add('selected');
}

// Display error message
function displayError(message) {
    const container = document.getElementById('scenario-container');
    container.innerHTML = `
        <div class="error">
            ${message}
        </div>
    `;
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadScenarios();
});