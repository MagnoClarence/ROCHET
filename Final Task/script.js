// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Get the category ID from the URL
    var url = new URL(window.location.href);
    var categoryId = url.hash.substr(1);

    // Hide all categories
    var categories = document.querySelectorAll('section[id^="all-products"], section[id^="original-sizes"], section[id^="mini-sizes"]');
    categories.forEach(function(category) {
        category.style.display = 'none';
    });

    // Show the selected category
    var selectedCategory = document.getElementById(categoryId);
    if (selectedCategory) {
        selectedCategory.style.display = 'block';
    }
});
function showCategory(categoryId) {
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    var category = document.getElementById(categoryId);
    if (category) {
        category.style.display = 'block';
    }
}
