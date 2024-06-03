    let timer, elapsedTime = 0, isRunning = false;

    function formatTime(ms) {
        const totalSeconds = Math.floor(ms / 1000),
            hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0'),
            minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0'),
            seconds = String(totalSeconds % 60).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }

    function startStopwatch() {
        if (!isRunning) {
            isRunning = true;
            timer = setInterval(() => {
                elapsedTime += 1000;
                document.getElementById('display').textContent = formatTime(elapsedTime);
            }, 1000);
        }
    }

    function pauseStopwatch() {
        if (isRunning) {
            isRunning = false;
            clearInterval(timer);
        }
    }

    function resetStopwatch() {
        isRunning = false;
        clearInterval(timer);
        elapsedTime = 0;
        document.getElementById('display').textContent = '00:00:00';
    }

    $(document).ready(function() {
        $('#start').click(startStopwatch);
        $('#pause').click(pauseStopwatch);
        $('#reset').click(resetStopwatch);
    });
