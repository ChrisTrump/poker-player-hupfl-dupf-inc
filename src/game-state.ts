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

class Player{
    name : string;
    hole_cards : Array<any>;
    bet : number;
}