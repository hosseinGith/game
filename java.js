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
const anmiatPointe = document.querySelector('[data-animation]');



let startgame = false;
let level = 800;
let scurValue = 0;

let scur = document.createElement('span')
setInterval(()=>{
    scur.innerText ='Scur ' + scurValue
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
       
        let conWidth = container.offsetWidth
        let conHeight = container.offsetHeight
        let checkpWidth = checkPointe.offsetWidth
        let checkpHeight = checkPointe.offsetHeight
        x = x > conWidth - checkpWidth ? conWidth - checkpWidth:x
        y = y > conHeight - checkpHeight ? conHeight - checkpHeight:y
       
        let enemyWidth = enemy.offsetWidth
        let enemyHeight = enemy.offsetHeight
        x = x > conWidth - enemyWidth ? conWidth - enemyWidth:x
        y = y > conHeight - enemyHeight ? conHeight - enemyHeight:y
        
        let myCharWidth = myChar.offsetWidth
        let myCharpHeight = myChar.offsetHeight
        x = x > conWidth - myCharWidth ? conWidth - myCharWidth:x
        y = y > conHeight - myCharpHeight ? conHeight - myCharpHeight:y 

        
        let randomCheckPointeX = Math.random() * 400;
        let randomCheckPointeY = Math.random() * 400;

        if(checkPointe === e.target){
            checkPointe.style.left = randomCheckPointeX + 'px';
            checkPointe.style.top = randomCheckPointeY + 'px';
            scurValue++;
        }
       
        
};

setInterval(()=>{
    anmiatPointe.classList.add('animation')
    if(navigator.platform.valueOf() === 'Win32' || navigator.platform.valueOf() === 'Win64' ){
        let randomCheckPointeX = Math.random() * 700;
        let randomCheckPointeY = Math.random() * 500;
        checkPointe.style.left = randomCheckPointeX + 'px';
        checkPointe.style.top = randomCheckPointeY + 'px';
    }else{
        let randomCheckPointeX = Math.random() * 350;
        let randomCheckPointeY = Math.random() * 350;
        console.log(randomCheckPointeX ,'\n'  , randomCheckPointeY)
        checkPointe.style.left = randomCheckPointeX + 'px';
        checkPointe.style.top = randomCheckPointeY + 'px';
        checkPointe.style.animation = 'time 2s linaer infinite'
        if(!scurValue == 0){
            scurValue--;
    }
    }
    if(!scurValue == 0){
        scurValue--;
    }
    },2000)
    

window.addEventListener('load',()=>{
if(navigator.platform.valueOf() === 'Win32' || navigator.platform.valueOf() === 'Win64' ){
    loser[0].classList.add('hov');
    loser[1].classList.add('hov');
    let randomEnemyX = Math.random() * 700;
    let randomEnemyY = Math.random() * 500;
    
    let randomMycharX = Math.random() * 700;
    let randomMycharY = Math.random() * 500;
    
    let randomCheckPointeX = Math.random() * 700;
    let randomCheckPointeY = Math.random() * 500;
    if(!startgame){
    enemy.style.left = randomEnemyX + 'px';
    enemy.style.top = randomEnemyY + 'px';
    
    myChar.style.left = randomMycharX + 'px';
    myChar.style.top = randomMycharY + 'px';

    checkPointe.style.left = randomCheckPointeX + 'px';
    checkPointe.style.top = randomCheckPointeY + 'px';

};
}else{
    let randomEnemyX = Math.random() * 350;
    let randomEnemyY = Math.random() * 350;

    let randomMycharX = Math.random() * 350;
    let randomMycharY = Math.random() * 350;
    
    let randomCheckPointeX = Math.random() * 350;
    let randomCheckPointeY = Math.random() * 350;
    if(!startgame){
        enemy.style.left = randomEnemyX + 'px';
        enemy.style.top = randomEnemyY + 'px';
        
        myChar.style.left = randomMycharX + 'px';
        myChar.style.top = randomMycharY + 'px';
        
        
        checkPointe.style.left = randomCheckPointeX + 'px';
        checkPointe.style.top = randomCheckPointeY + 'px';
    }
};
});


returnBack.addEventListener('click',()=>{
    containerLevel.style.display = 'flex'
    loseContainer.style.display = 'none'
    
})


closeWindow.addEventListener('click',()=>{
    window.close();
});
container.addEventListener('mousemove',funcgame);

