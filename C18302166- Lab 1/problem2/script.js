showNotes()
let addBtn = document.getElementById('addBtn');
let redButton = document.getElementById('red');
let blueButton = document.getElementById('blue');
let greenButton = document.getElementById('green');
let yellowButton = document.getElementById('yellow');
let blackButton = document.getElementById('black');
let whiteButton = document.getElementById('white');
let pinkButton = document.getElementById('pink');

addBtn.addEventListener('click', function () {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');      
    if (notes === null) notesObj = []; 
    else notesObj = JSON.parse(notes)
    //pushing text into local storage 
    notesObj.push(addTxt.value);   
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = '';

    showNotes() 
});


//method that shows notes
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) notesObj = [];
    else notesObj = JSON.parse(notes);
    let html = ""; 
    notesObj.forEach(function (element, index) {
        html += ` <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p id="demo" class="card-text"> ${element}</p>
             <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>`;
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length == 0) notesElm.innerHTML = `Nothing to show!  <strong>  Use "Add a Note" Button to add notes.</strong>`;
    else notesElm.innerHTML = html;
}
 
let ClearAll = document.getElementById('ClearAll');
ClearAll.addEventListener('click', ClearAllFunction);

function ClearAllFunction() {
    let confirming = confirm('Are you sure')
    if (confirming === true) {
        localStorage.clear();
        location.reload();
    }
}
//function to delete a sepcific note
function deleteNote(index) {
    let notes = localStorage.getItem('notes');
    if (notes === null) DeletingSpecificNotesArray = [];
    else DeletingSpecificNotesArray = JSON.parse(notes)
    let confirmingForSpecificNotes = confirm('Are you sure')
    if (confirmingForSpecificNotes === true) {
        DeletingSpecificNotesArray.splice(index, 1)
        localStorage.setItem("notes", JSON.stringify(DeletingSpecificNotesArray))
        showNotes();
    }
}
let search = document.getElementById('searchTxt');

search.addEventListener('input', function () {
    let inputVal = search.value.toLowerCase(); 
    let noteCard = document.getElementsByClassName('noteCard'); 
    let HighLight = document.getElementById('demo')  
    Array.from(noteCard).forEach(function (document) {
        let cardTxt = document.getElementById("demo").innerText;
        if (cardTxt.includes(inputVal)) {
            document.style.display = "block";
            HighLight.style.background = "orange";
        }
        else document.style.display = "none"
    })

 
});

//Function that changes the background color of the notepad
redBtn.addEventListener('click', function (value) {
    document.row_container_fluid.style.background = value;
});

blueBtn.addEventListener('click', function (value) {
    document.row_container_fluid.style.background = value;
});

greenBtn.addEventListener('click', function (value) {
    document.row_container_fluid.style.background = value;
});

whiteBtn.addEventListener('click', function (value) {
    document.row_container_fluid.style.background = value
});

blackBtn.addEventListener('click', function (value) {
    document.row_container_fluid.style.background = value;
});

yellowBtn.addEventListener('click', function (value) {
    document.row_container_fluid.style.background = value;
});

pinkBtn.addEventListener('click', function (value) {
    document.row_container_fluid.style.background = value;
});
