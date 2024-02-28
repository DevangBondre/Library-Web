const myLibrary =[];

function Book(title, author, noOfPages, status) {
    this.title = title;
    this.author = author;
    this.noOfPages = noOfPages;
    this.status = status;
}

  
  function addBookToLibrary(event) {
    event.preventDefault();
    const title = event.target.title.value;
    const author = event.target.author.value;
    const noOfPages = event.target.noOfPages.value;
    const status = event.target.status.checked;

   
  }

function createBookCard(book){
  

}



function closeModal(){
    const modal = document.getElementById('myModal');
    const addBookBtn = document.getElementById('addBookBtn');

    addBookBtn.style.visibility = 'visible';
    modal.style.top = '0';
    modal.style.transform = 'translate(-50%,-50%)scale(0.1)';
    modal.style.visibility = 'hidden';
}

document.addEventListener('DOMContentLoaded',function(){
    var addBookBtn = document.getElementById('addBookBtn')
    var modal = document.getElementById('myModal')
    var addBookBtn = document.getElementById('addBookBtn')

    addBookBtn.addEventListener("click",function(){
        addBookBtn.style.visibility ='hidden'
        modal.style.top = '50%'; 
        modal.style.transform = 'translate(-50%,-50%)scale(1)';
        modal.style.visibility = 'visible'
    })
})  


