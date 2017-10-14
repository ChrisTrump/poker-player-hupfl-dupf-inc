export class GameStateModel{
    players: Array<Player>

    public getMyPlayer() : Player{
        for (let player of this.players) {
            if(player.name == "Hupfl Dupf Inc"){
                return player;
            }
        }
        return null;
    }
    
}

class Card {
    rank: string;
    suit: string;
}

class Player{
    name : string;
    hole_cards : Array<Card>;
    bet : number;
}
