let add = document.getElementById('add-task');
let task_list = document.querySelector('.task-list');
let task_desc = document.getElementById('task-description');
let taskLine_template = document.getElementById('sample').content;

let copyHTML = document.importNode(taskLine_template, true);

let task = [];
let last_task = 0;
add.addEventListener('click', function(e){
    if(task_desc.value !== ""){
        last_task += 1;
        task[last_task] = copyHTML = document.importNode(taskLine_template, true);
        task[last_task].querySelector('p').textContent = task_desc.value;
        task[last_task].querySelector('.remove-btn').addEventListener('click', function(e){
            e.currentTarget.parentNode.remove();
        })
        task[last_task].querySelector('.done-check').addEventListener('change', function(e){
            if (this.checked) {
                e.currentTarget.parentNode.querySelector('p').style.textDecoration = "line-through";
              } else {
                e.currentTarget.parentNode.querySelector('p').style.textDecoration = "none";
              }
        })
        task_list.appendChild(task[last_task]);
        task_desc.value = "";
    }
    else alert("You can't create a blank task"); 
});

