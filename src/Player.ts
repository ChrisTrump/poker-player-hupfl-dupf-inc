export class Player {
  public betRequest(gameState: any, betCallback: (bet: number) => void): void {

    const players: any[] = gameState.players;
    const ourPlayer = players.filter(player => player.name == "Hupfl Dupf Inc");
    const cards: any[] = ourPlayer[0].hole_cards;
    const isPair = cards[0].rank == cards[1].rank;

      if (isPair) {
          betCallback(100);
      }


    betCallback(100);
  }

  public showdown(gameState: any): void {

  }
};

export default Player;
