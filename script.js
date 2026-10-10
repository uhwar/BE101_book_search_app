const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');
const resultList = document.querySelector('#results-list');

// The actual searching logic
async function searchBooks(searchTerm) {
    if (!searchTerm) {
        resultList.textContent = 'Please enter a search term.';
        return;
    }
    console.log('searchBooks called with: ', searchTerm);
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(searchTerm)}`;
    // Response {type: 'cors', url: 'https://openlibrary.org/search.json?q=war',
    // redirected: false, status: 200, ok: true, …}
    const response = await fetch(url);
    console.log('Response Object:', response);
    // Parsed data: {numFound: 690120, start: 0, numFoundExact: true, 
    // num_found: 690120, documentation_url: 'https://openlibrary.org/dev/docs/api/search', …}
    const data = await response.json();
    console.log('Parsed data:', data)
    console.log('docs type:', Array.isArray(data.docs), 'length:', data.docs?.length);

    resultList.textContent =''; // clear old results

    for (const book of data.docs.slice(0, 10)) {
        const li = document.createElement('li');
        li.textContent = book.title || 'No title';
        resultList.appendChild(li);

    }
}


// Handles the action of pressing the button
searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm === '') {
        resultList.textContent = 'Please enter a search term';

        return;
    }
    console.log('Search clicked with term:', searchTerm);

    if (searchTerm != '') {
        searchBooks(searchTerm);
    }
});

