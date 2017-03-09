$(document).ready(function () {
    var pattern;
    var userPattern = [];
    var sequence = 0;
    var guess = 0;
    var playerTurn = false;
    //GENERATE A  RANDOM PATTERN
    function generate() {
        pattern = [];
        for (var i = 0; i < 20; i++) {
            pattern.push(Math.floor(Math.random() * 4) + 1);
        }
    }
    //SESSION COUNTER
    $("#count").html(sequence);

    function sessionCount() {
        $("#count").html(sequence);
    }
    //START BUTTON
    var isPlaying = false;
    $("#start").click(function () {
        if (!isPlaying) {
            generate();
            console.log(pattern);
            isPlaying = true;
            sequence++;
            play();
            $("#start > h3").html("Reset");
        }
        else {
            $("#start > h3").html("Start");
            resetGame();
            console.log("restarting game");
        }
    });
    //STRICT BUTTON
    var strict = false;
    $("#strict").click(function () {
            if (!strict) {
                strict = true;
                $("#strict").css("box-shadow", "1px 1px 20px blue"); //SWITCH TO ADDCLASS?
            }
            else {
                strict = false;
                $("#strict").css("box-shadow", "0px 0px 0px");
            }
        })
        //PLAY OUT SEQUENCE
    function play() {
        console.log("starting next turn");
        sessionCount();
        var i = 0;
        var interval = setInterval(function () {
            if (i < sequence) {
                switch (pattern[i]) {
                case 1:
                    greenHighlight();
                    console.log("Highlighting: " + pattern[i]);
                    break;
                case 2:
                    redHighlight();
                    console.log("Highlighting: " + pattern[i]);
                    break;
                case 3:
                    yellowHighlight();
                    console.log("Highlighting: " + pattern[i]);
                    break;
                case 4:
                    blueHighlight();
                    console.log("Highlighting: " + pattern[i]);
                }
                i++;
            }
            else {
                clearInterval(interval);
                console.log("starting player turn");
                playerTurn = true;
            }
        }, 1500);
    }
    //PLAYER TURN
    $(".gameSquare").click(function (event) {
        if (playerTurn) {
            var squareClicked = event.target.id;
            switch (squareClicked) {
            case "green":
                greenHighlight();
                userPattern.push(1);
                break;
            case "red":
                redHighlight();
                userPattern.push(2);
                break;
            case "yellow":
                yellowHighlight();
                userPattern.push(3);
                break;
            case "blue":
                blueHighlight();
                userPattern.push(4);
            }
            guess++;
            checkMatch();
        }
    });
    //CHECK MATCH
    function checkMatch() {
        if (userPattern[guess - 1] !== pattern[guess - 1]) {
            if (!strict) {
                setTimeout(function () {
                    $("#gameContainer").fadeOut(200);
                    setTimeout(function () {
                        $("#tryAgain").fadeIn(200);
                    }, 200);
                }, 1000);
            }
            else {
                setTimeout(function () {
                    $("#gameContainer").fadeOut(200);
                    setTimeout(function () {
                        $("#gameOver").fadeIn(200);
                    }, 200);
                }, 1000);
            }
        }
        else {
            if (guess === sequence && sequence === 20) {
                setTimeout(function () {
                    $("#gameContainer").fadeOut(200);
                    setTimeout(function () {
                        $("#winner").fadeIn(200);
                    }, 200);
                }, 1000);
            }
            else if (guess >= sequence) {
                userPattern = [];
                sequence++;
                guess = 0;
                playerTurn = false;
                play();
            }
        }
    }
    //TRY AGAIN
    $("#tryAgain > h3").click(function () {
        $("#tryAgain").fadeOut(200);
        setTimeout(function () {
            $("#gameContainer").fadeIn(200);
        }, 200);
        userPattern = [];
        guess = 0;
        playerTurn = false;
        play();
    });
    //PLAY AGAIN
    $("#gameOver > h3").click(function () {
        $("#gameOver").fadeOut(200);
        setTimeout(function () {
            $("#gameContainer").fadeIn(200);
        }, 200);
        resetGame();
    });
    //WINNER
    $("#winner > h3").click(function () {
        $("#winner").fadeOut(200);
        setTimeout(function () {
            $("#gameContainer").fadeIn(200);
        }, 200);
        resetGame();
    });
    //GAME RESET
    function resetGame() {
        userPattern = [];
        guess = 0;
        sequence = 0;
        $("#count").html(sequence);
        isPlaying = false;
        playerTurn = false;
    }
    //test
    $("#test").click(function () {
        document.getElementById('greenBeep').play();
    });
    //HIGHLIGHTING FUNCTIONS
    //1
    function greenHighlight() {
        document.getElementById('greenBeep').play();
        $("#green").animate({
            backgroundColor: "rgb(0, 255, 0)"
        }, 400);
        $("#green").animate({
            backgroundColor: "rgb(0, 180, 0)"
        }, 400);
    }
    //2
    function redHighlight() {
        document.getElementById('redBeep').play();
        $("#red").animate({
            backgroundColor: "rgb(255, 0, 0)"
        }, 400);
        $("#red").animate({
            backgroundColor: "rgb(180, 0, 0)"
        }, 400);
    }
    //3
    function yellowHighlight() {
        document.getElementById('yellowBeep').play();
        $("#yellow").animate({
            backgroundColor: "rgb(255, 255, 0)"
        }, 400);
        $("#yellow").animate({
            backgroundColor: "rgb(180, 180, 0)"
        }, 400);
    }
    //4
    function blueHighlight() {
        document.getElementById('blueBeep').play();
        $("#blue").animate({
            backgroundColor: "rgb(0, 0, 255)"
        }, 400);
        $("#blue").animate({
            backgroundColor: "rgb(0, 0, 180)"
        }, 400);
    }
});