var stopwatchId;
var isStopwatchPaused = false;
var timerId;
var isTimerPaused = false;
var alarmId;
var audio = new Audio("/sample-12s.mp3");
audio.loop = true;
var audio2 = new Audio("/sample-15s.mp3");
audio2.loop = true;
var clockId;

// !!!!!!!!!!!!!!!!!! clock section !!!!!!!!!!!!!!!!!!!!!!!!!!

function activeClock() {
    document.getElementById("clock").addEventListener('click', () => {
        startClock();
    })
}

activeClock();
startClock();

function startClock() {
    document.getElementById("clock").style.backgroundColor = "aqua";
    document.getElementById("clockDiv").style.display = "flex";
    document.getElementById("stopwatch").style.backgroundColor = "aliceblue";
    document.getElementById("stopwatchDiv").style.display = "none";
    document.getElementById("timer").style.backgroundColor = "aliceblue";
    document.getElementById("timerDiv").style.display = "none";
    document.getElementById("alarm").style.backgroundColor = "aliceblue";
    document.getElementById("alarmDiv").style.display = "none";

    let date = new Date();
    document.getElementById('clockDiv').innerHTML = date.toLocaleTimeString();

    clockId = setInterval(() => {
        let date = new Date();
        document.getElementById('clockDiv').innerHTML = date.toLocaleTimeString();
    }, 1000);

}

// !!!!!!!!!!!!!!!!! stopwatch section !!!!!!!!!!!!!!!!!!!!!!!

function activeStopwatch() {
    document.getElementById("stopwatch").addEventListener('click', () => {
        showStopwatch();
    });
}

activeStopwatch();

function showStopwatch() {
    clearInterval(clockId);
    document.getElementById("clock").style.backgroundColor = "aliceblue";
    document.getElementById("clockDiv").style.display = "none";
    document.getElementById("stopwatch").style.backgroundColor = "aqua";
    document.getElementById("stopwatchDiv").style.display = "flex";
    document.getElementById("timer").style.backgroundColor = "aliceblue";
    document.getElementById("timerDiv").style.display = "none";
    document.getElementById("alarm").style.backgroundColor = "aliceblue";
    document.getElementById("alarmDiv").style.display = "none";

    document.getElementById("startStopwatch").onclick = () => {
        startStopwatch();
    };

    document.getElementById("pauseStopwatch").onclick = () => {
        pauseStopwatch();
    };

    document.getElementById("resetStopwatch").onclick = () => {
        resetStopwatch();
    };
}

function startStopwatch() {
    document.getElementById("startStopwatch").disabled = true;
    document.getElementById("pauseStopwatch").disabled = false;
    document.getElementById("resetStopwatch").disabled = false;
    resumeStopwatch(0, 0, 0);

}

function pauseStopwatch() {

    if (!isStopwatchPaused) {
        clearInterval(stopwatchId);
        document.getElementById("pauseStopwatch").innerHTML = "Resume";
        isStopwatchPaused = !isStopwatchPaused;
    }
    else {
        document.getElementById("pauseStopwatch").innerHTML = "Pause";
        let centiSeconds = Number(document.getElementById("centiSeconds").innerHTML);
        let seconds = Number(document.getElementById("seconds").innerHTML);
        let minutes = Number(document.getElementById("minutes").innerHTML);
        resumeStopwatch(centiSeconds, seconds, minutes);
        isStopwatchPaused = !isStopwatchPaused;
    }
}

function resetStopwatch() {
    clearInterval(stopwatchId);
    isStopwatchPaused = false;
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    document.getElementById("centiSeconds").innerHTML = "00";
    document.getElementById("pauseStopwatch").innerHTML = "Pause";

    document.getElementById("startStopwatch").disabled = false;
    document.getElementById("pauseStopwatch").disabled = true;
    document.getElementById("resetStopwatch").disabled = true;

}

