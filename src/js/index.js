const body = document.querySelector("body");
const fileInput = document.querySelector("input");

const excelWorker = new Worker("worker.js");

fileInput.addEventListener('input', (e) => {
    excelWorker.postMessage(e.target.files);
});

excelWorker.addEventListener('message', (e) => {
    const data = JSON.parse(e.data);
    console.log(data);
});

function keepUIBusy() {
    const counter = document.querySelector(".counter");

    let count = 0;
    function increase() {
      requestAnimationFrame(increase);
      count++;
      counter.textContent = count;
    }
    requestAnimationFrame(increase);
}

keepUIBusy();