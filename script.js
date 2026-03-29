//selecting popup box popup overlay button
var popupoverlay= document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//select cancel button
var cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
 
//select container,add-note,note-title-input,note-date-input,note-description=input

var container=document.querySelector(".container")
var addnote=document.getElementById("add-note")
var notetitleinput=document.getElementById("note-title-input")
var notedateinput=document.getElementById("note-date-input")
var notedescriptioninput=document.getElementById("note-description-input")

addnote.addEventListener("click",function(event){
    event.preventDefault()

    var div=document.createElement("div")
    div.setAttribute("class","note-container")
    div.innerHTML=`<h2>${notetitleinput.value}</h2>
     <h5>${notedateinput.value}</h5>
    <p>${notedescriptioninput.value}</p>

    <button onclick="deletebook(event)">Delete</button>`

    container.append(div)
     popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function deletebook(event)
{
    event.target.parentElement.remove()
}