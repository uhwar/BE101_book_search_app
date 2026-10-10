const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');
const resultList = document.querySelector('#results-list');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    console.log('Search clicked with term:', searchTerm);
});

