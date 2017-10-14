import {GameStateModel} from "./game-state";

export class Player {
    public betRequest(gameState: GameStateModel, betCallback: (bet: number) => void): void {
        try {
            let highestBet = this.getHighestBet(gameState);
            //if (highestBet === 1000) {
            //    betCallback(1000);
            //}
            //if (highestBet + 10 <= 1000) {
             //   betCallback(highestBet + 10);
            //}
            betCallback(10);
        } catch (e) {
            betCallback(11);
        }
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