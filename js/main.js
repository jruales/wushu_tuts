MIN_IMAGE_NUM = 1;
MAX_IMAGE_NUM = 3;
$(function() {
    currentImageNum = 1;

    //
    // Set up listeners.
    //
    Mousetrap.bind(['left', 'up'], prevMove);
    Mousetrap.bind(['right', 'down'], nextMove);
    if (annyang) {
      // Here we define the voice commands. First the text we expect, and then the function it should call
      var commands = {
        //prevMove
        'back': prevMove,
        'previous': prevMove,
        //nextMove
        'next': nextMove,
        'forward': nextMove,
        'go': nextMove
      };

      // Add our commands to annyang
      annyang.addCommands(commands);

      // Start listening. You can call this here, or attach this call to an event, button, etc.
      annyang.start();
    }

    
    //
    // Refresh navigation.
    //
    updateMove();
});
function updateMove() {
    $("#gifs").html('<img src="img/corgis/' + currentImageNum + '.gif">');
    $("#progress-bar").html(currentImageNum + " out of " + MAX_IMAGE_NUM);
}
function prevMove() {
    currentImageNum--;
    if(currentImageNum < MIN_IMAGE_NUM) {
        currentImageNum = MIN_IMAGE_NUM;
    }
    updateMove();
}
function nextMove() {
    currentImageNum++;
    if(currentImageNum > MAX_IMAGE_NUM) {
        currentImageNum = MAX_IMAGE_NUM;
    }
    updateMove();
}