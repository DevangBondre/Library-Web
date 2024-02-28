
function addBookToLibrary(event) {
    event.preventDefault(); 

    const modal = document.getElementById('myModal')
    modal.style.visibility = "hidden"
    
    var title = document.getElementsByName("title")[0].value;
    var author = document.getElementsByName("author")[0].value;
    var noOfPages = document.getElementsByName("noOfPages")[0].value;
    var status = document.getElementsByName("status")[0].checked ? "Read" : "Unread";

  
    var card = document.createElement("div");
    card.className = "addedBooks";

  
    card.innerHTML = `
        <p>Title: ${title}</p>
        <p>Author: ${author}</p>
        <p>Pages: ${noOfPages}</p>
       
        <button class="readStatusBtn">Status</button>
        <button class="deleteBtn" onclick="deleteBook(this)">Delete</button> `;

    
    document.body.appendChild(card);

  
    card.style.visibility = "visible";
    

   
    document.getElementById("form").reset();
}


function deleteBook(button) {
    var card = button.parentNode;
    card.parentNode.removeChild(card);
}


function toggleReadStatus(button) {
    
}


document.getElementById("addBookBtn").addEventListener("click", function () {
    var modal = document.getElementById("myModal");
    modal.style.transform = "translate(-50%, -50%) scale(1)";
    modal.style.top = "50%";
    modal.style.visibility = "visible";
});


window.addEventListener("click", function (event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.transform = "translate(-50%, -50%) scale(0.1)";
        modal.style.top = "0";
        modal.style.visibility = "hidden";
    }
});


