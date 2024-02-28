// script.js

// Function to add a book to the library and generate a card view
function addBookToLibrary(event) {
    event.preventDefault(); // Prevents the form from submitting and reloading the page

    // Get the form inputs
    var title = document.getElementsByName("title")[0].value;
    var author = document.getElementsByName("author")[0].value;
    var noOfPages = document.getElementsByName("noOfPages")[0].value;
    var status = document.getElementsByName("status")[0].checked ? "Read" : "Unread";

    // Create a new div element for the card
    var card = document.createElement("div");
    card.className = "addedBooks";

    // Set the content of the card
    card.innerHTML = `
        <p>Title: ${title}</p>
        <p>Author: ${author}</p>
        <p>Pages: ${noOfPages}</p>
        <p>Status: ${status}</p>
        <button class="readStatusBtn">Toggle Read Status</button>
        <button class="deleteBtn" onclick="deleteBook(this)">Delete</button>
    `;

    // Append the card to the body or another container element
    document.body.appendChild(card);

    // Show the addedBooks container
    card.style.visibility = "visible";

    // Clear the form inputs
    document.getElementById("form").reset();
}

// Function to delete a book card
function deleteBook(button) {
    var card = button.parentNode;
    card.parentNode.removeChild(card);
}

// Function to toggle the read status on a book card
function toggleReadStatus(button) {
    // Add your logic to toggle the read status (e.g., change color, update text, etc.)
}

// Function to open the modal when the "Add a Book" button is clicked
document.getElementById("addBookBtn").addEventListener("click", function () {
    var modal = document.getElementById("myModal");
    modal.style.transform = "translate(-50%, -50%) scale(1)";
    modal.style.top = "50%";
    modal.style.visibility = "visible";
});

// Function to close the modal when the user clicks outside the modal
window.addEventListener("click", function (event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.transform = "translate(-50%, -50%) scale(0.1)";
        modal.style.top = "0";
        modal.style.visibility = "hidden";
    }
});
