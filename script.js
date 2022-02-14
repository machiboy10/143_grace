
const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')
const btn = document.querySelector('#play')
let playing = false;
let clickTime = 0;
let timer;
loveMe.addEventListener('click', (e) => {
  
    playing = !playing;

    if(playing){
        playSong();
         timer = window.setInterval(createHeartAuto, 500);      
    }else{
        playSong();
        clearTimeout(timer);
    }
})

function playSong(){    
   const player = document.getElementById('nobita');
   if(playing == true){
    player.play();
   }else {
    player.pause();
   } 
}

const createHeartAuto = () => {
   
    randX = getRandomInt(0,loveMe.clientWidth)
    randY = getRandomInt(0,loveMe.clientHeight)
    console.log(randX, randY);
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    heart.style.top = `${randY}px`
    heart.style.left = `${randX}px`

    loveMe.appendChild(heart)
}

function getRandomInt(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }


  function myFunctionbutton() {
    x.disabled = true;
    x.innerText = "Loading...";
    setTimeout(() => {
       x.innerText = "add to bag";
       x.disabled = false;
    }, 4000);
    
  }

