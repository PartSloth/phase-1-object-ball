function gameObject() {
    let object = {
        "home": {
            "teamName" : "Brooklyn Nets",
            "colors" : ["Black" , "White"],
            "players" : {
                "Alan Anderson" : {
                    "number"    : "0",
                    "shoe"      : "16",
                    "points"    : "22",
                    "rebounds"  : "12",
                    "assists"   : "12",
                    "steals"    : "3",
                    "blocks"    : "1",
                    "slamDunks" : "1"
                },
                "Reggie Evans" : {
                    "number"    : "30",
                    "shoe"      : "14",
                    "points"    : "12",
                    "rebounds"  : "12",
                    "assists"   : "12",
                    "steals"    : "12",
                    "blocks"    : "12",
                    "slamDunks" : "7"
                },
                "Brook Lopez" : {
                    "number"    : "11",
                    "shoe"      : "17",
                    "points"    : "17",
                    "rebounds"  : "19",
                    "assists"   : "10",
                    "steals"    : "3",
                    "blocks"    : "1",
                    "slamDunks" : "15"
                },
                "Mason Plumlee" : {
                    "number"    : "1",
                    "shoe"      : "19",
                    "points"    : "26",
                    "rebounds"  : "12",
                    "assists"   : "6",
                    "steals"    : "3",
                    "blocks"    : "8",
                    "slamDunks" : "5"
                },
                "Jason Terry" : {
                    "number"    : "31",
                    "shoe"      : "15",
                    "points"    : "19",
                    "rebounds"  : "2",
                    "assists"   : "2",
                    "steals"    : "4",
                    "blocks"    : "11",
                    "slamDunks" : "1"
                }
            }
        },
        "away": {
            "teamName" : "Charlotte Hornets",
            "colors" : ["Turquoise", "Purple"],
            "players" : {
                "Jeff Adrien" : {
                    "number"    : "4",
                    "shoe"      : "18",
                    "points"    : "10",
                    "rebounds"  : "1",
                    "assists"   : "1",
                    "steals"    : "2",
                    "blocks"    : "7",
                    "slamDunks" : "2"
                },
                "Bismak Biyombo" : {
                    "number"    : "0",
                    "shoe"      : "16",
                    "points"    : "12",
                    "rebounds"  : "4",
                    "assists"   : "7",
                    "steals"    : "7",
                    "blocks"    : "15",
                    "slamDunks" : "10"
                },
                "DaDagna Diop" : {
                    "number"    : "2",
                    "shoe"      : "14",
                    "points"    : "24",
                    "rebounds"  : "12",
                    "assists"   : "12",
                    "steals"    : "4",
                    "blocks"    : "5",
                    "slamDunks" : "5"
                },
                "Ben Gordon" : {
                    "number"    : "8",
                    "shoe"      : "15",
                    "points"    : "33",
                    "rebounds"  : "3",
                    "assists"   : "2",
                    "steals"    : "1",
                    "blocks"    : "1",
                    "slamDunks" : "0"
                },
                "Brendan Haywood" : {
                    "number"    : "33",
                    "shoe"      : "15",
                    "points"    : "6",
                    "rebounds"  : "12",
                    "assists"   : "12",
                    "steals"    : "22",
                    "blocks"    : "5",
                    "slamDunks" : "12"
                }
            }
        }
    }

    return object;
}

function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"];
}

function specificPlayerStat(playersName, stat) {
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let dataObjKey in teamObj.players) {
            if(dataObjKey === playersName) {
                let statValue = teamObj.players[dataObjKey][stat];
                return statValue;
            }
        }
    }
}

function numPointsScored(playersName) {
    return specificPlayerStat(playersName, "points");
}

function shoeSize(playersName) {
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let dataObjKey in teamObj.players) {
            if(dataObjKey === playersName) {
                let shoe = teamObj.players[dataObjKey].shoe;
                return shoe;
            }
        }
    }
}

