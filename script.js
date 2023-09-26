const button = document.getElementById('add');
const input = document.getElementById('input');
const result = document.getElementById('result');
const taskdetail = document.getElementById('taskdis');
const remove = document.getElementById('remove');
const taskman = document.getElementById('taskman');
const taskbar = document.getElementById('taskbar');
const buttonsdiv = document.getElementById('buttons');
const search = document.getElementById('search');
const clearall = document.getElementById('clear');


search.addEventListener('click',function(){
    
})


button.addEventListener('click',function(){
    AddTask();
});

input.addEventListener('keyup',function(event){
    if(event.keyCode === 13){
        AddTask();
    }
})

var count = 0;
function AddTask(){
    var Task = (input.value)
    console.log(Task);
    if(Task.length >= 1){
        count += 1;
        const neww = document.createElement('p');
        const rev = document.createElement('button');
        rev.classList.add("btn");
        const compl = document.createElement('button');
        compl.classList.add("btn");
        compl.addEventListener('click',function(){
            neww.style.backgroundColor = 'rgb(109, 255, 90)';
            alert('Congratulation.. You Successfuly Completed a Task..👏')
        })


        rev.addEventListener('click',function(){
            neww.remove();
            rev.remove();
            compl.remove();
        })
        compl.innerHTML = 'Mark Complete'
        rev.innerText = 'Remove Task';
        neww.innerHTML = (`${count}. ${Task}`);
        taskbar.appendChild(neww);
        taskbar.appendChild(rev);
        taskbar.appendChild(compl);
        result.appendChild(taskman);
        input.value = ''
    }
    else{
        alert('Enter Something.....')
    }
}


clearall.addEventListener('click',function(){
    result.innerHTML = '';
})