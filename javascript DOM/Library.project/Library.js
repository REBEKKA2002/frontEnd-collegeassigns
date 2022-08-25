

// Hosting(interview)


// OOPs js is more like objects
const tbody=document.getElementById('tbody');
tbody.innerHTML=localStorage.getItem('book-data')
a=0
bookdata =``

function  deletes(d){
    const rowindex=(d.parentNode.parentNode.rowIndex);    
    const tabledel=document.getElementsByTagName('tr')[rowindex];
    const table_body=document.getElementsByTagName('tbody')[0];
    table_body.removeChild(tabledel)
}

class Book{
     constructor(bookname,author,category){
         this.bookname=bookname
         this.author=author
         this.category=category

     }

}

class DisplayBook{
    constructor(book){
        this.book=book
    }
    addBook() {
        a++
        
        console.log(c);
         bookdata += `<tr><th scope="row">${a}</th>
                           <td>${ this.book.bookname}</td>
                           <td>${ this.book.author}</td>
                           <td>${ this.book.category}</td>
                           <td> <button class='btn btn-danger'onclick={deletes(this)}>Delete</button></td></tr>`

        tbody.innerHTML=bookdata
        localStorage.setItem('book-data',bookdata)

                        
    }
    
}


const libraryform =document.getElementById('library_form');

libraryform.addEventListener('submit',libraryformsubmit);

function libraryformsubmit(e){
    e.preventDefault(); //removes default features of submit button:refresh
    console.log('submitted 🐳');
    const bookname=document.getElementById('bookname').value;
    const author=document.getElementById('author').value;
    const cooking=document.getElementById('cooking');
    const coding=document.getElementById('coding');
    const adventure=document.getElementById('adventure');
    const alerts=document.getElementById('alerts');
        let category=""

    if(coding.checked){
        category="coding👩‍💻"
    }
    else if(cooking.checked){
        category="cooking👩‍🍳"
    }
    else{
        category="adventure🐳"
    }
    if(bookname!=''&& author!=''){
        const book=new Book(bookname,author,category);
         console.log(book);    
        const displaybook=new DisplayBook(book);
        displaybook.addBook()
        alerts.innerHTML=`<div class="alert alert-danger"role="alert">
        Book 🧧 has been added sucessfully✨
        </div>`

    

    }
    else{
        alerts.innerHTML=`<div class="alert alert-danger"role="alert">
        Try inputting all values again 😣
        </div>`
    }

    


    libraryform.reset();

    setTimeout(()=>{
        alerts.innerHTML=``

    },2000)

    



    
}

