function gettitle_content(){
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    return {title,content};

}
addbtn.onclick = addnote;

function addnote(){
    const {title,content} = gettitle_content();
    if (title=="")
    {
        alert("NO TASK AA?");
    }
    const title1 = document.getElementById("title").value;
    const content1 = document.getElementById("content").value;
    const li = document.createElement("li");
    li.textContent = title1 + ": " + content1;
    document.getElementById("list").appendChild(li);
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";

    const delb = document.createElement("button");
    delb.textContent = "Finish oo?";
    li.appendChild(delb);
    delb.onclick = deleteit;

    function deleteit(){
        li.remove();
    }

const notes = JSON.parse(localStorage.getItem("notes"))||[];
notes.push({title,content});
localStorage.setItem("notes",JSON.stringify(notes));

}