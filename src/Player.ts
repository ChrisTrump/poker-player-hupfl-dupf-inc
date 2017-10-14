export class Player {
  public betRequest(gameState: GameStateModel, betCallback: (bet: number) => void): void {
    try {
      //var ourplayer = gameState.getMyPlayer();
      //if (ourplayer!= null){

      //}
      if (gameState.getHightesBet() == 1000){
        betCallback(1000);
      }
      if (gameState.getHightesBet() + 100 <= 1000){
        betCallback(gameState.getHightesBet()+100);
      }
      betCallback(100);
    }
    catch (e){
      betCallback(10);
    }
  }

  public showdown(gameState: any): void {

  }
}

export default Player;