function resumeStopwatch(centiSeconds, seconds, minutes) {
    stopwatchId = setInterval(() => {
        centiSeconds++;

        if (centiSeconds > 99) {
            seconds++;
            centiSeconds = 0;
        }
        if (seconds > 59) {
            minutes++;
            seconds = 0;
        }

        if (centiSeconds <= 9) {
            document.getElementById("centiSeconds").innerHTML = "0" + centiSeconds;
        }
        else {
            document.getElementById("centiSeconds").innerHTML = centiSeconds;
        }
        if (seconds <= 9) {
            document.getElementById("seconds").innerHTML = "0" + seconds;
        }
        else {
            document.getElementById("seconds").innerHTML = seconds;
        }
        if (minutes <= 9) {
            document.getElementById("minutes").innerHTML = "0" + minutes;
        }
        else {
            document.getElementById("minutes").innerHTML = minutes;
        }

    }, 10);
}

// !!!!!!!!!!!!!!!!!!!!!!! timer section !!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function activeTimer() {
    document.getElementById("timer").addEventListener('click', () => {
        showTimer();
    })
}

activeTimer();

function showTimer() {
    clearInterval(clockId);
    document.getElementById("clock").style.backgroundColor = "aliceblue";
    document.getElementById("clockDiv").style.display = "none";
    document.getElementById("stopwatch").style.backgroundColor = "aliceblue";
    document.getElementById("stopwatchDiv").style.display = "none";
    document.getElementById("timer").style.backgroundColor = "aqua";
    document.getElementById("timerDiv").style.display = "flex";
    document.getElementById("alarm").style.backgroundColor = "aliceblue";
    document.getElementById("alarmDiv").style.display = "none";

    document.getElementById("timerSeconds").onkeyup = () => {
        setTimeout(() => {
            if (document.getElementById("timerSeconds").value > 59) {
                document.getElementById("timerSeconds").value = 59;
            }
            else if (document.getElementById("timerSeconds").value < 0) {
                document.getElementById("timerSeconds").value = 0;
            }
            document.getElementById("timerSeconds").value = parseInt(document.getElementById("timerSeconds").value, 10);
            if (document.getElementById("timerSeconds").value >= 0 && document.getElementById("timerSeconds").value <= 9) {
                document.getElementById("timerSeconds").value = "0" + document.getElementById("timerSeconds").value;
            }
        }, 500);
    }

    document.getElementById("timerMinutes").onkeyup = () => {
        setTimeout(() => {
            if (document.getElementById("timerMinutes").value > 59) {
                document.getElementById("timerMinutes").value = 59;
            }
            else if (document.getElementById("timerMinutes").value < 0) {
                document.getElementById("timerMinutes").value = 0;
            }
            document.getElementById("timerMinutes").value = parseInt(document.getElementById("timerMinutes").value, 10);
            if (document.getElementById("timerMinutes").value >= 0 && document.getElementById("timerMinutes").value <= 9) {
                document.getElementById("timerMinutes").value = "0" + document.getElementById("timerMinutes").value;
            }
        }, 500);
    }

    document.getElementById("timerHours").onkeyup = () => {
        setTimeout(() => {
            if (document.getElementById("timerHours").value > 23) {
                document.getElementById("timerHours").value = 23;
            }
            else if (document.getElementById("timerHours").value < 0) {
                document.getElementById("timerHours").value = 0;
            }
            document.getElementById("timerHours").value = parseInt(document.getElementById("timerHours").value, 10);
            if (document.getElementById("timerHours").value >= 0 && document.getElementById("timerHours").value <= 9) {
                document.getElementById("timerHours").value = "0" + document.getElementById("timerHours").value;
            }
        }, 500);
    }

    document.getElementById("startTimer").onclick = () => {
        startTimer();
    };

    document.getElementById("pauseTimer").onclick = () => {
        pauseTimer();
    };

    document.getElementById("resetTimer").onclick = () => {
        resetTimer();
    };
}

function startTimer() {
    document.getElementById("startTimer").disabled = true;
    document.getElementById("pauseTimer").disabled = false;
    document.getElementById("resetTimer").disabled = false;

    let timerSeconds = document.getElementById("timerSeconds").value;
    document.getElementById("timerSeconds").disabled = true;
    if (timerSeconds == "") {
        timerSeconds = 0;
    }
    let timerMinutes = document.getElementById("timerMinutes").value;
    document.getElementById("timerMinutes").disabled = true;
    if (timerMinutes == "") {
        timerMinutes = 0;
    }
    let timerHours = document.getElementById("timerHours").value;
    document.getElementById("timerHours").disabled = true;
    if (timerHours == "") {
        timerHours = 0;
    }
    resumeTimer(timerSeconds, timerMinutes, timerHours);

}

