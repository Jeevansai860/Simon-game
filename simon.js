let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let colors=["one","two","three","four"];
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false)
    {
        console.log("Game started");
        started=true;
        levelup();
    }
});

function checkseq(idx){
    if(userseq[idx]==gameseq[idx])
    {
        if(userseq.length==gameseq.length)
        {
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`Game over! Your score was <b>${level}</b> <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor="white";
        }, 150);
        reset();
    }
}
function userflash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash");
   },250);
}
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randidx=Math.floor(Math.random()*3);
    let randcolor=colors[randidx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    btnflash(randbtn);
}

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function btnpress()
{
    let btn=this;
    userflash(btn);
    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    checkseq(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns)
{
    btn.addEventListener("click",btnpress);
}
function reset(){
    started=false;
    userseq=[];
    gameseq=[];
    level=0;
}
