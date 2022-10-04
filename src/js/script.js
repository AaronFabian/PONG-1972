'use strict';
import { getDistCirRec } from './utils';
import { getDistance } from './utils';

const canvas = document.getElementById('canvas');
const button = document.getElementById('button--start');
const playerOneTouch = document.querySelector('.player--one--sp__container');
const playerTwoTouch = document.querySelector('.player--two--sp__container');
const playerOneEl = document.querySelector('.player-one');
const playerTwoEl = document.querySelector('.player-two');
const containerUI = document.querySelector('.container--UI');

// setup
canvas.width = innerWidth;
canvas.height = innerHeight;
let isSmartPhone = false;

const c = canvas.getContext('2d');
//////////////////////////////////
//////////////////////////////////
class Ball {
  constructor(x, y, radius, color) {
    const randomX = canvas.width / 2 + radius + 5;
    const randomY = canvas.height / 2 + radius - 5;
    // const randomDx = (Math.random() - 0.5) * 10;
    // const randomDy = Math.random() * 10;
    const randValX = Math.random() - 0.5;
    const randValY = Math.random() - 0.5;

    this.x = randomX;
    this.y = randomY;

    if (isSmartPhone) {
      this.dx = randValX < 0 ? -1.5 : 1.5; // X's velocity
      this.dy = randValY < 0 ? -2 : 2; // Y's velocity
    } else {
      this.dx = randValX < 0 ? -3 : 3; // X's velocity
      this.dy = randValY < 0 ? -3 : 3; // Y's velocity
    }

    this.radius = radius;
    this.color = color;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    c.fillStyle = this.color;
    c.fill();
    // c.stroke();
    c.closePath();
  }

  update(machineObj) {
    const toggleEngine = () => {
      runEngine = false;
      isWrite = true;
    };

    if (isSmartPhone) {
      if (this.y + this.radius >= canvas.height || this.y - this.radius <= 0) {
        this.dy = -this.dy;
        if (this.y + this.radius >= canvas.height) {
          machineObj._score[0]++;
          machineObj._renderSmartPhoneUI();
          toggleEngine();
        }
        if (this.y - this.radius <= 0) {
          machineObj._score[1]++;
          machineObj._renderSmartPhoneUI();
          toggleEngine();
        }
      } else if (
        this.x - this.radius <= 0 ||
        this.x + this.radius >= canvas.width
      ) {
        this.dx = -this.dx;
      }
    } else {
      if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
        this.dx = -this.dx;
        if (this.x + this.radius >= canvas.width) {
          machineObj._score[0]++;
          machineObj._renderScore();
          toggleEngine();
        }
        if (this.x - this.radius <= 0) {
          machineObj._score[1]++;
          machineObj._renderScore();
          toggleEngine();
        }
      } else if (
        this.y - this.radius <= 0 ||
        this.y + this.radius >= canvas.height
      ) {
        this.dy = -this.dy;
      }
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

class Player {
  constructor(width, height, whichPlayer, color) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.whichPlayer = whichPlayer;

    if (isSmartPhone) {
      if (whichPlayer === 1) {
        this.x = canvas.width / 2 - this.width / 2;
        this.y = canvas.height - 50;
      } else if (whichPlayer === 2) {
        this.x = canvas.width / 2 - this.width / 2;
        this.y = 25;
      }
      // velocity
      this.dx = 2;
    } else {
      if (whichPlayer === 1) {
        this.x = canvas.width - 50;
        this.y = canvas.height / 2 - this.height / 2;
      } else if (whichPlayer === 2) {
        this.x = 50;
        this.y = canvas.height / 2 - this.height / 2;
      }

      // velocity
      this.dy = 5;
    }
  }

  draw() {
    c.beginPath();
    c.fillStyle = this.color;
    c.fillRect(this.x, this.y, this.width, this.height);
    c.closePath();
  }

  update() {
    if (isSmartPhone) {
      // player 1
      if (keyPad.i && this.x > 0 && this.whichPlayer === 1) {
        this.x -= this.dx;
        // ///////
      }

      if (
        keyPad.k &&
        this.x + this.width <= canvas.width &&
        this.whichPlayer === 1
      ) {
        this.x += this.dx;
      }

      if (keyPad.w && this.x >= 0 && this.whichPlayer === 2) {
        this.x -= this.dx;
      }

      // player 2
      if (
        keyPad.s &&
        this.x + this.width <= canvas.width &&
        this.whichPlayer === 2
      ) {
        this.x += this.dx;
      }
      ////////////////////////////////////////////////////////
    } else {
      // player 1
      if (keyPad.i && this.y >= 0 && this.whichPlayer === 1) {
        this.y -= this.dy;
      }

      if (
        keyPad.k &&
        this.y + this.height <= canvas.height &&
        this.whichPlayer === 1
      ) {
        this.y += this.dy;
      }

      if (keyPad.w && this.y >= 0 && this.whichPlayer === 2) {
        this.y -= this.dy;
      }

      // player 2
      if (
        keyPad.s &&
        this.y + this.height <= canvas.height &&
        this.whichPlayer === 2
      ) {
        this.y += this.dy;
      }
    }

    this.draw();
  }
}

class Machine {
  #scoreDisplay = document.querySelector('.player--container');
  #nameDisplay = document.querySelector('.player--container__name');
  #touchScreenUI = document.querySelector('.button--rendering');
  #spUI = document.querySelector('.smartphone--info__screen');

