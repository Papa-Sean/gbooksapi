// Required module
import axios from "axios";

export default {
    // Retrieve books
    googleBooks: function(query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    },
    // Save book 
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
    // Get saved books 
    getBooks: function() {
        return axios.get("/api/books");
    },
    // Get book with ID
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },
    // Delete book ID
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }
};