function resumeTimer(seconds, minutes, hours) {
    timerId = setInterval(() => {
        seconds--;

        if (seconds <= 0 && minutes == 0 && hours == 0) {
            audio.play();
            clearInterval(timerId);
            seconds = 0;
            document.getElementById("pauseTimer").disabled = true;
            // resetTimer();
            // return;
        }

        if (seconds < 0) {
            if (minutes > 0) {
                minutes--;
                seconds = 59;
            }
            else {
                hours--;
                minutes = 59;
                seconds = 59;
            }
        }

        hours = parseInt(hours, 10);
        minutes = parseInt(minutes, 10);
        seconds = parseInt(seconds, 10);

        if (seconds <= 9) {
            document.getElementById("timerSeconds").value = "0" + seconds;
        }
        else {
            document.getElementById("timerSeconds").value = seconds;
        }
        if (minutes <= 9) {
            document.getElementById("timerMinutes").value = "0" + minutes;
        }
        else {
            document.getElementById("timerMinutes").value = minutes;
        }
        if (hours <= 9) {
            document.getElementById("timerHours").value = "0" + hours;
        }
        else {
            document.getElementById("timerHours").value = hours;
        }

    }, 1000);
}

function pauseTimer() {

    if (!isTimerPaused) {
        clearInterval(timerId);
        document.getElementById("pauseTimer").innerHTML = "Resume";
        isTimerPaused = !isTimerPaused;
    }
    else {
        document.getElementById("pauseTimer").innerHTML = "Pause";
        let timerSeconds = document.getElementById("timerSeconds").value;
        if (timerSeconds == "") {
            timerSeconds = 0;
        }
        let timerMinutes = document.getElementById("timerMinutes").value;
        if (timerMinutes == "") {
            timerMinutes = 0;
        }
        let timerHours = document.getElementById("timerHours").value;
        if (timerHours == "") {
            timerHours = 0;
        }
        resumeTimer(timerSeconds, timerMinutes, timerHours);
        isTimerPaused = !isTimerPaused;
    }
}

function resetTimer() {
    clearInterval(timerId);
    isTimerPaused = false;

    audio.pause();
    document.getElementById("timerSeconds").value = "";
    document.getElementById("timerMinutes").value = "";
    document.getElementById("timerHours").value = "";

    document.getElementById("pauseTimer").innerHTML = "Pause";

    document.getElementById("startTimer").disabled = false;
    document.getElementById("pauseTimer").disabled = true;
    document.getElementById("resetTimer").disabled = true;

    document.getElementById("timerSeconds").disabled = false;
    document.getElementById("timerMinutes").disabled = false;
    document.getElementById("timerHours").disabled = false;

}

// !!!!!!!!!!!!!!!!!!!!! Alarm section !!!!!!!!!!!!!!!!!!!!!!!!!!!!

function activeAlarm() {
    document.getElementById("alarm").addEventListener('click', () => {
        showAlarm();
    })
}

activeAlarm();

