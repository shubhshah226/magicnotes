console.log("Notes App");
shownotes();
let addBtn = document.getElementById("addbtn");
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addtxt");
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
        console.log(notesObj)
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notes);
    shownotes();
})
function shownotes() {
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
      <div class="notecard my-2 mx-2 card" style="width: 18rem;">
      <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deletenote(this.id)"class="btn btn-primary">Delete Note</button>
      </div>
      </div>  `;
    });
    let noteselm = document.getElementById('notes');
    if (notesObj.length != 0) {
        noteselm.innerHTML = html;
    }
    else
    {
        noteselm.innerHTML=`Nothing to Show`;
    }
}

function deletenote(index)
{
    console.log("I am Deleting this Note",index);
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
        console.log(notesObj)
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    shownotes();    

}
    let search=document.getElementById('searchTxt');
    search.addEventListener("input",function(){
        let inputval=search.value;
        let notecards=document.getElementsByClassName('notecard');
        Array.from(notecards).forEach(function(element){
            let cardTxt=element.getElementsByTagName("p")[0].innerText;
            if(cardTxt.includes(inputval)){
                element.style.display="block";
            }
            else{
                element.style.display="none";
            }
        })
    })
