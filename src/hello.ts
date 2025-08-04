import { getAllActiveNFLPlayers } from "./nfl/player";

const hello = async () => { 
    console.log(await getAllActiveNFLPlayers());
}

hello();