interface NFLPlayer {
    id: number,
    name: string,
    position: string,
    age: number,
    jerseyNumber: number,
    height: string,
    weight: number
}

const getAllNFLPlayers = (): NFLPlayer => {
    return {
        id: 1,
        name: "Test",
        position: "QB",
        age: 21,
        jerseyNumber: 8,
        height: "6'0",
        weight: 180,
    }
}

export {
    getAllNFLPlayers
}