function startCountdown(timing, callback) {
    let countdownValue = timing;
    const intervalId = setInterval(() => {
        document.getElementById("countdown").innerText = countdownValue;
        
        if (countdownValue <= 0) {
            clearInterval(intervalId);
            callback();
        } else {
            countdownValue--;
        }
    }, 1000);
}

function countdownFinished() {
    document.getElementById("countdown").innerText = "* Happy Independence Day *";
}  startCountdown(10, countdownFinished);
