window.onload=function(){
       fetch("http://localhost:3000/notes")
    .then(res=>res.json())
    .then(data=>displayinfo(data));
}
function addNote(){
    let input= document.getElementById("note").value;
    if(input==="") return;
    fetch("http://localhost:3000/notes",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({note:input})
    })
    .then(res=>res.json())
    .then(data=>displayinfo(data));
    document.getElementById("note").value="";
}
function displayinfo(notes){
    let list= document.getElementById("notelist");
    list.innerHTML="";
    notes.forEach(function(data){
        let li=document.createElement("li");
        let btn= document.createElement("button");
        let btn2= document.createElement("button");
        btn.innerHTML="Delete";
        btn2.innerHTML="Edit";
        li.innerHTML=data.note;
         btn.onclick=function(e){
        e.stopPropagation();
        fetch("http://localhost:3000/notes/"+ data.id,{
            method:"DELETE",
        }).then(res=>res.json())
        .then(newdata=>displayinfo(newdata));
        }
        btn2.onclick=function(){
            let newText = prompt("edit your note",data.note);
            if(newText===null|| newText==="") return;
            fetch("http://localhost:3000/notes/"+data.id,{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json",
                },body:JSON.stringify({note:newText})
            }).then(res=>res.json())
            .then(updated=>displayinfo(updated));
        }
        li.appendChild(btn);
        li.appendChild(btn2);
        list.appendChild(li);
    }
)
}