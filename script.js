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
const Profile = document.getElementById('profile');

function Profileveiw(){
    var profilediv = document.getElementById('pro-div-main');
    profilediv.style.display = 'block';
}

document.getElementById('close').addEventListener('click',function(){
    var profilediv = document.getElementById('pro-div-main');
    profilediv.style.display = 'none';
})


var click = 0;
button.addEventListener('click',function(){
    AddTask();
});

input.addEventListener('keyup',function(event){
    if(event.keyCode === 13){
        AddTask();
    }
})

search.addEventListener('click',function(){
    searchoprt();
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
        compl.innerHTML = 'Complete'
        rev.innerText = 'Remove';
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
    count = 0;
})


function togglecontent(){
    input.style.backgroundColor= 'RED';
}


// Profile Page


function ChangePage1(){
    var pagebutton1 = document.getElementById('logbtn');
    var pagebutton2 = document.getElementById('sigbtn');
    var logindiv = document.getElementById('loginDiv');
    var signupdv = document.getElementById('signupDiv');
    pagebutton1.style.backgroundColor = 'white';
    pagebutton2.style.backgroundColor = 'red';
    logindiv.style.display = 'block';
    signupdv.style.display = 'none';
    var close = document.getElementById('close');
    close.style.backgroundColor = 'white';
    close.style.color = 'black';
    close.style.borderColor = 'red';
}

function ChangePage2(){
    var pagebutton1 = document.getElementById('logbtn');
    var pagebutton2 = document.getElementById('sigbtn');
    var logindiv = document.getElementById('loginDiv');
    var signupdv = document.getElementById('signupDiv');
    pagebutton2.style.backgroundColor = 'white';
    pagebutton1.style.backgroundColor = 'red';
    logindiv.style.display = 'none';
    signupdv.style.display = 'block';
    var close = document.getElementById('close');
    close.style.backgroundColor = 'red';
    close.style.color = 'white';
    close.style.borderColor = 'white';
}