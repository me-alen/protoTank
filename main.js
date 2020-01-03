function Tank() {
  this.currentState = 0;
  this.capacity = 100;
}
function Tap(tankState) {
  this.tankState = tankState;
}

const tank = new Tank();
const tap = new Tap(tank);

console.log(`Press 'S' to start...`);
document.addEventListener("keydown", e => {
  if (e.key === "s" || e.key === "S") {
    this.tank.check();
  } else if (e.key === "1") {
    const rate = 1;
    console.log("Starting Tap 1 with 1 cubic cm/sec...");
    this.tap.flow(e.key, rate);
  } else if (e.key === "2") {
    console.log("Stoping Tap 1...");
    this.tap.flow(e.key);
  } else if (e.key === "3") {
    const rate = 2;
    console.log("Starting Tap 2 with 2 cubic cm/sec...");
    this.tap.flow(e.key, rate);
  } else if (e.key === "4") {
    console.log("Stoping Tap 2...");
    this.tap.flow(e.key);
  } else {
    return null;
  }
});

Tap.prototype.flow = function(keyvalue, tapRate = 0) {
  console.log(keyvalue, tapRate);
  setInterval(() => {
    this.currentState += tapRate;
    console.log(this.currentState);
  }, 1000);
};

Tank.prototype.check = function() {
  if (this.capacity === this.currentState) {
    console.log(`Tank Full`);
  } else {
    console.log(`Current State : ${this.currentState}
Capacity : ${this.capacity}
        `);
  }
};

this.tank = new Tank();
this.tap = new Tap(tank);

document.addEventListener("keydown", e => {});
