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
const closebtn = document.getElementById('close');
const themebtn = document.getElementById('theme');

var lol = false;
themebtn.addEventListener('click', function () {
    var iconElement = document.querySelector('#theme i');
    iconElement.classList.remove('bx-sun');
    iconElement.classList.add('bx-moon');
    document.getElementById('X').style.backgroundColor = '#ADEFD1FF';
    if (lol) {
        iconElement.classList.remove('bx-moon');
        iconElement.classList.add('bx-sun');
        document.getElementById('X').style.backgroundColor = '#00203FFF';
        document.getElementById('h1').style.color = '#ADEFD1FF';
        button.style.backgroundColor = ('#ADEFD1FF');
        button.style.color = ('#00203FFF');
        document.getElementById('foot').style.backgroundColor = '#00203FFF';
        document.getElementById('foot').style.borderTopColor = '#ADEFD1FF';
        search.style.backgroundColor = '#ADEFD1FF';
        search.style.color = '#00203FFF';
        clearall.style.backgroundColor = '#ADEFD1FF';
        clearall.style.color = '#00203FFF';
        themebtn.style.backgroundColor = '#ADEFD1FF';
        themebtn.style.color = '#00203FFF';
        Profile.style.backgroundColor = '#ADEFD1FF';
        Profile.style.color = '#00203FFF';
        var elements = document.querySelectorAll('.btn');
        elements.forEach(function(button) {
            button.style.borderColor = '#00203FFF'; 
        });
        result.style.borderColor = '#ADEFD1FF';
        
    } else {
        iconElement.classList.remove('bx-sun');
        iconElement.classList.add('bx-moon');
        document.getElementById('X').style.backgroundColor = '#ADEFD1FF';
        document.getElementById('h1').style.color =  '#00203FFF';
        button.style.backgroundColor = ('#00203FFF');
        button.style.color = ('#ADEFD1FF');
        document.getElementById('foot').style.backgroundColor = '#ADEFD1FF';
        document.getElementById('foot').style.borderTopColor = '#00203FFF';
        search.style.backgroundColor = '#00203FFF';
        search.style.color = '#ADEFD1FF';
        clearall.style.backgroundColor = '#00203FFF';
        clearall.style.color = '#ADEFD1FF';
        themebtn.style.backgroundColor = '#00203FFF';
        themebtn.style.color = '#ADEFD1FF';
        Profile.style.backgroundColor = '#00203FFF';
        Profile.style.color = '#ADEFD1FF';
        var elements = document.querySelectorAll('.btn');
        elements.forEach(function(button) {
            button.style.borderColor = '#ADEFD1FF'; 
        });
        result.style.borderColor = '#00203FFF';
        
        
    }
    lol = !lol;
})

function Profileveiw() {
    var profilediv = document.getElementById('pro-div-main');
    document.getElementById('body').style.filter = 'blur(10px)';
    profilediv.style.display = 'block';
}

closebtn.addEventListener('click', function () {
    var profilediv = document.getElementById('pro-div-main');
    document.getElementById('body').style.filter = 'none';
    profilediv.style.display = 'none';
})


var isSearchMode = false;

document.getElementById('search').addEventListener('click', function () {
    var iconElement = document.querySelector('#add i');
    var inputElement = document.getElementById('input');
    var searchButton = document.getElementById('search');

    if (isSearchMode) {
        iconElement.classList.remove('bx-search-alt-2');
        iconElement.classList.add('bx-list-plus');
        iconElement.style.fontSize = '35px';
        inputElement.placeholder = 'Add Task..';
        inputElement.type = '';
        searchButton.innerText = 'Search';
    } else {
        iconElement.classList.remove('bx-list-plus');
        iconElement.classList.add('bx-search-alt-2');
        iconElement.style.fontSize = '35px';
        inputElement.placeholder = "Search Here..";
        inputElement.type = "list";
        searchButton.innerText = `X`;
    }

    // Toggle the state
    isSearchMode = !isSearchMode;
});


var click = 0;
button.addEventListener('click', function () {
    AddTask();
});

input.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        AddTask();
    }
})


var count = 0;
function AddTask() {
    var Task = (input.value)
    console.log(Task);
    if (Task.length >= 1) {
        count += 1;
        const neww = document.createElement('p');
        const rev = document.createElement('button');
        rev.classList.add("btn");
        rev.setAttribute('id', 'rev');
        const compl = document.createElement('button');
        compl.classList.add("btn");
        rev.setAttribute('id', 'comp');
        compl.addEventListener('click', function () {
            neww.style.backgroundColor = 'rgb(109, 255, 90)';
            neww.style.color = '#00203FFF';
            alert('Congratulation.. You Successfuly Completed a Task..👏')
        })


        rev.addEventListener('click', function () {
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
    else {
        alert('Enter Something.....')
    }
}


clearall.addEventListener('click', function () {
    document.getElementById('taskbar').innerHTML = '';
    result.innerHTML = '';
    count = 0;
})





// Profile Page


function ChangePage1() {
    var pagebutton1 = document.getElementById('logbtn');
    var pagebutton2 = document.getElementById('sigbtn');
    var logindiv = document.getElementById('loginDiv');
    var signupdv = document.getElementById('signupDiv');
    pagebutton1.style.backgroundColor = '#00203FFF';
    pagebutton1.style.color = '#ADEFD1FF';
    pagebutton2.style.backgroundColor = '#ADEFD1FF';
    pagebutton2.style.color = '#00203FFF';
    logindiv.style.display = 'block';
    signupdv.style.display = 'none';
    var close = document.getElementById('close');
    close.style.backgroundColor = '#ADEFD1FF';
    close.style.color = '#00203FFF';
    close.style.borderColor = '#00203FFF';
}

function ChangePage2() {
    var pagebutton1 = document.getElementById('logbtn');
    var pagebutton2 = document.getElementById('sigbtn');
    var logindiv = document.getElementById('loginDiv');
    var signupdv = document.getElementById('signupDiv');
    pagebutton2.style.backgroundColor = '#00203FFF';
    pagebutton2.style.color = '#ADEFD1FF';
    pagebutton1.style.backgroundColor = '#ADEFD1FF';
    pagebutton1.style.color = '#00203FFF';
    logindiv.style.display = 'none';
    signupdv.style.display = 'block';
    var close = document.getElementById('close');
    close.style.backgroundColor = '#00203FFF';
    close.style.color = '#ADEFD1FF';
    close.style.borderColor = '#ADEFD1FF';
} 