  _score = [0, 0];
  #playerOne = playerOneEl;
  #playerTwo = playerTwoEl;

  #playerOneDefColor = 'blue';
  #playerTwoDefColor = 'red';

  #playerOneDefName = '-';
  #playerTwoDefName = '-';

  constructor() {
    button.addEventListener('click', this.getDataPlayer.bind(this));

    playerOneTouch.addEventListener('touchstart', e => {
      e.preventDefault();
      const p1Left = e.target.closest('.p1--left__btn');
      const p2Right = e.target.closest('.p1--right__btn');

      if (p1Left) {
        keyPad.i = true;
      }

      if (p2Right) {
        keyPad.k = true;
      }
    });

    playerOneTouch.addEventListener('touchend', e => {
      e.preventDefault();
      const p1Left = e.target.closest('.p1--left__btn');
      const p1Right = e.target.closest('.p1--right__btn');

      if (p1Left) {
        keyPad.i = false;
      }

      if (p1Right) {
        keyPad.k = false;
      }
    });

    playerTwoTouch.addEventListener('touchstart', e => {
      e.preventDefault();
      const p2Left = e.target.closest('.p2--left__btn');
      const p2Right = e.target.closest('.p2--right__btn');

      if (p2Left) {
        keyPad.w = true;
      }

      if (p2Right) {
        keyPad.s = true;
      }
    });

    playerTwoTouch.addEventListener('touchend', e => {
      e.preventDefault();
      const p2Left = e.target.closest('.p2--left__btn');
      const p2Right = e.target.closest('.p2--right__btn');

      if (p2Left) {
        keyPad.w = false;
      }

      if (p2Right) {
        keyPad.s = false;
      }
    });
  }

  _touchScreenButton() {
    // playerOneTouch.addEventListener('touchstart', );
  }

  getDataPlayer(e) {
    e.preventDefault();
    const regexExp =
      /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi;

    // 01
    this.playerOneName =
      this.#playerOne.querySelector('.form--player-1 input').value ||
      this.#playerOneDefName;

    if (this.playerOneName.length > 6 || regexExp.test(this.playerOneName))
      this.playerOneName = this.#playerOneDefName;

    this.playerOneColor =
      this.#playerOne.querySelector('.option-dropdown').value ||
      this.#playerOneDefColor;

    // 02
    this.playerTwoName =
      this.#playerTwo.querySelector('.form--player-2 input').value ||
      this.#playerTwoDefName;

    if (this.playerTwoName.length > 6 || regexExp.test(this.playerTwoName))
      this.playerTwoName = this.#playerOneDefName;

    this.playerTwoColor =
      this.#playerTwo.querySelector('.option-dropdown').value ||
      this.#playerTwoDefColor;

    // game load
    this.loadingGame();
  }

  loadingGame() {
    containerUI.classList.add('active__game');

    if (canvas.width <= 640) {
      isSmartPhone = true;
      this.#touchScreenUI.classList.toggle('active__game');
      this.#spUI.classList.toggle('active__game');
      spInit();
    } else {
      this._renderName();
      init();
    }
    animate();
  }

  _renderName() {
    this.#nameDisplay.innerHTML = '';
    this.#nameDisplay.insertAdjacentHTML('afterbegin', this.nameUI());
  }

  _renderScore() {
    this.#scoreDisplay.innerHTML = '';
    this.#scoreDisplay.insertAdjacentHTML('afterbegin', this.scoreUI());
  }

  _renderTouchScreenUI() {
    this.#touchScreenUI.innerHTML = '';
    this.#touchScreenUI.insertAdjacentHTML('afterbegin', this.touchScreenUI());
  }

  _renderSmartPhoneUI() {
    this.#spUI.innerHTML = '';
    this.#spUI.insertAdjacentHTML('afterbegin', this.smartPhoneUI());
  }

  touchScreenUI() {
    return `<div class="player--one--sp__container">
              <div class="left--btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="p1--left__btn"
                  width="30"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <div class="right--btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  width="30"
                  class="p1--right__btn"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>

            <div class="player--two--sp__container">
              <div class="left--btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="p2--left__btn"
                  width="30"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <div class="right--btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  width="30"
                  class="p2--right__btn"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>`;
  }

  scoreUI() {
    return `
    <div>
      <p>Player 2</p>
      <h6 class="player__two">${this._score[0]}</h6>
    </div>
    <div>
      <p>Player 1</p>
      <h6 class="player__one">${this._score[1]}</h6>
    </div>
    `;
  }

