class GameStateModel{
    players: Array<Player>

    public getMyPlayer() : Player{
        for (let player of this.players) {
            if(player.name == "Hupfl Dupf Inc"){
                return player;
            }
        }
        return null;
    }
    public getHightesBet():number{
        var highestBet = 0;
        for (let player of this.players) {
            if(player.bet > highestBet){
                highestBet = player.bet;
            }
        }
        return highestBet;
    }

}
class Player{
    name : string;
    hole_cards : Array<any>;
    bet : number;
}