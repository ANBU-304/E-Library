<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-Library</title>
    <link rel="stylesheet" href="D:\FWD\projectcss.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
            </ul>
        </nav>
    </header>

    <section id="search">
        <h2>Search for Books</h2>
        <input type="text" id="searchInput" placeholder="Enter book title or author">
        <button onclick="searchBooks()">Search</button>
    </section>

    <section id="results">
        <h2>Search Results</h2>
        <div id="booksList"></div>
    </section>

    <script>
        // Sample book data
        const books = [
            { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, genre: "Classic" },
            { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, genre: "Fiction" },
            { title: "1984", author: "George Orwell", year: 1949, genre: "Dystopian" },
            { title: "Pride and Prejudice", author: "Jane Austen", year: 1813, genre: "Romance" }
            // Add more books as needed
        ];

        // Function to search for books
        function searchBooks() {
            const searchQuery = document.getElementById("searchInput").value.toLowerCase();
            const searchResults = books.filter(book => {
                return book.title.toLowerCase().includes(searchQuery) || book.author.toLowerCase().includes(searchQuery);
            });
            displayResults(searchResults);
        }

        // Function to display search results
        function displayResults(results) {
            const booksList = document.getElementById("booksList");
            booksList.innerHTML = ""; // Clear previous results
            if (results.length === 0) {
                booksList.innerHTML = "<p>No results found.</p>";
            } else {
                results.forEach(book => {
                    const bookItem = document.createElement("div");
                    bookItem.innerHTML = `<p><strong>Title:</strong> ${book.title}</p>
                                          <p><strong>Author:</strong> ${book.author}</p>
                                          <p><strong>Year:</strong> ${book.year}</p>
                                          <p><strong>Genre:</strong> ${book.genre}</p>`;
                    booksList.appendChild(bookItem);
                });
            }
        }
    </script>
</body>
</html>
