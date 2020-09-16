function randomInt() {
    return Math.round(Math.random() * 255);
}

let lis = document.getElementsByTagName('li');
for (let i = 0; i < lis.length; i++) {
    lis[i].style.backgroundColor = `rgb(${randomInt()},${randomInt()},${randomInt()})`;
    lis[i].addEventListener('click', popOut, true);
}

function popOut(event) {
    console.log('click',event.srcElement);
    li=event.srcElement
}

li = lis[0];





// imgage

let img = document.createElement('img');
img.src='http://192.168.1.3:5000/static/img/100APPLE/IMG_0026';


img.addEventListener('load',(e)=>{console.log('img loaded!',e,e.eventPhase)});
img.addEventListener('error',(e)=>{console.log('img load error!',e,e.eventPhase)});

let body =document.getElementsByTagName('body')[0];

let imgContainer = document.getElementById('img-container');

