$(document).ready(function () {
    var pattern = [1, 2, 1, 1, 2];
    var userPattern = [];
    var sequence = 0;
    var guess = 0;
    var playerTurn = false;
    //GENERATE A  RANDOM PATTERN
    for (var i = 0; i < 20; i++) {
        //      pattern.push(Math.floor(Math.random() * 4) + 1);
    }
    //SESSION COUNTER
    function sessionCount() {
        $("#count").html(sequence);
    }
    //START BUTTON
    var isPlaying = false;
    $("#start").click(function () {
        if (!isPlaying) {
            isPlaying = true;
            sequence++;
            play();
        }
    });
    //PLAY OUT SEQUENCE
    function play() {
        console.log("starting next turn");
        //sequence++;
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
            alert("try again");
            userPattern = [];
            guess = 0;
            play();
            //NEXT: CHECK IF STRICT MODE IS ON/OFF, IF OFF IT REPLAYS PATTERN, IF ON YOU LOSE
        }
        else {
            if (guess >= sequence) {
                userPattern = [];
                sequence++;
                guess = 0;
                playerTurn = false;
                play();
            }
        }
    }
    //HIGHLIGHTING FUNCTIONS
    //1
    function greenHighlight() {
        $("#green").animate({
            backgroundColor: "rgb(0, 255, 0)"
        }, 400);
        $("#green").animate({
            backgroundColor: "rgb(0, 180, 0)"
        }, 400);
    }
    //2
    function redHighlight() {
        $("#red").animate({
            backgroundColor: "rgb(255, 0, 0)"
        }, 400);
        $("#red").animate({
            backgroundColor: "rgb(180, 0, 0)"
        }, 400);
    }
    //3
    function yellowHighlight() {
        $("#yellow").animate({
            backgroundColor: "rgb(255, 255, 0)"
        }, 400);
        $("#yellow").animate({
            backgroundColor: "rgb(180, 180, 0)"
        }, 400);
    }
    //4
    function blueHighlight() {
        $("#blue").animate({
            backgroundColor: "rgb(0, 0, 255)"
        }, 400);
        $("#blue").animate({
            backgroundColor: "rgb(0, 0, 180)"
        }, 400);
    }
    //TEST STUFF TEMP
    $("#test").click(function () {
        play();
    });
});