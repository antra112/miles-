const startBtn = document.getElementById("startBtn");
const hook = document.getElementById("hook");
const exp = document.getElementById("experience");
const music = document.getElementById("bgMusic");

startBtn.onclick = () =>{
hook.style.display="none";
exp.classList.remove("hidden");
music.play();
};

function generateLove(){
const s=document.getElementById("sender").value;
const r=document.getElementById("receiver").value;
const met=document.getElementById("met").value;
const mem=document.getElementById("memory").value;
const yrs=document.getElementById("years").value;

const story=`<h2>${s} ❤️ ${r}</h2>
<p>It all began when ${met}. Since then, every moment — especially ${mem} — has been a chapter in our beautiful journey.</p>
<p>${yrs} years later, distance is just a number… because our hearts never left each other.</p>`;

const box=document.getElementById("loveStory");
box.innerHTML=story;
box.classList.remove("hidden");
box.scrollIntoView({behavior:"smooth"});
}

async function getDistance(){
const c1=document.getElementById("city1").value;
const c2=document.getElementById("city2").value;

try{
const res=await fetch(`https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${c1}&destinations=${c2}&key=YOUR_API_KEY`);
const data=await res.json();

const km=data.rows[0].elements[0].distance.text;

document.getElementById("distanceResult").innerText=
`Even though we are ${km} apart… my heart is always with you.`;

}catch{
document.getElementById("distanceResult").innerText=
"Love knows no distance 🤍";
}
}

function sendHug(){
navigator.vibrate?.(200);
document.getElementById("bears").innerHTML="ʕっ•ᴥ•ʔっ ʕ•ᴥ•ʔ";
}

function openEnvelope(){
document.getElementById("envelope").classList.remove("hidden");
}

function confetti(){
for(let i=0;i<120;i++){
let div=document.createElement("div");
div.style.position="fixed";
div.style.width="8px";
div.style.height="8px";
div.style.background="pink";
div.style.top="50%";
div.style.left="50%";
div.style.borderRadius="50%";
div.style.transform=`translate(${Math.random()*800-400}px,${Math.random()*800-400}px)`;
div.style.transition="1s";
document.body.appendChild(div);

setTimeout(()=>div.remove(),1000);
}
}

function toggleTheme(){
document.body.classList.toggle("light");
}

function toggleMusic(){
music.paused?music.play():music.pause();
}

let heartsOn=false;
function toggleHearts(){
if(heartsOn)return location.reload();

setInterval(()=>{
let heart=document.createElement("div");
heart.innerHTML="💗";
heart.style.position="fixed";
heart.style.left=Math.random()*100+"%";
heart.style.top="-20px";
heart.style.fontSize="20px";
heart.style.animation="fall 6s linear";
document.body.appendChild(heart);

setTimeout(()=>heart.remove(),6000);
},400);

heartsOn=true;
}
