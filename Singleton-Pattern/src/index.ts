import { GameManager } from "./GameManager";
import { startLogger } from "./logger";

startLogger();

setInterval(() => {
    GameManager.getInstance().addGame({
        id: Math.random().toString(),
        "whitePlayer": "Soham",
        "blackPlayer": "Mayur",
        moves: []
    })
}, 5000)
