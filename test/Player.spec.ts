import {expect} from "chai";
import Player from "../src/Player";

describe("Player", () => {

    const gameState: any = {
        "players": [
            {
                "name": "Hupfl Dupf Inc",
                "stack": 1000,
                "status": "active",
                "bet": 0,
                "hole_cards": [
                    {
                        "rank": "6",
                        "suit": "hearts",
                    },
                    {
                        "rank": "J",
                        "suit": "spades",
                    },
                ],
                "version": "Version name 1",
                "id": 0,
            },
            {
                "name": "Player 2",
                "stack": 1000,
                "status": "active",
                "bet": 0,
                "hole_cards": [],
                "version": "Version name 2",
                "id": 1,
            },
        ],
    };

    let player: Player;

    beforeEach(() => player = new Player());

    it("should work", () => {
        let howMuchWasBet = undefined;
        player.betRequest(gameState, (howMuch: number) => {
            if (howMuchWasBet !== undefined) {
                return;
            }
            howMuchWasBet = howMuch;
        });
        expect(howMuchWasBet).not.equal(11);
    });

    it("should detect pairs", () => {
        const hasPairs: any = {
            "players": [
                {
                    "name": "Hupfl Dupf Inc",
                    "hole_cards": [
                        {
                            "rank": "6",
                            "suit": "hearts",
                        },
                        {
                            "rank": "6",
                            "suit": "spades",
                        },
                    ],
                },
            ],
        };

        const distinctCards: any = {
            "players": [
                {
                    "name": "Hupfl Dupf Inc",
                    "hole_cards": [
                        {
                            "rank": "6",
                            "suit": "hearts",
                        },
                        {
                            "rank": "J",
                            "suit": "spades",
                        },
                    ],
                },
            ],
        };

        expect(player.hasPair(hasPairs)).to.be.true;
        expect(player.hasPair(distinctCards)).to.be.false;
    });
});