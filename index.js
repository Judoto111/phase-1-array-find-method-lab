// code your solution here

function superbowlWin(superbowls) {

    let winningGame = superbowls.find(game => game.result === "W");
    
    return winningGame ? winningGame.year : undefined;

}