function showAlarm() {
    clearInterval(clockId);
    document.getElementById("clock").style.backgroundColor = "aliceblue";
    document.getElementById("clockDiv").style.display = "none";
    document.getElementById("stopwatch").style.backgroundColor = "aliceblue";
    document.getElementById("stopwatchDiv").style.display = "none";
    document.getElementById("timer").style.backgroundColor = "aliceblue";
    document.getElementById("timerDiv").style.display = "none";
    document.getElementById("alarm").style.backgroundColor = "aqua";
    document.getElementById("alarmDiv").style.display = "flex";

    document.getElementById("alarmSeconds").onkeyup = () => {
        setTimeout(() => {
            if (document.getElementById("alarmSeconds").value > 59) {
                document.getElementById("alarmSeconds").value = 59;
            }
            else if (document.getElementById("alarmSeconds").value < 0) {
                document.getElementById("alarmSeconds").value = 0;
            }
            document.getElementById("alarmSeconds").value = parseInt(document.getElementById("alarmSeconds").value, 10);
            if (document.getElementById("alarmSeconds").value >= 0 && document.getElementById("alarmSeconds").value <= 9) {
                document.getElementById("alarmSeconds").value = "0" + document.getElementById("alarmSeconds").value;
            }
        }, 500);
    }

    document.getElementById("alarmMinutes").onkeyup = () => {
        setTimeout(() => {
            if (document.getElementById("alarmMinutes").value > 59) {
                document.getElementById("alarmMinutes").value = 59;
            }
            else if (document.getElementById("alarmMinutes").value < 0) {
                document.getElementById("alarmMinutes").value = 0;
            }
            document.getElementById("alarmMinutes").value = parseInt(document.getElementById("alarmMinutes").value, 10);
            if (document.getElementById("alarmMinutes").value >= 0 && document.getElementById("alarmMinutes").value <= 9) {
                document.getElementById("alarmMinutes").value = "0" + document.getElementById("alarmMinutes").value;
            }
        }, 500);
    }

    document.getElementById("alarmHours").onkeyup = () => {
        setTimeout(() => {
            if (document.getElementById("alarmHours").value > 12) {
                document.getElementById("alarmHours").value = 12;
            }
            else if (document.getElementById("alarmHours").value < 1) {
                document.getElementById("alarmHours").value = 1;
            }
            document.getElementById("alarmHours").value = parseInt(document.getElementById("alarmHours").value, 10);
            if (document.getElementById("alarmHours").value >= 1 && document.getElementById("alarmHours").value <= 9) {
                document.getElementById("alarmHours").value = "0" + document.getElementById("alarmHours").value;
            }
        }, 500);
    }

    document.getElementById("setAlarm").onclick = () => {
        setAlarm();
    };

    document.getElementById("clearAlarm").onclick = () => {
        clearAlarm();
    };

}

function setAlarm() {
    document.getElementById("setAlarm").disabled = true;
    document.getElementById("clearAlarm").disabled = false;

    let alarmHours = document.getElementById("alarmHours").value;
    document.getElementById("alarmHours").disabled = true;
    if (alarmHours == "" || alarmHours == 0) {
        alarmHours = 12;
    }
    let alarmMinutes = document.getElementById("alarmMinutes").value;
    document.getElementById("alarmMinutes").disabled = true;
    let alarmSeconds = document.getElementById("alarmSeconds").value;
    document.getElementById("alarmSeconds").disabled = true;
    let meridiem = document.querySelector('input[name="meridiem"]:checked').value;
    document.getElementById("am").disabled = true;
    document.getElementById("pm").disabled = true;

    alarmId = setInterval(() => {
        let date = new Date();
        // let str = date.toLocaleTimeString();
        // let hours = Number(str.substring(0,2));
        // let minutes = Number(str.substring(3,5));
        // let seconds = Number(str.substring(6,8));
        // let ampm = str.substring(9,11);

        let ampm;
        let hours = date.getHours();
        if (hours >= 12) {
            ampm = "PM";
            if (hours > 12) {
                hours -= 12;
            }
        }
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        // console.log(date.toLocaleTimeString());
        if (alarmHours == hours && alarmMinutes == minutes && alarmSeconds == seconds && meridiem == ampm) {
            audio2.play();
        }

    }, 1000);
}

function clearAlarm() {
    clearInterval(alarmId);
    audio2.pause();

    document.getElementById("alarmHours").value = "";
    document.getElementById("alarmMinutes").value = "";
    document.getElementById("alarmSeconds").value = "";

    document.getElementById("setAlarm").disabled = false;
    document.getElementById("clearAlarm").disabled = true;

    document.getElementById("alarmHours").disabled = false;
    document.getElementById("alarmMinutes").disabled = false;
    document.getElementById("alarmSeconds").disabled = false;
    document.getElementById("am").disabled = false;
    document.getElementById("am").checked = true;
    document.getElementById("pm").disabled = false;

}