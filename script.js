// Filter books when clicking category tags
function filterCategory(category) {
    let groups = document.querySelectorAll('.category-group');
    groups.forEach(group => {
        if (category === 'all' || group.getAttribute('data-category') === category) {
            group.style.display = 'block';
        } else {
            group.style.display = 'none';
        }
    });
}

// Live search bar functionality
function searchBooks() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let groups = document.querySelectorAll('.category-group');
    
    groups.forEach(group => {
        let text = group.innerText.toLowerCase();
        if (text.includes(input)) {
            group.style.display = 'block';
        } else {
            group.style.display = 'none';
        }
    });
}