  nameUI() {
    return `<div class="player--2__name">
              <p>${this.playerOneName}</p>
            </div>
            <small>Vs</small>
            <div class="player--2__name">
              <p>${this.playerTwoName}</p>
            </div>`;
  }

  smartPhoneUI() {
    return `<div class="player--1__screen">
              <h4 class="player--1__name">P2</h4>
              <small class="player__nickname">${this.playerTwoName}</small>
              <span>-${this._score[1]}-</span>
            </div>
            <div class="player--2__screen">
              <h4 class="player--1__name">P1</h4>
              <small class="player__nickname">${this.playerOneName}</small>
              <span>-${this._score[0]}-</span>
            </div>`;
  }

  machineCount(count) {
    if (isSmartPhone) {
      c.beginPath();
      c.font = '32px serif';
      c.strokeStyle = 'white';
      if (count === 'Ready') {
        c.strokeText(String(count), canvas.width / 2 - 35, canvas.height - 50);
      } else {
        c.strokeText(String(count), canvas.width / 2, canvas.height - 50);
      }
      c.closePath();
    } else {
      c.beginPath();
      c.font = '48px serif';
      c.strokeStyle = 'white';
      if (count === 'Ready') {
        c.strokeText(String(count), canvas.width / 2 - 40, canvas.height / 2);
      } else {
        c.strokeText(String(count), canvas.width / 2, canvas.height / 2);
      }
      c.closePath();
    }
  }
}

// function
const mouse = {
  x: canvas.width / 2,
  y: 870,
};

const keyPad = {
  w: false,
  s: false,
  i: false,
  k: false,
};

// main engine
let ball = [];
let player;
let playerTwo;
let machine = new Machine();

function init() {
  ball = new Ball(100, 100, 10, 'white');
  player = new Player(15, 175, 1, machine.playerOneColor);
  playerTwo = new Player(15, 175, 2, machine.playerTwoColor);
}

function spInit() {
  ball = new Ball(100, 100, 10, 'white');
  player = new Player(80, 10, 1, machine.playerOneColor);
  playerTwo = new Player(80, 10, 2, machine.playerTwoColor);
}

let runEngine = false;
let isWrite = true;
let frame = 1;
let countDown = 0;

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'black';
  c.fillRect(0, 0, canvas.width, canvas.height);

  if (runEngine) {
    if (isSmartPhone) {
      if (
        getDistCirRec(ball, player) ||
        player.height + ball.radius < ball.radius
      ) {
        ball.dy = -ball.dy;
      }

      if (
        getDistCirRec(ball, playerTwo) ||
        player.height + ball.radius < ball.radius
      ) {
        ball.dy = -ball.dy;
      }
    } else {
      if (getDistCirRec(ball, player)) {
        ball.dx = -ball.dx;
      }

      if (getDistCirRec(ball, playerTwo)) {
        ball.dx = -ball.dx;
      }
    }
    player.update();
    playerTwo.update();
    ball.update(machine);
  }

  if (frame % 150 === 0 && !runEngine) {
    countDown++;
    if (countDown === 4) {
      runEngine = true;
      isWrite = false;
      countDown = 0;
    }
  }

  if (isWrite) {
    if (isSmartPhone) {
      if (countDown === 0) {
        machine.machineCount('Ready');
        frame++;
      } else {
        machine.machineCount(countDown);
        frame++;
      }
    } else {
      if (countDown === 0) {
        machine.machineCount('Ready');
        frame++;
      } else {
        machine.machineCount(countDown);
        frame++;
      }
    }
  }
}

// controller
window.addEventListener('keydown', ({ key }) => {
  switch (key) {
    case 'i':
      keyPad.i = true;
      break;
    case 'k':
      keyPad.k = true;
      break;
    case 'w':
      keyPad.w = true;
      break;
    case 's':
      keyPad.s = true;
      break;
  }
});

window.addEventListener('keyup', ({ key }) => {
  switch (key) {
    case 'i':
      keyPad.i = false;
      break;
    case 'k':
      keyPad.k = false;
      break;
    case 'w':
      keyPad.w = false;
      break;
    case 's':
      keyPad.s = false;
      break;
  }
});

// window.addEventListener('mousemove', ({ x, y }) => {
//   mouse.x = x;
//   mouse.y = y;
// });

///////////////////////////////
//////////// garbage collection
///////////////////////////////
// function animate() {
//   requestAnimationFrame(animate);
//   c.clearRect(0, 0, canvas.width, canvas.height);

//   if (
//     getDistance(ball.x, ball.y, ball2.x, ball2.y) <=
//     ball.radius + ball2.radius
//   ) {
//     if (ball2.color !== 'blue') {
//       ball2.color = 'blue';
//     } else {
//       ball2.color = 'black';
//     }
//   }

//   ball2.draw();
//   ball.update();
// }