function teamColors(team) {
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        if(teamObj["teamName"] === team) {
            console.log(teamObj["teamName"]);
            return teamObj.colors;
        }
    }
}

function teamNames() {
    let game = gameObject();
    let teamNameArr = [];
    for (let gameKey in game) {
        teamNameArr.push(game[gameKey]["teamName"]);
    }
    return teamNameArr;
}

function playerNumbers(team) {
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        let teamCheck = teamObj["teamName"];
        if (teamCheck === team) {
            let jerseyArr = [];
            for (let dataObj in teamObj.players) {
                jerseyArr.push(teamObj.players[dataObj].number)
            }
            return jerseyArr;
        }
    }    
}

function playerStats(playerName) {
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let dataObjKey in teamObj.players) {
            if(dataObjKey === playerName) {
                return teamObj.players[dataObjKey];
            }
        }
    }
}

function dataPull(dataType, array) {
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let dataObjKey in teamObj.players) {
            array.push(teamObj.players[dataObjKey][dataType]);
        }
    }
}

function bigShoeRebounds() {
    let game = gameObject();
    let shoeSizeArr = [];
    dataPull("shoe", shoeSizeArr);
    let maxShoeSize = Math.max(...shoeSizeArr);
//Compare largest shoe size to find player name and pull # of rebounds
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let dataObjKey in teamObj.players) {
            let shoeCheck = teamObj.players[dataObjKey].shoe;
            if(shoeCheck == maxShoeSize) {
                return (`${dataObjKey}'s Rebounds: ${teamObj.players[dataObjKey].rebounds}`);
            }
        }
    }
}

function mostPointsScored() {
    let game = gameObject();
    let pointsArr = [];
    dataPull("points", pointsArr)
    let maxPoints = Math.max(...pointsArr);
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let dataObjKey in teamObj.players) {
            let pointsCheck = teamObj.players[dataObjKey].points;
            if(pointsCheck == maxPoints) {
                return (`${dataObjKey}'s Points: ${teamObj.players[dataObjKey].points}`);
            }
        }
    }
}

function winningTeam() {
    let game = gameObject();
    let brooklynPointsArr = [];
    let charlottePointsArr = [];
    let brooklynSum = 0;
    let charlotteSum = 0;
//Create points array for each team
    for (let gameKey in game) {
        let team = game[gameKey]["teamName"];
        if (team === "Brooklyn Nets") {
            teamObj = game[gameKey];
            for (let dataObjKey in teamObj.players) {
                brooklynPointsArr.push(teamObj.players[dataObjKey].points);
            }
        } else {
            teamObj = game[gameKey];
            for (let dataObjKey in teamObj.players) {
                charlottePointsArr.push(teamObj.players[dataObjKey].points);
            }
        }
    }
//Sum points for each team
    brooklynPointsArr = brooklynPointsArr.map(Number);
    charlottePointsArr = charlottePointsArr.map(Number);
    brooklynPointsArr.forEach(num => brooklynSum += num);
    charlottePointsArr.forEach(num => charlotteSum += num)

//Compare team's total points and returns the winner
    if (brooklynSum > charlotteSum) {
        return (`Winning team: Brooklyn Nets!`)
    } else {
        return (`Winning team: Charlotte Hornets!`)
    }
}

function playerWithLongestName() {
    let game = gameObject();
    let nameCheck = 0;
    let currentPlayer;
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let dataObjKey in teamObj.players) {
            if (dataObjKey.length > nameCheck) {
                nameCheck = dataObjKey.length;
                currentPlayer = dataObjKey;
            }
        }
    }
    return currentPlayer;
}

function doesLongNameStealATon() {
    const stealsArr = [];
    dataPull("steals", stealsArr);
    let maxSteals = Math.max(...stealsArr);
    let longestName = playerWithLongestName();
    let steals = specificPlayerStat(longestName, "steals");
    return maxSteals === Number(steals);
}
