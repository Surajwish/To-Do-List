function add(){
    let task = document.getElementById('task').value;
    if(task==""){
        alert("Please add a task");
    }
    else{
        let newlist = document.createElement('li');
        newlist.textContent = task;
        newlist.addEventListener('click', function(event){
            this.style.backgroundColor="rgb(159, 167, 131)";
            this.style.textDecoration="line-through";
            this.style.width="95%";
        });
        document.getElementById('list').appendChild(newlist);
    }
    document.getElementById('task').value="";
}

function clearall(){
    let list = document.getElementById('list');
    let size = list.childNodes.length
       for(let i =0;i < size;i++){
	   list.removeChild(list.childNodes[0]);
	}
}
