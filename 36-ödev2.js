let addbutton = document.querySelector('#userForm')
addbutton.addEventListener('submit',formHandler)
let eklendi = document.querySelector("#liveToastscc")
let duzgungir = document.querySelector("#liveToasterr")
var myToast = new bootstrap.Toast(eklendi)
var notToast = new bootstrap.Toast(duzgungir)


const todos = JSON.parse(localStorage.getItem('todos'))
localStorage.setItem("todos", JSON.stringify([]))

function formHandler(event) {
    event.preventDefault()
    
    const AKSIYON = document.querySelector("#task")
    if(AKSIYON.value){
        newElement(AKSIYON.value)
        myToast.show()
    }
    else{
        notToast.show()
        localStorage.setItem("todos", JSON.stringify([]))
    }

    document.querySelector("#task").value = ""

}

let toDoListDOM = document.querySelector('#list')

toDoListDOM.addEventListener("click",done)
    function done(event) 
    {                                                      
        if (event.target.tagName === "LI") {                                
            event.target.classList.toggle("checked");}
        
        if (event.target.className === 'close'){
            event.target.parentElement.remove()

            let todos = JSON.parse(localStorage.getItem("todos"))
            icerikMetni = event.target.parentElement.textContent
            icerikMetniKesilmis = icerikMetni.slice(0, icerikMetni.length - 1)
            todos.forEach(function (todo,index){
                if (todo === icerikMetniKesilmis){
                    todos.splice(index,1)
                }
            })
            localStorage.setItem('todos',JSON.stringify(todos))
            
        }
    }




function newElement(toDo) {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `${toDo}`
    toDoListDOM.append(liDOM)
    
    let todos = JSON.parse(localStorage.getItem('todos'))
    todos.push(toDo)
    localStorage.setItem('todos',JSON.stringify(todos))


    let span = document.createElement("span")
    let cross = document.createTextNode("X")
    span.className = "close"
    span.appendChild(cross)
    liDOM.appendChild(span)
}




