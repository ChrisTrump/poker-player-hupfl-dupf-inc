import {GameStateModel} from './game-state';

export class Player {
  public betRequest(gameState: GameStateModel, betCallback: (bet: number) => void): void {
    try {
      //var ourplayer = gameState.getMyPlayer();
      //if (ourplayer!= null){

      //}

    const players: any[] = gameState.players;
    const ourPlayer = players.filter(player => player.name == "Hupfl Dupf Inc");
    const cards: any[] = ourPlayer[0].hole_cards;
    const isPair = cards[0].rank == cards[1].rank;

      if (isPair) {
          betCallback(gameState.getHightesBet() + 100);
      }

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