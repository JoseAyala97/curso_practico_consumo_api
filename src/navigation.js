//llamado del evento 
window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
    console.log({ location });
    if (location.hash.startsWith('#trends')) {
        trendsPage();
    } else if (location.hash.startsWith('#search=')) {
        searchPage();
    } else if (location.hash.startsWith('#movie=')) {
        moviesPage();
    } else if (location.hash.startsWith('#category=')) {
        categoriesPage();
    } else {
        homePage();
    }
    location.hash
}

function trendsPage() {
    console.log('trends!!');
}
function moviesPage() {
    console.log('movie!!');
}
function searchPage() {
    console.log('search!!');
}
function categoriesPage() {
    console.log('category!!');
}
function homePage() {
    console.log('home!');
    getTrendingMoviesPreview();
    getCategoriesPreview();
}
