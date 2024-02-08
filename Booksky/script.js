var a=document.querySelector(".popup-overlay")
var b=document.querySelector(".popup-box")
function change(){
    a.style.display="block"
    b.style.display="block"
}

var cancelbutton=document.getElementById("cancel-popup")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    a.style.display="none"
    b.style.display="none"
})

var addbutton=document.getElementById("add-book")
var container=document.querySelector(".container")
var title=document.getElementById("Book-Title-Input")
var d=document.getElementById("Book-Description-input")
var author=document.getElementById("Book-Author-Input")

addbutton.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${title.value}</h2>
    <h5>${author.value}</h5>
    <p>${d.value}</p>
    <button onclick="d7(event)">Delete</button>`
    container.append(div)
    a.style.display="none"
    b.style.display="none"
})

function d7(event){
    event.target.parentElement.remove()
}