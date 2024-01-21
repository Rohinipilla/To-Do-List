document.querySelector('#push').onclick= function(){
    if(document.querySelector('#newtask input').value.length==0){
        alert("please Enter a Task")
    }
    else{
        document.querySelector('#tasks').innerHTML +=`
        <div class="task">
            <span id="taskname">
                ${document.querySelector('#newtask input').value}
            </span>
            <button class="delete">
                Delete
            </button>
            
        </div>`;
    }

    var Current_tasks = document.querySelectorAll(".delete");

    for(var i=0;i<Current_tasks.length;i++){
        Current_tasks[i].onclick = function(){
            this.parentNode.remove();
        }
    }

    var tasks = document.querySelectorAll(".task");
    for(var i=0;i<tasks.length;i++){
        tasks[i].onclick = function(){
            this.classList.toggle('completed');
        }
    }

    document.querySelectorAll("#newtask input").value="";
}