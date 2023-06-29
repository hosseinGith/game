const ezLevel =document.querySelector('[data-ez]');
const midLevel =document.querySelector('[data-mid]');
const highLevel =document.querySelector('[data-high]');
const veryHighLevel =document.querySelector('[data-veryHigh]');
const utraLevel =document.querySelector('[data-utra]');

const loseContainer =document.querySelector('[data-lose-container]');
const loser =document.querySelectorAll('[data-lose] > div');
const levelMenu =document.querySelector('[data-select-menu]');
const returnBack =document.querySelector('[data-select-menu]');
const closeWindow =document.querySelector('[data-exit-btn]');

const enemy = document.querySelector('[data-enmemy]');
const myChar = document.querySelector('[data-myChar]');
const container = document.querySelector('[data-container]');
const containerLevel = document.querySelector('[data-container-level]');

const scurContainer = document.querySelector('[data-scur]');
const checkPointe = document.querySelector('[data-check-pointe]');



let startgame = false;
let level = 800;
let scurValue = 0;

let scur = document.createElement('span')
setInterval(()=>{
    scur.innerText ='Score ' + scurValue
},0)

scurContainer.appendChild(scur)

ezLevel.addEventListener('click',()=>{
    startgame = true;
    level = 800;
    containerLevel.style.display = 'none';
    container.style.filter = 'blur(0)';
    enemy.style.transition = 'all 2s';
});
midLevel.addEventListener('click',()=>{
    startgame = true;
    level = 200;
    containerLevel.style.display = 'none';
    container.style.filter = 'blur(0)';
    enemy.style.transition = 'all 1.5s';
});
highLevel.addEventListener('click',()=>{
    startgame = true;
    level = 100;
    containerLevel.style.display = 'none';
    container.style.filter = 'blur(0)';
    enemy.style.transition = 'all 1s';
});
veryHighLevel.addEventListener('click',()=>{
    startgame = true;
    level = 80;
    containerLevel.style.display = 'none';
    container.style.filter = 'blur(0)';
    enemy.style.transition = 'all .5s';
});
utraLevel.addEventListener('click',()=>{
    startgame = true;
    level = 0;
    containerLevel.style.display = 'none';
    container.style.filter = 'blur(0)';
    enemy.style.transition = 'all .2s';
});

function funcgame(e){
    let x = e.offsetX + 'px';
    let y = e.offsetY + 'px';

  
    if(!startgame || enemy.style.top == y || enemy === e.target || myChar === e.target || scurContainer === e.target || scur === e.target)
        return;

    container.offsetX = container.width;
    container.offsetY = container.height;

    myChar.style.left = `${x}`;
    myChar.style.top = `${y}`;
   
    if(level <= 0){
    setInterval(()=>{
        enemy.style.top =`${myChar.style.top}`;
        enemy.style.left =`${myChar.style.left}`;
    },0);
    }
    else if(level <= 80){
        setInterval(()=>{
            enemy.style.top =`${myChar.style.top}`;
            enemy.style.left =`${myChar.style.left}`;
        },80);
    }
    else if(level <= 100){
        setInterval(()=>{
            enemy.style.top =`${myChar.style.top}`;
            enemy.style.left =`${myChar.style.left}`;
        },100);
    }
    else if(level <= 200){
        setInterval(()=>{
            enemy.style.top =`${myChar.style.top}`;
            enemy.style.left =`${myChar.style.left}`;
        },200);
    }else{
        setInterval(()=>{
            enemy.style.top =`${myChar.style.top}`;
            enemy.style.left =`${myChar.style.left}`;
        },1000);
        };
        
        if(checkPointe === e.target){
            let randomCheckPointeX = Math.random() * 700;
            let randomCheckPointeY = Math.random() * 400;

            checkPointe.style.left = randomCheckPointeX + 'px';
            checkPointe.style.top = randomCheckPointeY + 'px';

            scurValue++;
        }else{
            checkPointe.style.left
            checkPointe.style.top 
        }



    
};

setInterval(()=>{
    let randomCheckPointeX = Math.random() * 700;
    let randomCheckPointeY = Math.random() * 400;

    checkPointe.style.left = randomCheckPointeX + 'px';
    checkPointe.style.top = randomCheckPointeY + 'px';
    if(!scurValue == 0){
        scurValue--;
    }
},2000)


window.addEventListener('load',()=>{
if(navigator.platform.valueOf() === 'Win32' || navigator.platform.valueOf() === 'Win64' ){
    loser[0].classList.add('hov');
    loser[1].classList.add('hov');
    // let randomEnemyX = Math.random() * 700;
    // let randomEnemyY = Math.random() * 400;
    
    // let randomMycharX = Math.random() * 700;
    // let randomMycharY = Math.random() * 400;
    
    // let randomCheckPointeX = Math.random() * 700;
    // let randomCheckPointeY = Math.random() * 400;
    // if(!startgame){
    // enemy.style.left = randomEnemyX + 'px';
    // enemy.style.top = randomEnemyY + 'px';
    
    // myChar.style.left = randomMycharX + 'px';
    // myChar.style.top = randomMycharY + 'px';

    // checkPointe.style.left = randomCheckPointeX + 'px';
    // checkPointe.style.top = randomCheckPointeY + 'px';
    let randomEnemyX = Math.random() * 400;
    let randomEnemyY = Math.random() * 400;

    let randomMycharX = Math.random() * 400;
    let randomMycharY = Math.random() * 400;
    
    let randomCheckPointeX = Math.random() * 200;
    let randomCheckPointeY = Math.random() * 200;
    if(!startgame){
        enemy.style.left = randomEnemyX + 'px';
        enemy.style.top = randomEnemyY + 'px';
        
        myChar.style.left = randomMycharX + 'px';
        myChar.style.top = randomMycharY + 'px';
    
        checkPointe.style.left = randomCheckPointeX + 'px';
        checkPointe.style.top = randomCheckPointeY + 'px';
};
}
else{
    alert('your divace')
}
});


returnBack.addEventListener('click',()=>{
    containerLevel.style.display = 'flex'
    loseContainer.style.display = 'none'
    
})


closeWindow.addEventListener('click',()=>{
    window.close();
});
container.addEventListener('mousemove',funcgame);

