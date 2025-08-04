import { getData } from "../utils/client"

interface NFLPlayer {
    id: number,
    firstName: string,
    lastName: string,
    fullName: string,
    position?: string,
    age: number,
    dateOfBirth: string,
    jersey: number,
    height: number,
    weight: number,
    active: boolean,
    passingStats?: PassingStats
    rushingStats?: RushingStats
    receivingStats?: ReceivingStats
    fumbles?: number,
    puntReturnStats?: PuntReturnStats,
    kickoffReturnStats?: KickoffReturnStats,
    kickingStats?: KickingStats,
    puntingStats?: PuntingStats,
    defensiveStats?: DefensiveStats
}

interface PassingStats {
    completedPasses: number,
    attemptedPasses: number,
    passingYards: number,
    passingTouchdowns: number,
    interceptions: number,
    longestPass: number,
    quarterbackRating: number,
    timesSacked: number
}

interface RushingStats {
    rushAttempts: number,
    rushYards: number,
    rushTouchdowns: number,
    longestRush: number
}

interface ReceivingStats {
    targets: number,
    receptions: number,
    receivingYards: number,
    receivingYardsPerReception: number,
    receivingTouchdowns: number,
    longestReception: number
}

interface PuntReturnStats {
    puntReturns: number,
    puntReturnYards: number,
    puntReturnTouchdowns: number,
    longestPuntReturn: number,
    yardsPerPuntReturn: number
}

interface KickoffReturnStats {
    kickoffReturns: number,
    kickoffReturnYards: number,
    kickReturnTouchdowns: number,
    longestKickReturn: number
}

interface KickingStats {
    fieldGoalsAttempted: number,
    fieldGoalsMade: number,
    extraPointsAttempted: number,
    extraPointsMade: number
}

interface PuntingStats {
    puntsAttempted: number,
    totalPuntYards: number,
    longestPunt: number,
    yardsPerPunt: number
}

interface DefensiveStats {
    interceptions: number,
    yardsReturnedFromInterceptions: number,
    interceptionsReturnedForTouchdowns: number,
    longestInterceptionReturn: number,
    passesDefended: number,
    fumblesForced: number,
    fumblesRecovered: number,
    yardsRecoveredFromFumbles: number,
    fumblesRecoveredForTouchdowns: number,
    sacks: number,
    assistsOnTackles: number
}

const getAllActiveNFLPlayers = async (): Promise<NFLPlayer []> => {
    const data = await getData("https://sports.core.api.espn.com/v3/sports/football/nfl/athletes?limit=10");
    console.log(data.count);
    return data.items.filter((player: NFLPlayer) => player.active);
}

export {
    getAllActiveNFLPlayers
}