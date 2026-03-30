const texts = [
  "hai byy ❤️",
  "aku cuma mau bilang sesuatu ke kamu...",
  "makasih ya udah ada di hidup aku",

  "aku tau aku kadang nyebelin",
  "kadang bikin kamu kesel",
  "tapi aku sayang banget sama kamu",

  "kalau kamu lagi capek...",
  "tolong jangan nyerah ya",
  "kamu kuat banget, serius",

  "semangat terus buat sekolah kamu 📚",
  "pelan-pelan aja gapapa",
  "yang penting kamu jangan berhenti",

  "aku bangga sama kamu",
  "bangga banget malah",

  "jaga kesehatan ya 🤍",
  "aku pengen kamu selalu sehat",

  "semoga semua urusan kamu",
  "dipermudah oleh Allah",

  "kalau kamu lagi ngerasa sendiri...",
  "ingat ya byy",

  "aku selalu ada buat kamu",
  "dan aku sayang kamu ❤️"
];

let i = 0;

const text = document.getElementById("text");
const title = document.getElementById("title");
const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const countdownText = document.getElementById("countdown");
const music = document.getElementById("music");
const btn = document.getElementById("btn");

/* ===== START ===== */
startBtn.onclick = () => {
  let count = 3;
  countdownText.innerHTML = count;

  const countdown = setInterval(() => {
    count--;
    countdownText.innerHTML = count;

    if (count === 0) {
      clearInterval(countdown);
      startScreen.style.display = "none";
      music.play();
      startText();
    }
  }, 1000);
};

/* ===== TEXT FLOW ===== */
function startText() {

  setTimeout(() => {
    title.style.opacity = 0;
  }, 4000);

  const interval = setInterval(() => {

    text.classList.remove("text-in");
    text.classList.add("text-out");

    setTimeout(() => {
      text.innerHTML = texts[i];

      text.classList.remove("text-out");
      text.classList.add("text-in");

      i++;

      if (i >= texts.length) {
        clearInterval(interval);
        showEnding();
      }

    }, 500);

  }, 3000);
}

/* ===== STOP SEMUA ANIMASI ===== */
function stopAllAnimations() {
  document.querySelectorAll(".flowers span, .bubbles span").forEach(el => el.remove());
}

/* ===== FIREWORK ===== */
function createFirework(x, y) {
  for (let i = 0; i < 15; i++) {
    const spark = document.createElement("div");
    spark.innerHTML = "💖";

    spark.style.position = "absolute";
    spark.style.left = x + "px";
    spark.style.top = y + "px";
    spark.style.fontSize = "16px";

    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 80 + 40;

    const xMove = Math.cos(angle) * distance;
    const yMove = Math.sin(angle) * distance;

    spark.style.transition = "1s ease-out";
    document.body.appendChild(spark);

    setTimeout(() => {
      spark.style.transform = `translate(${xMove}px, ${yMove}px)`;
      spark.style.opacity = 0;
    }, 10);

    setTimeout(() => spark.remove(), 1000);
  }
}

/* ===== ENDING ===== */
function showEnding() {

  stopAllAnimations();

  setTimeout(() => {

    text.classList.remove("text-in");
    text.classList.add("text-out");

    setTimeout(() => {

      text.innerHTML = `
        <div style="font-size:1.8rem; font-weight:500;">
          Dari Aku Untuk Kamu ❤️
        </div>
        <div style="margin-top:10px; font-size:1.2rem; opacity:0.8;">
          Our love lasts forever
        </div>
      `;

      text.classList.remove("text-out");
      text.classList.add("text-in");

      /* efek masuk halus */
      text.style.transform = "scale(0.8)";
      setTimeout(() => {
        text.style.transform = "scale(1)";
      }, 100);

      /* firework */
      setInterval(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * (window.innerHeight / 2);
        createFirework(x, y);
      }, 800);

    }, 500);

  }, 1000);
}

/* ===== BUNGA ===== */
setInterval(() => {
  const f = document.createElement("span");
  f.innerHTML = ["🌸","🌹","💖","✨"][Math.floor(Math.random()*4)];
  f.style.left = Math.random()*window.innerWidth+"px";
  f.style.animationDuration = (Math.random()*4+3)+"s";
  document.querySelector(".flowers").appendChild(f);
  setTimeout(()=>f.remove(),6000);
},300);

/* ===== BUBBLE ===== */
setInterval(() => {
  const b = document.createElement("span");
  b.innerHTML = ["💗","💞","💕"][Math.floor(Math.random()*3)];
  b.style.left = Math.random()*window.innerWidth+"px";
  b.style.animationDuration = (Math.random()*5+5)+"s";
  document.querySelector(".bubbles").appendChild(b);
  setTimeout(()=>b.remove(),8000);
},400);

/* ===== SPARKLE ===== */
document.addEventListener("mousemove", e=>{
  const s=document.createElement("div");
  s.className="sparkle";
  s.innerHTML=["✨","⭐","💫"][Math.floor(Math.random()*3)];
  s.style.left=e.pageX+"px";
  s.style.top=e.pageY+"px";
  document.body.appendChild(s);
  setTimeout(()=>s.remove(),1000);
});

/* ===== CLICK LOVE ===== */
document.addEventListener("click", e=>{
  const h=document.createElement("div");
  h.className="click-heart";
  h.innerHTML="💖";
  h.style.left=e.pageX+"px";
  h.style.top=e.pageY+"px";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),1000);
});

/* ===== MUSIC ===== */
btn.onclick=()=>{
  if(music.paused){music.play();btn.innerHTML="⏸";}
  else{music.pause();btn.innerHTML="🎵";}
};