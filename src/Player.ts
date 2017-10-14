import {GameStateModel} from "./game-state";

export class Player {
    public betRequest(gameState: GameStateModel, betCallback: (bet: number) => void): void {
        try {
            let highestBet = this.getHighestBet(gameState);

            if (this.are7and2(gameState)){
                betCallback(0);
            }

            if (this.hasSpecificPairs(gameState)) {
                betCallback(highestBet + 50);
            }

            if (this.hasPair(gameState)) {
                betCallback(highestBet + 20);
            }

            betCallback(10);
        } catch (e) {
            betCallback(11);
        }
    }

    public hasPair(gameState: GameStateModel) {
        const cards = this.getCards(gameState);
        return cards[0].rank == cards[1].rank;
    }

    public are7and2(gameState: GameStateModel):boolean{
        let sth = this.getCards(gameState);

        const two = "2";
        const seven = "7";
        if((sth[0].rank === two && sth[1].rank === seven )||(sth[0].rank === seven && sth[1].rank === two )){
            return true;
        }
        return false;
    }

    public hasSpecificPairs(gameState: GameStateModel): boolean {
        if (!this.hasPair(gameState)) {
            return false;
        }

        const cards = this.getCards(gameState);
        return cards.map(c => c.rank)
            .filter(rank => ["A", "Q", "K"].some(it => it === rank))
            .length > 0;
    }

    private getCards(gameState: GameStateModel): any [] {
        const players: any[] = gameState.players;
        const ourPlayer = players.filter(player => player.name === "Hupfl Dupf Inc");
        const cards: any[] = ourPlayer[0].hole_cards;
        return cards;
    }
    private getBoozerCards(gameState: GameStateModel): any [] {
        const players: any[] = gameState.players;
        const ourPlayer = players.filter(player => player.name === "TheBoozers");
        const cards: any[] = ourPlayer[0].hole_cards;
        return cards;
    }

    public showdown(gameState: any): void {

    }

    public getHighestBet(gameState: GameStateModel): number {
        return gameState.players
            .map(p => parseInt(p.bet.toString()))
            .reduce((previousValue, other) => {
                if (previousValue < other) {
                    return other;
                }
                return previousValue;
            });
    }
}

export default Player;