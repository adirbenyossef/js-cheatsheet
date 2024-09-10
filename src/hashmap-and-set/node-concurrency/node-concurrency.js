import Queue from './queue.js';
let hash = {};

async function update(id, data) {
  const callback = async () => {
    console.log(`start --> id:${id}, data:${data}`);
    await randomDelay(); //update is happening here
    console.log(`end --> id:${id}, data:${data}`);
  };

  if (id in hash) {
    hash[id].push(callback);
  } else {
    hash[id] = new Queue(callback);
    hash[id].push(callback);
  }
}

//=============================================================================
//================= Don't change anything below ===============================
//=============================================================================

//---- update() is getting called from many places ----
update(1, "browser 1");
update(1, "browser 2");
update(2, "browser 1");
update(2, "browser 2");
update(1, "browser 3");
update(1, "browser 4");

//========================= Utility functions ===================================
//========================= Don't change any here================================

async function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms);
  });
}

async function randomDelay() {
  const randomTime = Math.round(Math.random() * 1000);
  return sleep(randomTime);
}