document.addEventListener('DOMContentLoaded', function () {
    const bookList = document.getElementById('book-list');
    const addBookForm = document.getElementById('add-book-form');
    const searchInput = document.getElementById('search');
    const searchResults = document.getElementById('search-results');

    const books = [
        "Python for Data Science Handbook",
        "Learning Web Design",
        "JavaScript: The Good Parts",
        "Introduction to Machine Learning with Python"
    ];

    addBookForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const isbn = document.getElementById('isbn').value;

        if (isDuplicate(isbn)) {
            alert('Book with the same ISBN already exists.');
            return;
        }

        const newBook = { title, author, isbn };
        books.push(newBook);
        displayBooks();
        addBookForm.reset();
    });

    function isDuplicate(isbn) {
        return books.some(book => book.isbn === isbn);
    }

    function displayBooks() {
        bookList.innerHTML = '';
        books.forEach(book => {
            const li = document.createElement('li');
            li.textContent = `${book.title} by ${book.author} (ISBN: ${book.isbn})`;
            bookList.appendChild(li);
        });
    }

    searchInput.addEventListener('input', function () {
        const query = searchInput.value.toLowerCase();
        const results = books.filter(book => book.title.toLowerCase().includes(query));
        displaySearchResults(results);
    });

    function displaySearchResults(results) {
        searchResults.innerHTML = '';
        results.forEach(book => {
            const li = document.createElement('li');
            li.textContent = `${book.title} by ${book.author} (ISBN: ${book.isbn})`;
            searchResults.appendChild(li);
        });
    }
});