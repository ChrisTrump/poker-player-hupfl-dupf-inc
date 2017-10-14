import {GameStateModel} from "./game-state";

export class Player {
    public betRequest(gameState: GameStateModel, betCallback: (bet: number) => void): void {
        try {
            let highestBet = this.getHighestBet(gameState);
            if (this.are7and2(gameState)){
                betCallback(0);
            }
            //if (highestBet === 1000) {
            //    betCallback(1000);
            //}
            //if (highestBet + 10 <= 1000) {
             //   betCallback(highestBet + 10);
            //}
            if (this.hasPair(gameState)) {
                betCallback(highestBet + 20);
            }

            betCallback(10);
        } catch (e) {
            betCallback(11);
        }
    }

    private hasPair(gameState: GameStateModel) {
        const cards = this.getCards(gameState);
        return cards[0].rank == cards[1].rank;
    }

    private are7and2(gameState: GameStateModel):boolean{
        let sth = this.getCards(gameState);
        if((sth[0].rank === 2 && sth[1].rank === 7 )||(sth[0].rank === 7 && sth[1].rank === 2 ) ){
            return true;
        }
        return false;
    }

    private getCards(gameState: GameStateModel): any [] {
        const players: any[] = gameState.players;
        const ourPlayer = players.filter(player => player.name === "Hupfl Dupf Inc");
        const cards: any[] = ourPlayer[0].hole_cards;
        return cards;
    }

    public showdown(gameState: any): void {

    }

    private getHighestBet(gameState: GameStateModel): number {
        let highestBet = 0;
        for (let player of gameState.players) {
            if (player.bet > highestBet) {
                highestBet = player.bet;
            }
        }
        return highestBet;
    }
}

export default Player;