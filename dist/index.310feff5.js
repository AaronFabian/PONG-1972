const t=function(t,e){let i=t.x,s=t.y;t.x<e.x?i=e.x:t.x>e.x+e.width&&(i=e.x+e.width),t.y<e.y?s=e.y:t.y>e.y+e.height&&(s=e.y+e.height);const n=t.x-i,h=t.y-s;return Math.sqrt(Math.pow(n,2)+Math.pow(h,2))<t.radius},e=document.getElementById("canvas"),i=document.getElementById("button--start"),s=document.querySelector(".player--one--sp__container"),n=document.querySelector(".player--two--sp__container"),h=document.querySelector(".player-one"),r=document.querySelector(".player-two"),a=document.querySelector(".container--UI");e.width=innerWidth,e.height=innerHeight;let o=!1;const l=e.getContext("2d");class d{constructor(t,i,s,n){const h=e.width/2+s+5,r=e.height/2+s-5,a=Math.random()-.5,l=Math.random()-.5;this.x=h,this.y=r,o?(this.dx=a<0?-1.5:1.5,this.dy=l<0?-2:2):(this.dx=a<0?-3:3,this.dy=l<0?-2.5:2.5),this.radius=s,this.color=n}draw(){l.beginPath(),l.arc(this.x,this.y,this.radius,0,2*Math.PI),l.fillStyle=this.color,l.fill(),l.closePath()}update(t){const i=()=>{m=!1,_=!0},s=()=>{u.pop(),u.push(new d(100,100,10,"white"))};o?this.y+this.radius>=e.height||this.y-this.radius<=0?(this.dy=-this.dy,this.y+this.radius>=e.height&&(t._score[0]++,t._renderSmartPhoneUI(),s(),i()),this.y-this.radius<=0&&(t._score[1]++,t._renderSmartPhoneUI(),s(),i())):(this.x-this.radius<=0||this.x+this.radius>=e.width)&&(this.dx=-this.dx):this.x+this.radius>=e.width||this.x-this.radius<=0?(this.dx=-this.dx,this.x+this.radius>=e.width&&(t._score[0]++,t._renderScore(),s(),i()),this.x-this.radius<=0&&(t._score[1]++,t._renderScore(),s(),i())):(this.y-this.radius<=0||this.y+this.radius>=e.height)&&(this.dy=-this.dy),this.x+=this.dx,this.y+=this.dy,this.draw()}}class c{constructor(t,i,s,n){this.width=t,this.height=i,this.color=n,this.whichPlayer=s,o?(1===s?(this.x=e.width/2-this.width/2,this.y=e.height-50):2===s&&(this.x=e.width/2-this.width/2,this.y=25),this.dx=2):(1===s?(this.x=e.width-50,this.y=e.height/2-this.height/2):2===s&&(this.x=50,this.y=e.height/2-this.height/2),this.dy=5)}draw(){l.beginPath(),l.fillStyle=this.color,l.fillRect(this.x,this.y,this.width,this.height),l.closePath()}update(){o?(y.i&&this.x>0&&1===this.whichPlayer&&(this.x-=this.dx),y.k&&this.x+this.width<=e.width&&1===this.whichPlayer&&(this.x+=this.dx),y.w&&this.x>=0&&2===this.whichPlayer&&(this.x-=this.dx),y.s&&this.x+this.width<=e.width&&2===this.whichPlayer&&(this.x+=this.dx)):(y.i&&this.y>=0&&1===this.whichPlayer&&(this.y-=this.dy),y.k&&this.y+this.height<=e.height&&1===this.whichPlayer&&(this.y+=this.dy),y.w&&this.y>=0&&2===this.whichPlayer&&(this.y-=this.dy),y.s&&this.y+this.height<=e.height&&2===this.whichPlayer&&(this.y+=this.dy)),this.draw()}}e.width;const y={w:!1,s:!1,i:!1,k:!1};let p,w,u=[],g=new class{#t=document.querySelector(".player--container");#e=document.querySelector(".player--container__name");#i=document.querySelector(".button--rendering");#s=document.querySelector(".smartphone--info__screen");_score=[0,0];#n=h;#h=r;#r="#00b0f0";#a="#c00000";#o="-";#l="-";constructor(){i.addEventListener("click",this.getDataPlayer.bind(this)),s.addEventListener("touchstart",(t=>{t.preventDefault();const e=t.target.closest(".p1--left__btn"),i=t.target.closest(".p1--right__btn");e&&(y.i=!0),i&&(y.k=!0)})),s.addEventListener("touchend",(t=>{t.preventDefault();const e=t.target.closest(".p1--left__btn"),i=t.target.closest(".p1--right__btn");e&&(y.i=!1),i&&(y.k=!1)})),n.addEventListener("touchstart",(t=>{t.preventDefault();const e=t.target.closest(".p2--left__btn"),i=t.target.closest(".p2--right__btn");e&&(y.w=!0),i&&(y.s=!0)})),n.addEventListener("touchend",(t=>{t.preventDefault();const e=t.target.closest(".p2--left__btn"),i=t.target.closest(".p2--right__btn");e&&(y.w=!1),i&&(y.s=!1)}))}_touchScreenButton(){}getDataPlayer(t){t.preventDefault();const e=/(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi;this.playerOneName=this.#n.querySelector(".form--player-1 input").value||this.#o,(this.playerOneName.length>6||e.test(this.playerOneName))&&(this.playerOneName=this.#o),this.playerOneColor=this.#n.querySelector(".option-dropdown").value||this.#r,this.playerTwoName=this.#h.querySelector(".form--player-2 input").value||this.#l,(this.playerTwoName.length>6||e.test(this.playerTwoName))&&(this.playerTwoName=this.#o),this.playerTwoColor=this.#h.querySelector(".option-dropdown").value||this.#a,this.loadingGame()}loadingGame(){a.classList.add("active__game"),e.width<=640?(o=!0,this.#i.classList.toggle("active__game"),this.#s.classList.toggle("active__game"),u.push(new d(100,100,10,"white")),p=new c(80,10,1,g.playerOneColor),w=new c(80,10,2,g.playerTwoColor)):(this._renderName(),u.push(new d(100,100,10,"white")),p=new c(15,175,1,g.playerOneColor),w=new c(15,175,2,g.playerTwoColor)),f()}_renderName(){this.#e.innerHTML="",this.#e.insertAdjacentHTML("afterbegin",this.nameUI())}_renderScore(){this.#t.innerHTML="",this.#t.insertAdjacentHTML("afterbegin",this.scoreUI())}_renderTouchScreenUI(){this.#i.innerHTML="",this.#i.insertAdjacentHTML("afterbegin",this.touchScreenUI())}_renderSmartPhoneUI(){this.#s.innerHTML="",this.#s.insertAdjacentHTML("afterbegin",this.smartPhoneUI())}touchScreenUI(){return'<div class="player--one--sp__container">\n              <div class="left--btn">\n                <svg\n                  xmlns="http://www.w3.org/2000/svg"\n                  fill="none"\n                  viewBox="0 0 24 24"\n                  stroke-width="1.5"\n                  stroke="currentColor"\n                  class="p1--left__btn"\n                  width="30"\n                >\n                  <path\n                    stroke-linecap="round"\n                    stroke-linejoin="round"\n                    d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"\n                  />\n                </svg>\n              </div>\n\n              <div class="right--btn">\n                <svg\n                  xmlns="http://www.w3.org/2000/svg"\n                  fill="none"\n                  viewBox="0 0 24 24"\n                  stroke-width="1.5"\n                  stroke="currentColor"\n                  width="30"\n                  class="p1--right__btn"\n                >\n                  <path\n                    stroke-linecap="round"\n                    stroke-linejoin="round"\n                    d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"\n                  />\n                </svg>\n              </div>\n            </div>\n\n            <div class="player--two--sp__container">\n              <div class="left--btn">\n                <svg\n                  xmlns="http://www.w3.org/2000/svg"\n                  fill="none"\n                  viewBox="0 0 24 24"\n                  stroke-width="1.5"\n                  stroke="currentColor"\n                  class="p2--left__btn"\n                  width="30"\n                >\n                  <path\n                    stroke-linecap="round"\n                    stroke-linejoin="round"\n                    d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"\n                  />\n                </svg>\n              </div>\n\n              <div class="right--btn">\n                <svg\n                  xmlns="http://www.w3.org/2000/svg"\n                  fill="none"\n                  viewBox="0 0 24 24"\n                  stroke-width="1.5"\n                  stroke="currentColor"\n                  width="30"\n                  class="p2--right__btn"\n                >\n                  <path\n                    stroke-linecap="round"\n                    stroke-linejoin="round"\n                    d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"\n                  />\n                </svg>\n              </div>\n            </div>'}scoreUI(){return`\n    <div>\n      <p>Player 2</p>\n      <h6 class="player__two">${this._score[0]}</h6>\n    </div>\n    <div>\n      <p>Player 1</p>\n      <h6 class="player__one">${this._score[1]}</h6>\n    </div>\n    `}nameUI(){return`<div class="player--2__name">\n              <p>${this.playerOneName}</p>\n            </div>\n            <small>Vs</small>\n            <div class="player--2__name">\n              <p>${this.playerTwoName}</p>\n            </div>`}smartPhoneUI(){return`<div class="player--1__screen">\n              <h4 class="player--1__name">P2</h4>\n              <small class="player__nickname">${this.playerTwoName}</small>\n              <span>-${this._score[0]}-</span>\n            </div>\n            <div class="player--2__screen">\n              <h4 class="player--1__name">P1</h4>\n              <small class="player__nickname">${this.playerOneName}</small>\n              <span>-${this._score[1]}-</span>\n            </div>`}machineCount(t){o?(l.beginPath(),l.font="32px serif",l.strokeStyle="white","Ready"===t?l.strokeText(String(t),e.width/2-35,e.height-50):l.strokeText(String(t),e.width/2,e.height-50),l.closePath()):(l.beginPath(),l.font="48px serif",l.strokeStyle="white","Ready"===t?l.strokeText(String(t),e.width/2-40,e.height/2):l.strokeText(String(t),e.width/2,e.height/2),l.closePath())}};let m=!1,_=!0,x=1,v=0;function f(){requestAnimationFrame(f),l.fillStyle="black",l.fillRect(0,0,e.width,e.height),m&&(o?((t(u[0],p)||p.height+u[0].radius<u[0].radius)&&(u[0].dy=-u[0].dy),(t(u[0],w)||p.height+u[0].radius<u[0].radius)&&(u[0].dy=-u[0].dy)):(t(u[0],p)&&(u[0].dx=-u[0].dx),t(u[0],w)&&(u[0].dx=-u[0].dx)),p.update(),w.update(),u[0].update(g)),x%150!=0||m||(v++,4===v&&(m=!0,_=!1,v=0)),_&&(0===v?(g.machineCount("Ready"),x++):(g.machineCount(v),x++))}window.addEventListener("keydown",(({key:t})=>{switch(t){case"i":y.i=!0;break;case"k":y.k=!0;break;case"w":y.w=!0;break;case"s":y.s=!0}})),window.addEventListener("keyup",(({key:t})=>{switch(t){case"i":y.i=!1;break;case"k":y.k=!1;break;case"w":y.w=!1;break;case"s":y.s=!1}}));
//# sourceMappingURL=index.310feff5.js.map
