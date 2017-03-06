$(document).ready(function () {
    var pattern = [1, 2];
    var userPattern = [];
    var sequence = 2;
    //GENERATE A  RANDOM PATTERN
    for (var i = 0; i < 20; i++) {
        //      pattern.push(Math.floor(Math.random() * 4) + 1);
    }
    console.log("Full pattern: " + pattern);
    //PLAY OUT SEQUENCE - make time variable?
    function play() {
        var i = 0;
        setInterval(function () {
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
        }, 1500);
        playerTurn();
    }
    //PLAYER TURN
    function playerTurn() {
        if (userPattern.length < 2) {
            $("#green").click(function () {
                userPattern.push(1);
                greenHighlight();
                console.log("user pattern: " + userPattern + "user pattern length: " + userPattern.length);
            });
            $("#red").click(function () {
                userPattern.push(2);
                redHighlight();
                console.log("user pattern: " + userPattern + "user pattern length: " + userPattern.length);
            });
        }
    }
    /*    else {
            alert("Wait your turn!");
        } */
    //HIGHLIGHTING FUNCTIONS
    //1
    function greenHighlight() {
        $("#green").animate({
            backgroundColor: "rgb(0, 255, 0)"
        }, 600);
        $("#green").animate({
            backgroundColor: "rgb(0, 180, 0)"
        }, 600);
    }
    //2
    function redHighlight() {
        $("#red").animate({
            backgroundColor: "rgb(255, 0, 0)"
        }, 600);
        $("#red").animate({
            backgroundColor: "rgb(180, 0, 0)"
        }, 600);
    }
    //3
    function yellowHighlight() {
        $("#yellow").animate({
            backgroundColor: "rgb(255, 255, 0)"
        }, 600);
        $("#yellow").animate({
            backgroundColor: "rgb(180, 180, 0)"
        }, 600);
    }
    //4
    function blueHighlight() {
        $("#blue").animate({
            backgroundColor: "rgb(0, 0, 255)"
        }, 600);
        $("#blue").animate({
            backgroundColor: "rgb(0, 0, 180)"
        }, 600);
    }
    //TEST STUFF TEMP
    $("#test").click(function () {
        play();
    });
});