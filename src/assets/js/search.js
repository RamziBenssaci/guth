// Search Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get search query from URL
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q') || '';
    
    const searchInput = document.getElementById('search-query');
    const searchInputMain = document.getElementById('search-input-main');
    
    if (searchInput && query) {
        searchInput.value = query;
    }
    if (searchInputMain && query) {
        searchInputMain.value = query;
    }
    
    // Update results count
    const resultsCount = document.getElementById('results-count');
    if (resultsCount && query) {
        resultsCount.innerHTML = `12 search results for <strong>"${query}"</strong>`;
    }
    
    // Search form
    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const query = searchInput.value;
            if (query) {
                window.location.href = `search.html?q=${encodeURIComponent(query)}`;
            }
        });
    }
});
