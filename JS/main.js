/**
 * @Author: Script47
 * @Copyright: Script47 (c) 2014
 * @Version: 1.0
 */
/**
 * Get a HTML element.
 * @param elementName - The ID name of the element.
 * @returns {HTMLElement} - Returns the element.
 */
function getElement(elementName) {
    return document.getElementById(elementName);
}
/**
 * Adds commas to a number to beautify.
 * @param number - The number you would like to beautify.
 * @returns {string} - The number beautified.
 */
function commafy(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
/**
 * Convert time to make it more friendly.
 */
 
function convertTime() {
    if (Game.timeLivedSeconds == 59) {
        Game.timeLivedSeconds = 0;
        Game.timeLivedMinutes++;
    } else if (Game.timeLivedMinutes == 59) {
        Game.timeLivedMinutes = 0;
        Game.timeLivedHours++;
    } else if (Game.timeLivedHours == 24) {
        Game.timeLivedHours = 0;
        Game.timeLivedDays++;
    }
}

function showAbout() {
    $("#about-modal").modal();
}

/**
 * Save the game.
 */
function saveGame() {
    localStorage.setItem("Health", getHealth());
    localStorage.setItem("HealthLevel", getHealthLevel());
    localStorage.setItem("MaxHealth", getMaxHealth());
    localStorage.setItem("FarmingLevel", getFarmingLevel());
    localStorage.setItem("FarmingExp", getFarmingExp());
    localStorage.setItem("FarmingExpNeeded", getFarmingExpNeeded());
    localStorage.setItem("BakingLevel", getBakingLevel());
    localStorage.setItem("BakingExp", getBakingExp());
    localStorage.setItem("BakingExpNeeded", getBakingExpNeeded());
    localStorage.setItem("HealthIncreaseCost", getHealthIncreaseCost());
    localStorage.setItem("Gold", getGold());
    localStorage.setItem("Seeds", getPlantedSeeds());
    localStorage.setItem("PlantedSeeds", getPlantedSeeds());
    localStorage.setItem("ReadySeeds", getSeedsReadyToBeHarvested());
    localStorage.setItem("Wheat", getWheat());
    localStorage.setItem("BreadBeingMade", getBreadBeingMade());
    localStorage.setItem("Bread", getBread());
    localStorage.setItem("Water", getWater());
    localStorage.setItem("SeedsTimer", getPlantedSeedsTimer());
    localStorage.setItem("BreadTimer", getBreadTimer());
    localStorage.setItem("SearchTimer", Game.searchTimer);
    localStorage.setItem("Searching", Game.searching);
    var searchTimerBar = $("#searchTimer").prop("value");
    var seedsTimerBar = $("#seedsTimer").prop("value");
    var breadTimerBar = $("#breadTimer").prop("value");
    var FarmName = $("#nameInput").prop("value");
    localStorage.setItem("FarmName", FarmName);
    localStorage.setItem("SearchTimerBar", searchTimerBar);
    localStorage.setItem("SeedsTimerBar", seedsTimerBar);
    localStorage.setItem("BreadTimerBar", breadTimerBar);
    localStorage.setItem("GameMode", Game.mode);
    localStorage.setItem("Seconds", Game.timeLivedSeconds);
    localStorage.setItem("Minutes", Game.timeLivedMinutes);
    localStorage.setItem("Hours", Game.timeLivedHours);
    localStorage.setItem("Days", Game.timeLivedDays);
    localStorage.setItem("searchPoints", getSearchPoints());
	var log = getElement("log");
	var saveLog = log.innerHTML;
	localStorage.setItem("Log", saveLog);
    setLog("<font color='green'>Game Saved.</font>");
    return true;
}
/**
 * Retrieve save item.
 * @param item - The save data item you'd like to retrieve.
 * @return {*} - Returns the save data item stored in param item.
 */
function getSaveItem(item) {
    return localStorage.getItem(item);
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function convertDays(day) {
	var days = new Array(7);
	days[0] = "Sunday",
	days[1] = "Monday",
	days[2] = "Tuesday",
	days[3] = "Wednesday",
	days[4] = "Thursday",
	days[5] = "Friday",
	days[6] = "Saturday";	
	
	return days[day];
}

function convertMonth(month) {
	var months = new Array(12);
	months[0] = "January",
	months[1] = "February",
	months[2] = "March",
	months[3] = "April",
	months[4] = "May",
	months[5] = "June",
	months[6] = "July";	
	months[7] = "August";	
	months[8] = "September";	
	months[9] = "October";	
	months[10] = "November";	
	months[11] = "December";			
	
	return months[month];
}

function convertNumberDay(numberDay) {
	if(numberDay == 1) {
		numberDay = numberDay+"st";
	} else if(numberDay == 2) {
		numberDay = numberDay+"nd";
	} else if(numberDay > 2) {
		numberDay = numberDay+"th";
	}
	return numberDay;
}

function setLog(message) {
    var date = new Date();
    var hours = addZero(date.getHours());
    var minutes = addZero(date.getMinutes());
    var seconds = addZero(date.getSeconds());
	var day = date.getDay();
	var number = date.getDate();
	var month = date.getMonth();
	var year = date.getFullYear();
    return getElement("log").innerHTML += '<strong>('+convertDays(day)+' '+convertNumberDay(number)+' '+convertMonth(month)+' '+year+' - '+hours+':'+minutes+':'+seconds+')</strong><br/>'+message +'<br/><br/>';
}

/**
 * Set the health of the user.
 * @param health - The new amount of health the user has.
 * @returns {*} - Returns the new amount of health.
 */
function setHealth(health) {
    return Game.health = health;
}
/**
 * Set the number of gold the user has.
 * @param gold - The new amount of gold.
 * @returns {*} - Returns the new amount of gold.
 */
function setGold(gold) {
    return Game.gold = gold;
}
/**
 * Set the number of seeds the user has.
 * @param seeds - The new amount of seeds.
 * @returns {*} - Returns the new amount of seeds.
 */
function setSeeds(seeds) {
    return Game.seeds = seeds;
}
/**
 * Set an error.
 * @param error - The error you want to set.
 * @returns {*} - Returns the new error you set.
 */
function setError(error) {
    return Game.error = error;
}
/**
 * Set the amount of planted seeds.
 * @param plantedSeeds - The new amount of planted seeds you'd like to set.
 * @return {*} - Returns the new planted seeds you set.
 */
function setPlantedSeeds(plantedSeeds) {
    return Game.plantedSeeds = plantedSeeds;
}

function setBread(bread) {
    return Game.bread = bread;
}

function setWater(water) {
    return Game.water = water;
}

function setWheat(wheat) {
    return Game.wheat = wheat;
}

function setSeedsReadyToBeHarvested(seedsReadyToBeHarvested) {
    return Game.seedsReadyToBeHarvested = seedsReadyToBeHarvested;
}

function setBreadBeingMade(breadBeingMade) {
    return Game.breadBeingMade = breadBeingMade;
}

function setPlantedSeedsTimer(plantedSeedsTimer) {
    return Game.plantedSeedsTimer = plantedSeedsTimer;
}

function setBreadTimer(breadTimer) {
    return Game.breadTimer = breadTimer;
}

function setSearchPoints(searchPoints) {
    Game.searchPoints = searchPoints;
}

function setHealthLevel(healthLevel) {
    Game.healthLevel = healthLevel;
}

function setHealthIncreaseCost(healthIncreaseCost) {
    Game.healthIncreaseCost = healthIncreaseCost;
}

function setMaxHealth(maxHealth) {
    Game.maxHealth = maxHealth;
}

function setFarmingLevel(farmingLevel) {
    return Game.farmingLevel = farmingLevel;
}

function setFarmingExp(farmingExp) {
    return Game.farmingExp = farmingExp;
}

function setFarmingExpNeeded(farmingExpNeeded) {
    return Game.farmingExpNeeded = farmingExpNeeded;
}

function setBakingLevel(bakingLevel) {
    return Game.bakingLevel = bakingLevel;
}

function setBakingExp(bakingExp) {
    return Game.bakingExp = bakingExp;
}

function setBakingExpNeeded(bakingExpNeeded) {
    return Game.bakingExpNeeded = bakingExpNeeded;
}


function clearLog() {
    return getElement("log").innerHTML = '';
}

function getHealth() {
    return Game.health;
}

function getGold() {
    return Game.gold;
}

function getSearchPoints() {
    return Game.searchPoints;
}

function getSeeds() {
    return Game.seeds;
}

function getError() {
    return Game.error;
}

function getPlantedSeeds() {
    return Game.plantedSeeds;
}

function getBread() {
    return Game.bread;
}

function getWater() {
    return Game.water;
}

function getWheat() {
    return Game.wheat;
}

function getSeedsReadyToBeHarvested() {
    return Game.seedsReadyToBeHarvested;
}

function getBreadBeingMade() {
    return Game.breadBeingMade;
}

function getPlantedSeedsTimer() {
    return Game.plantedSeedsTimer;
}

function getBreadTimer() {
    return Game.breadTimer;
}

function getHealthLevel() {
    return Game.healthLevel;
}

function getHealthIncreaseCost() {
    return Game.healthIncreaseCost;
}

function getMaxHealth() {
    return Game.maxHealth;
}

function getFarmingLevel() {
    return Game.farmingLevel;
}

function getFarmingExp() {
    return Game.farmingExp;
}

function getFarmingExpNeeded() {
    return Game.farmingExpNeeded;
}

function getBakingLevel() {
    return Game.bakingLevel;
}

function getBakingExp() {
    return Game.bakingExp;
}

function getBakingExpNeeded() {
    return Game.bakingExpNeeded;
}

function showUpdatedStats() {
    if (Game.mode == 1) {
		// 25 or less
        if (getHealth() <= getMaxHealth() / 4) {
            getElement("levels").innerHTML = "<strong>Farming Level:</strong> "+commafy(getFarmingLevel())+"<br/><strong>Farming Exp:</strong> "+commafy(getFarmingExp())+'/'+commafy(getFarmingExpNeeded())+"<br/><br/><strong>Baking Level:</strong> "+commafy(getBakingLevel())+"<br/><strong>Baking Exp:</strong> "+commafy(getBakingExp())+'/'+commafy(getBakingExpNeeded());
            return getElement("stats").innerHTML = "<ul class='nav navbar-nav'><li><a href='javascript:void(0)'><strong>Health:</strong><font color='red'> " + commafy(getHealth()) + "/" + getMaxHealth() + "</font></a></li><li><a href='javascript:void(0)'><strong>Search Points:</strong> " + commafy(getSearchPoints()) + " </a></li><li><a href='javascript:void(0)'><strong>Gold:</strong> " + commafy(getGold()) + "</a></li><li><a href='javascript:void(0)'><strong>Seeds:</strong> " + commafy(getSeeds()) + "</a></li><li><a href='javascript:void(0)'><strong>Planted Seeds:</strong> " + commafy(getPlantedSeeds()) + "</a></li><li><a href='javascript:void(0)'><strong>Ready Seeds:</strong> " + commafy(Game.seedsReadyToBeHarvested) + "</a></li><li><a href='javascript:void(0)'><strong>Wheat:</strong> " + getWheat() + "</a></li><li><a href='javascript:void(0)'><strong>Bread Being Made:</strong> " + commafy(getBreadBeingMade()) + "</a></li><li><a href='javascript:void(0)'><strong>Bread:</strong> " + commafy(getBread()) + "</a></li><li><a href='javascript:void(0)'><strong>Water:</strong> " + commafy(getWater()) + "</a></li><li><a href='javascript:void(0)'><strong>Random Event Timer:</strong> " + Game.randomEventTimer + "</a></li><li><a href='javascript:void(0)'><strong>Game Mode:</strong> Survival</a></li></ul>";
        // greater than 25 less or equal to 50
		} else if (getHealth() > getMaxHealth() / 4  && getHealth() <= getMaxHealth() / 2) {
            getElement("levels").innerHTML = "<strong>Farming Level:</strong> "+commafy(getFarmingLevel())+"<br/><strong>Farming Exp:</strong> "+commafy(getFarmingExp())+'/'+commafy(getFarmingExpNeeded())+"<br/><br/><strong>Baking Level:</strong> "+commafy(getBakingLevel())+"<br/><strong>Baking Exp:</strong> "+commafy(getBakingExp())+'/'+commafy(getBakingExpNeeded());
            return getElement("stats").innerHTML = "<ul class='nav navbar-nav'><li><a href='javascript:void(0)'><strong>Health:</strong><font color='orange'> " + commafy(getHealth()) + "/" + getMaxHealth() + "</font></a></li><li><a href='javascript:void(0)'><strong>Search Points:</strong> " + commafy(getSearchPoints()) + " </a></li><li><a href='javascript:void(0)'><strong>Gold:</strong> " + commafy(getGold()) + "</a></li><li><a href='javascript:void(0)'><strong>Seeds:</strong> " + commafy(getSeeds()) + "</a></li><li><a href='javascript:void(0)'><strong>Planted Seeds:</strong> " + commafy(getPlantedSeeds()) + "</a></li><li><a href='javascript:void(0)'><strong>Ready Seeds:</strong> " + commafy(Game.seedsReadyToBeHarvested) + "</a></li><li><a href='javascript:void(0)'><strong>Wheat:</strong> " + getWheat() + "</a></li><li><a href='javascript:void(0)'><strong>Bread Being Made:</strong> " + commafy(getBreadBeingMade()) + "</a></li><li><a href='javascript:void(0)'><strong>Bread:</strong> " + commafy(getBread()) + "</a></li><li><a href='javascript:void(0)'><strong>Water:</strong> " + commafy(getWater()) + "</a></li><li><a href='javascript:void(0)'><strong>Random Event Timer:</strong> " + Game.randomEventTimer + "</a></li><li><a href='javascript:void(0)'><strong>Game Mode:</strong> Survival</a></li></ul>";
        // greater than 50 and less than or equal 75
		} else if (getHealth() > getMaxHealth() / 2 && getHealth() <= getMaxHealth() * 3 / 4) {
            getElement("levels").innerHTML = "<strong>Farming Level:</strong> "+commafy(getFarmingLevel())+"<br/><strong>Farming Exp:</strong> "+commafy(getFarmingExp())+'/'+commafy(getFarmingExpNeeded())+"<br/><br/><strong>Baking Level:</strong> "+commafy(getBakingLevel())+"<br/><strong>Baking Exp:</strong> "+commafy(getBakingExp())+'/'+commafy(getBakingExpNeeded());
            return getElement("stats").innerHTML = "<ul class='nav navbar-nav'><li><a href='javascript:void(0)'><strong>Health:</strong><font color='yellow'> " + commafy(getHealth()) + "/" + getMaxHealth() + "</font></a></li><li><a href='javascript:void(0)'><strong>Search Points:</strong> " + commafy(getSearchPoints()) + " </a></li><li><a href='javascript:void(0)'><strong>Gold:</strong> " + commafy(getGold()) + "</a></li><li><a href='javascript:void(0)'><strong>Seeds:</strong> " + commafy(getSeeds()) + "</a></li><li><a href='javascript:void(0)'><strong>Planted Seeds:</strong> " + commafy(getPlantedSeeds()) + "</a></li><li><a href='javascript:void(0)'><strong>Ready Seeds:</strong> " + commafy(Game.seedsReadyToBeHarvested) + "</a></li><li><a href='javascript:void(0)'><strong>Wheat:</strong> " + getWheat() + "</a></li><li><a href='javascript:void(0)'><strong>Bread Being Made:</strong> " + commafy(getBreadBeingMade()) + "</a></li><li><a href='javascript:void(0)'><strong>Bread:</strong> " + commafy(getBread()) + "</a></li><li><a href='javascript:void(0)'><strong>Water:</strong> " + commafy(getWater()) + "</a></li><li><a href='javascript:void(0)'><strong>Random Event Timer:</strong> " + Game.randomEventTimer + "</a></li><li><a href='javascript:void(0)'><strong>Game Mode:</strong> Survival</a></li></ul>";
        // 76 or greater
		} else if (getHealth() > getMaxHealth() * 3 / 4) {
            getElement("levels").innerHTML = "<strong>Farming Level:</strong> "+commafy(getFarmingLevel())+"<br/><strong>Farming Exp:</strong> "+commafy(getFarmingExp())+'/'+commafy(getFarmingExpNeeded())+"<br/><br/><strong>Baking Level:</strong> "+commafy(getBakingLevel())+"<br/><strong>Baking Exp:</strong> "+commafy(getBakingExp())+'/'+commafy(getBakingExpNeeded());
            return getElement("stats").innerHTML = "<ul class='nav navbar-nav'><li><a href='javascript:void(0)'><strong>Health:</strong><font color='green'> " + commafy(getHealth()) + "/" + getMaxHealth() + "</font></a></li><li><a href='javascript:void(0)'><strong>Search Points:</strong> " + commafy(getSearchPoints()) + " </a></li><li><a href='javascript:void(0)'><strong>Gold:</strong> " + commafy(getGold()) + "</a></li><li><a href='javascript:void(0)'><strong>Seeds:</strong> " + commafy(getSeeds()) + "</a></li><li><a href='javascript:void(0)'><strong>Planted Seeds:</strong> " + commafy(getPlantedSeeds()) + "</a></li><li><a href='javascript:void(0)'><strong>Ready Seeds:</strong> " + commafy(Game.seedsReadyToBeHarvested) + "</a></li><li><a href='javascript:void(0)'><strong>Wheat:</strong> " + getWheat() + "</a></li><li><a href='javascript:void(0)'><strong>Bread Being Made:</strong> " + commafy(getBreadBeingMade()) + "</a></li><li><a href='javascript:void(0)'><strong>Bread:</strong> " + commafy(getBread()) + "</a></li><li><a href='javascript:void(0)'><strong>Water:</strong> " + commafy(getWater()) + "</a></li><li><a href='javascript:void(0)'><strong>Random Event Timer:</strong> " + Game.randomEventTimer + "</a></li><li><a href='javascript:void(0)'><strong>Game Mode:</strong> Survival</a></li></ul>";
        }
    } else {
        getElement("levels").innerHTML = "<strong>Farming Level:</strong> "+commafy(getFarmingLevel())+"<br/><strong>Farming Exp:</strong> "+commafy(getFarmingExp())+'/'+commafy(getFarmingExpNeeded())+"<br/><br/><strong>Baking Level:</strong> "+commafy(getBakingLevel())+"<br/><strong>Baking Exp:</strong> "+commafy(getBakingExp())+'/'+commafy(getBakingExpNeeded());
        return getElement("stats").innerHTML = "<ul class='nav navbar-nav'><li><a href='javascript:void(0)'><strong>Gold:</strong> " + commafy(getGold()) + "</a></li><li><a href='javascript:void(0)'><strong>Search Points:</strong> " + commafy(getSearchPoints()) + " <li><a href='javascript:void(0)'><strong>Seeds:</strong> " + commafy(getSeeds()) + "</a></li><li><a href='javascript:void(0)'><strong>Planted Seeds:</strong> " + commafy(getPlantedSeeds()) + "</a></li><li><a href='javascript:void(0)'><strong>Ready Seeds:</strong> " + commafy(Game.seedsReadyToBeHarvested) + "</a></li><li><a href='javascript:void(0)'><strong>Wheat:</strong> " + getWheat() + "</a></li><li><a href='javascript:void(0)'><strong>Bread Being Made:</strong> " + commafy(getBreadBeingMade()) + "</a></li><li><a href='javascript:void(0)'><strong>Bread:</strong> " + commafy(getBread()) + "</a></li><li><a href='javascript:void(0)'><strong>Water:</strong> " + commafy(getWater()) + "</a></li><li><a href='javascript:void(0)'><strong>Random Event Timer:</strong> " + Game.randomEventTimer + "</a></li><li><a href='javascript:void(0)'><strong>Game Mode:</strong> Creative</a></li></ul>";
    }
}

function showUpdatedActions() {
    if (Game.audioMuted == false) {
        getElement("saveActions").innerHTML = "<li><a href='javascript:void(0)' onclick='saveGame();'>Save Game</a></li><li><a href='javascript:void(0)' onclick='reset();'>Reset Game</a></li><li><a href='javascript:void(0)' onclick='audioOptions();'>Mute Audio</a></li><li><a href='javascript:void(0)' onclick='changeGameMode();'>Change Game Mode</a></li><li><a href='javascript:void(0)' title='Show Tutorial' id='showTutorial' onclick='showTutorial();'>Show Tutorial</a></li><li><a href='javascript:void(0)' onclick='clearLog();'>Clear Log</a></li>";
    } else if (Game.audioMuted == true) {
        getElement("saveActions").innerHTML = "<li><a href='javascript:void(0)' onclick='saveGame();'>Save Game</a></li><li><a href='javascript:void(0)' onclick='reset();'>Reset Game</a></li><li><a href='javascript:void(0)' onclick='audioOptions();'>Unmute Audio</a></li><li><a href='javascript:void(0)' onclick='changeGameMode();'>Change Game Mode</a></li><li><a href='javascript:void(0)' title='Show Tutorial' id='showTutorial' onclick='showTutorial();'>Show Tutorial</a></li><li><a href='javascript:void(0)' onclick='clearLog();'>Clear Log</a></li>";
    }
    return getElement("actions").innerHTML = "<div class='row'><div class='col-md-6'><h3>Farming Actions</h3><a href='javascript:void(0)' title='Plant Seed' onclick='plantSeeds();'>Plant Seed</a><br/><a href='javascript:void(0)' title='Water Seed' onclick='waterSeed()'>Water Seed</a><br/><a href='javascript:void(0)' title='Harvest Plant' onclick='harvestPlant();'>Harvest Plant</a><br/><a href='javascript:void(0)' title='Make Bread' onclick='makeBread();'>Make Bread</a></div><div class='col-md-6'><h3>Other Actions</h3><a href='javascript:void(0)' title='Eat Bread' onclick='eatBread();'>Eat Bread</a><br/><a href='javascript:void(0)' title='Sell Bread' onclick='sellBread();'>Sell Bread</a><br/><a href='javascript:void(0)' title='Go Searching' onclick='goSearch();'>Go Searching</a><br/><a href='javascript:void(0)' title='Help Me!' onclick='toggleSearchButton();'>Struggling?</a></div></div>";

}

function showUpdatedShop() {
    return getElement("shop").innerHTML = "<h3>Shop</h3><label>Cost's " + Game.defaultSeedCost + " Gold:</label> <a href='javascript:void(0)' onclick='buySeeds();' title='" + Game.defaultSeedCost + " Gold'>Buy Seeds</a><br/><label>Cost's " + Game.waterCost + " Gold: </label> <a href='javascript:void(0)' onclick='buyWater();' title='" + Game.waterCost + " Gold'>Buy Water</a><br/><label>Cost's " + getHealthIncreaseCost() + " Gold:</label> <a href='javascript:void(0)' title='Health Level: " + getHealthLevel() + "' onclick='increaseHealth();'>Increase Health</a><br/><label>Cost's " + Game.refillCost + " Gold: </label> <a href='javascript:void(0)' onclick='refillEnergy();' title='" + Game.refillCost + " Gold'>Refill Health</a>";
}

function checkHealth() {
    if (getHealth() <= 0) {
        reset();
        saveGame();
        setError("<strong>Unlucky</strong><br/><font color='red'>You died out of starvation.</font><br/>You lived for " + Game.timeLivedDays + " days " + Game.timeLivedHours + " hours " + Game.timeLivedMinutes + " minutes " + Game.timeLivedSeconds + " seconds.");
        setLog(getError());
        showUpdatedStats();
        return true;
    }
}

function reset() {
    setMaxHealth(100);
    setHealth(getMaxHealth());
    setHealthLevel(0);
    setHealthIncreaseCost(250);
    setGold(0);
    setSeeds(0);
    setPlantedSeeds(0);
    setWheat(0);
    setBread(0);
    setWater(0);
    setSeedsReadyToBeHarvested(0);
    setBreadBeingMade(0);
    setPlantedSeedsTimer(138);
    setBreadTimer(69);
    setSearchPoints(0);
    setFarmingLevel(1);
    setFarmingExp(0);
    setFarmingExpNeeded(100);
    setBakingLevel(1);
    setBakingExp(0);
    setBakingExpNeeded(100);
    Game.searching = false;
    Game.searchTimer = 120;
    Game.timeLivedSeconds = 0;
    Game.timeLivedMinutes = 0;
    Game.timeLivedHours = 0;
    Game.timeLivedDays = 0;
    Game.randomEventTimer = 90;
    $("#searchTimer").val(0);
    $("#seedsTimer").val(0);
    $("#breadTimer").val(0);
    showUpdatedStats();
    showUpdatedActions();
    showUpdatedShop();
	getElement("log").innerHTML = "";
    setLog("<font color='green'>Game Reset.</font>")
    localStorage.clear();
    return true;
}

function buySeeds() {
    if (Game.searching == true) {
        setLog("<font color='red'>You're away from the farm searching, please wait " + Game.searchTimer + " seconds.</font>");
        return true;
    } else if (getGold() >= Game.defaultSeedCost) {
        setSeeds(getSeeds() + 1);
        setGold(getGold() - Game.defaultSeedCost);
        showUpdatedStats();
        showUpdatedActions();
        setLog("<font color='green'>You bought a seed.</font>");
        return true;
    } else {
        setError("<font color='red'>You don't have enough Gold to buy seeds. You need " + (Game.defaultSeedCost - getGold()) + " more Gold.</font>");
        setLog(getError());
        return false;
    }
}

function plantSeeds() {
    if (Game.searching == true) {
        setLog("<font color='red'>You're away from the farm searching, please wait " + Game.searchTimer + " seconds.</font>");
        return true;
    } else if (getSeeds() >= 1) {
        Game.plantedSeedsCheck = true;
        setSeeds(getSeeds() - 1);
        setPlantedSeeds(getPlantedSeeds() + 1);
        showUpdatedStats();
        setLog("You planted a seed. It will take 2:30 minutes to grow. If you wish to shorten the time, water it.");
        return true;
    } else {
        setError("<font color='red'>You don't have any seeds to plant.</font>");
        setLog(getError());
        return false;
    }
}

function waterSeed() {
    if (Game.searching == true) {
        setLog("<font color='red'>You're away from the farm searching, please wait " + Game.searchTimer + " seconds.</font>");
        return true;
    } else if (getWater() > 0) {
        if (getPlantedSeeds() > 0) {
            if (getWater() >= 1) {
                var randomExp = Math.floor(Math.random()*5+1);
                setFarmingExp(getFarmingExp()+randomExp);
                var seedsTimerValue = $("#seedsTimer").prop("value");
                Game.plantedSeedsTimer = Game.plantedSeedsTimer - 25;
                $("#seedsTimer").val(seedsTimerValue + 25);
                setWater(getWater() - 1);
                setLog("<font color='green'>You watered your seed.</font>");
                return true;
            } else {
                setError("<font color='red'>You don't have any water to use.</font>");
                setLog(getError());
                return false;
            }
        } else {
            setError("<font color='red'>You need a to plant a seeds before trying to water them.</font>");
            setLog(getError());
            return false;
        }
    } else {
        setError("<font color='red'>You need to buy some water first.</font>");
        setLog(getError());
        return false;
    }
}

function buyWater() {
    if (Game.searching == true) {
        setLog("<font color='red'>You're away from the farm searching, please wait " + Game.searchTimer + " seconds.</font>");
        return true;
    } else if (getGold() >= Game.waterCost) {
        setWater(getWater() + 1);
        setGold(getGold() - Game.waterCost);
        showUpdatedStats();
        showUpdatedActions();
        setLog("<font color='green'>You bought 1 water.</font>");
        return true;
    } else {
        setError("<font color='red'>You don't have enough Gold to buy water. You need " + (Game.waterCost - getGold()) + " more Gold.</font>");
        setLog(getError());
        return false;
    }
}

function harvestPlant() {
    if (Game.searching == true) {
        setLog("<font color='red'>You're away from the farm searching, please wait " + Game.searchTimer + " seconds.</font>");
        return true;
    } else if (getSeedsReadyToBeHarvested() >= 1) {
        var randomExp = Math.floor(Math.random()*8+5);
        setFarmingExp(getFarmingExp()+randomExp);
        setSeedsReadyToBeHarvested(getSeedsReadyToBeHarvested() - 1);
        setWheat(getWheat() + 1);
        showUpdatedStats();
        showUpdatedActions();
        setLog("<font color='green'>You harvested your plant and gained "+randomExp+" Farming exp.</font>");
        return true;
    } else if (getSeedsReadyToBeHarvested() <= 0) {
        setError("<font color='red'>You have no seeds ready for harvesting.</font>");
        setLog(getError());
        return false;
    }
}

function makeBread() {
    if (Game.searching == true) {
        setLog("<font color='red'>You're away from the farm searching, please wait " + Game.searchTimer + " seconds.</font>");
        return true;
    }
    if (getWheat() >= 1) {
        var randomExp = Math.floor(Math.random()*15+5);
        setBakingExp(getBakingExp()+randomExp);
        Game.breadBeingMadeCheck = true;
        setWheat(getWheat() - 1);
        setBreadBeingMade(getBreadBeingMade() + 1);
        showUpdatedStats();
        showUpdatedActions();
        setLog("<font color='green'>You start baking a loaf of bread.</font>");
        return true;
    } else if (getWheat() <= 0) {
        setError("<font color='red'>You need to have some wheat before you can make a loaf of bread.</font>");
        setLog(getError());
        return false;
    }
}

function eatBread() {
    if (Game.searching == true) {
        setLog("<font color='red'>You're away from the farm searching, please wait " + Game.searchTimer + " seconds.</font>");
        return true;
    } else if (Game.mode == 2) {
        setError("<font color='red'>Your can't use this feature in Creative mode.</font>");
        setLog(getError());
        return false;
    } else if (getHealth() >= 100) {
        setError("<font color='red'>Your health is already full.</font>");
        setLog(getError());
        return false;
    } else if (getBread() >= 1) {
        if (Game.audioMuted == false) {
            var eatSound = new Audio('Audio/eat.mp3');
            eatSound.play();
        }
        var randomHealth = Math.floor(Math.random() * 20 + 1);
        if (getHealth() + randomHealth > 100) {
            setHealth(100);
            setBread(getBread() - 1);
            setLog("<font color='green'>You ate one bread getting full HP.</font>");
            showUpdatedStats();
            showUpdatedActions();
        } else {
            setBread(getBread() - 1);
            setHealth(getHealth() + randomHealth);
            setLog("<font color='green'>You ate one bread gaining " + randomHealth + " HP.</font>");
            showUpdatedStats();
            showUpdatedActions();
        }
    } else {
        setError("<font color='red'>You need to have a loaf of bread before you can eat it.</font>");
        setLog(getError());
        return false;
    }
}

function sellBread() {
    if (Game.searching == true) {
        setLog("<font color='red'>You're away from the farm searching, please wait " + Game.searchTimer + " seconds.</font>");
        return true;
    } else if (getBread() >= 1) {
        if (Game.audioMuted == false) {
            var goldSound = new Audio('Audio/gold.mp3');
            goldSound.play();
        }
        var randomNumberOfGold = Math.floor(Math.random()*getBakingLevel()*2+getBakingLevel());
        setBread(getBread() - 1);
        setGold(getGold() + randomNumberOfGold);
        setLog("<font color='green'>You sold one loaf of bread gaining " + randomNumberOfGold + " Gold.</font>");
        showUpdatedStats();
        showUpdatedActions();
        return true;
    } else {
        setError("<font color='red'>You need to have a loaf of bread before you can sell it.</font>");
        setLog(getError());
        return false;
    }
}

function refillEnergy() {
    if (Game.searching == true) {
        setLog("<font color='red'>You're away from the farm searching, please wait " + Game.searchTimer + " seconds.</font>");
        return true;
    } else if (getGold() >= Game.refillCost) {
        if (getHealth() < 100) {
            if (Game.audioMuted == false) {
                var healthReGen = new Audio('Audio/regeneration.mp3');
                healthReGen.play();
            }
            setGold(getGold() - Game.refillCost);
            setHealth(100);
            showUpdatedStats();
            setLog("<font color='green'>Health refilled.</font>");
            return true;
        } else if (Game.mode == 2) {
            setError("<font color='red'>You can't refill your health on creative mode.</font>");
            setLog(getError());
            return false;
        } else {
            setError("<font color='red'>Your health is already full.</font>");
            setLog(getError());
            return false;
        }
    } else {
        setError("<font color='red'>You don't have enough Gold to buy an energy refill. You need " + (Game.refillCost - getGold()) + " more Gold.</font>");
        setLog(getError());
        return false;
    }
}

function changeGameMode() {
    if (Game.mode == 1) {
        showUpdatedStats();
        reset();
        Game.mode = 2;
        setLog("<strong>Game Mode Changed</strong><br/><font color='green'>Game mode changed to Creative.</font>");
        return true;
    } else if (Game.mode == 2) {
        showUpdatedStats();
        reset();
        Game.mode = 1;
        setLog("<strong>Game Mode Changed</strong><br/><font color='green'>Game mode changed to Survival.</font>");
        return true;
    }
}

function showTutorial() {
    $("#tutorial").modal();
}

function toggleSearchButton() {
    $("#moreSearchPoints").fadeIn("slow");
}

function moreSearchPoints() {
    setSearchPoints(getSearchPoints() + 1);
    showUpdatedStats();
}

function randomEvents() {
    var randomNumber = Math.floor(Math.random() * 10 + 1);
    if (randomNumber <= 3) {
        var randomGold = Math.floor(Math.random() * 50 + 10);
        setGold(getGold() + randomGold);
        showUpdatedStats();
        setLog("<strong>Random Event</strong><br/><font color='green'>You found " + randomGold + " Gold.</font>");
        return true;
    } else if (getPlantedSeeds() > 5 && randomNumber > 3 || randomNumber < 5) {
        var randomSeedsLost = Math.floor(Math.random() * 5 + 1);
        setPlantedSeeds(getPlantedSeeds() - randomSeedsLost)
        showUpdatedStats();
        setLog("<strong>Random Event</strong><br/><font color='red'>Due to adverse weather conditions, some of your crops were killed. You lost " + randomSeedsLost + " planted seeds.</font>");
        return true;
    } else if (randomNumber > 5 || randomNumber <= 8) {
        var randomSeedsGained = Math.floor(Math.random() * 8 + 1);
        setSeeds(getSeeds() + randomSeedsGained)
        showUpdatedStats();
        setLog("<strong>Random Event</strong><br/><font color='green'>You found a bag containing " + randomSeedsGained + " seeds.</font>");
        return true;
    } else {
        setLog("<strong>Random Event</strong><br/><font color='black'>Nothing unusual  happened...</font>");
    }
}

function setFarmName() {
    var name = getElement("nameInput");
    if (name.value !== null && name.value.match(" Farm") == null) {
        $("#nameInput").attr("disabled", false);
        name.value = name.value + " Farm";
        Game.farmName = name.value;
        $("#nameInput").attr("disabled", true);
        return true;
    } else {
        Game.farmName = name.value;
        return true;
    }
}

function goSearch() {
    if (getSearchPoints() < Game.searchCost) {
        setError("<font color='red'>You don't have enough search points to go searching. You need " + (Game.searchCost - getSearchPoints()) + " more points.</font>");
        setLog(getError());
        return true;
    } else if (Game.searching == true) {
        setLog("<font color='red'>You're already searching. You have " + Game.searchTimer + " seconds left.</font>");
        return true;
    } else if (getSearchPoints() >= Game.searchCost) {
        setLog("<strong>Searching</strong><br/><font color='green'>You have gone searching, you will not be able to do other actions while searching.</font>")
        setSearchPoints(getSearchPoints() - Game.searchCost);
        showUpdatedStats();
        Game.searching = true;
        return true;
    }
}

function increaseHealth() {
    if (Game.searching == true) {
        setLog("<font color='red'>You're away from the farm searching, please wait " + Game.searchTimer + " seconds.</font>");
        return true;
    } else if (getGold() < getHealthIncreaseCost()) {
        setLog("<font color='red'>You don't have enough Gold to increase your HP. You need " + (Game.healthIncreaseCost - getGold()) + " more Gold.</font>");
        return true;
    } else if (getGold() >= getHealthIncreaseCost()) {
        setHealthLevel(getHealthLevel() + 1);
        setMaxHealth(getMaxHealth() + 50);
        setGold(getGold() - getHealthIncreaseCost());
        setHealthIncreaseCost(getHealthIncreaseCost() + 500);
        setHealth(getMaxHealth());
        showUpdatedStats();
        showUpdatedShop();
        setLog("<strong>Health Increase</strong><br/><font color='green'>Your max health has now increased by 50. It is now on " + getMaxHealth() + ", health refilled.</font>");
        return true;
    }
}

function audioOptions() {
    if (Game.audioMuted == false) {
        Game.audioMuted = true;
        showUpdatedActions();
        setLog("<strong>Audio Options</strong><br/><font color='green'>Audio muted.</font>");
        return true;
    } else if (Game.audioMuted = o = true) {
        Game.audioMuted = false;
        showUpdatedActions();
        setLog("<strong>Audio Options</strong><br/><font color='green'>Audio unmuted.</font>");
        return true;
    }
}

window.onload = function () {
    Game = {};
    Game.mode = 1;
    Game.audioMuted = false;
    Game.version = "Version: 1.0";
    Game.health = 100;
    Game.maxHealth = 100;
    Game.healthLevel = 0;
    Game.healthIncreaseCost = 250;
    Game.farmingLevel = 1;
    Game.farmingExp = 0;
    Game.farmingExpNeeded = 100;
    Game.bakingLevel = 1;
    Game.bakingExp = 0;
    Game.bakingExpNeeded = 100;
    Game.gold = 0;
    Game.searchPoints = 0;
    Game.searchCost = 50;
    Game.searchTimer = 120;
    Game.searching = false;
    Game.seeds = 0;
    Game.plantedSeeds = 0;
    Game.plantedSeedsCheck = false;
    Game.plantedSeedsReady = false;
    Game.plantedSeedsTimer = 138;
    Game.seedsReadyToBeHarvested = 0;
    Game.wheat = 0;
    Game.bread = 0;
    Game.breadBeingMade = 0;
    Game.breadBeingMadeCheck = false;
    Game.breadTimer = 69;
    Game.water = 0;
    Game.timeLivedSeconds = 0;
    Game.timeLivedMinutes = 0;
    Game.timeLivedHours = 0;
    Game.timeLivedDays = 0;
    Game.error = "";
    Game.waterCost = 100;
    Game.refillCost = 200;
    Game.defaultSeedCost = 150;
    Game.randomEventTimer = 90;
    Game.farmName = $("#nameInput").prop("value");

    $("#tutorial").modal();

    var randomNumber = Math.floor(Math.random() * 200000 + 130000);
    var randomHealthLoss = Math.floor(Math.random() * 15 + 5);

    $(document).ready(function () {
        $("#loading").fadeOut("slow");
        if (getSaveItem("Health") != null || getSaveItem("Health") > 0) {
            setHealth(parseInt(getSaveItem("Health")));
            setHealthLevel(parseInt(getSaveItem("HealthLevel")));
            setMaxHealth(parseInt(getSaveItem("MaxHealth")));
            setHealthIncreaseCost(parseInt(getSaveItem("HealthIncreaseCost")));
            setBread(parseInt(getSaveItem("Bread")));
            setWater(parseInt(getSaveItem("Water")));
            setPlantedSeedsTimer(parseInt(getSaveItem("SeedsTimer")));
            setGold(parseInt(getSaveItem("Gold")));
            setSeeds(parseInt(getSaveItem("Seeds")));
            setPlantedSeeds(parseInt(getSaveItem("PlantedSeeds")));
            setSeedsReadyToBeHarvested(parseInt(getSaveItem("ReadySeeds")));
            setWheat(parseInt(getSaveItem("Wheat")));
            setBreadBeingMade(parseInt(getSaveItem("BreadBeingMade")));
            setBreadTimer(parseInt(getSaveItem("BreadTimer")));
            setSearchPoints(parseInt(getSaveItem("searchPoints")));
            setFarmingLevel(parseInt(getSaveItem("FarmingLevel")));
            setFarmingExp(parseInt(getSaveItem("FarmingExp")));
            setFarmingExpNeeded(parseInt(getSaveItem("FarmingExpNeeded")));
            setBakingLevel(parseInt(getSaveItem("BakingLevel")));
            setBakingExp(parseInt(getSaveItem("BakingExp")));
            setBakingExpNeeded(parseInt(getSaveItem("BakingExpNeeded")));
            Game.searchTimer = parseInt(getSaveItem("SearchTimer"));
			getElement("log").innerHTML = getSaveItem("Log");
            var searchTimerBar = parseInt(getSaveItem("SearchTimerBar"));
            var seedsTimerVal = parseInt(getSaveItem("SeedsTimerBar"));
            var breadTimerVal = parseInt(getSaveItem("BreadTimerBar"));
            parseInt($("#searchTimer").val(searchTimerBar));
            parseInt($("#seedsTimer").val(seedsTimerVal));
            parseInt($("#breadTimer").val(breadTimerVal));
            Game.mode = parseInt(getSaveItem("GameMode"));
            Game.timeLivedSeconds = parseInt(getSaveItem("Seconds"));
            Game.timeLivedMinutes = parseInt(getSaveItem("Minutes"));
            Game.timeLivedHours = parseInt(getSaveItem("Hours"));
            Game.timeLivedDays = parseInt(getSaveItem("Days"));
            $("#nameInput").val(getSaveItem("FarmName"));

            if (getSaveItem("Searching") == "false") {
                Game.searching = false;
            } else if (getSaveItem("Searching") == "true") {
                Game.searching = true;
            }
        }
        $("#closeTutorial").click(function () {
            $("#tutorial").fadeOut("slow");
        });
    });

    $("#closeAchievements").click(function () {
        $("#achievements").fadeOut("slow");
    });

    getElement("footer").innerHTML = "<h3>Survive</h3>" + Game.version + "<br/><a href='versionHistory.html' target='_blank'>Version History</a><h3>Credits</h3><li>Programming - Script47</li><li>Design - Chris Day</li><h3>Contact</h3>Tell me what you think or give me any ideas you'd like to see implemented! <a href='https://twitter.com/Script47' target='_blank'>@Script47</a><h3>Copyright</h3>Copyright &copy <a href='http://www.script47.tk' target='_blank'>Script47</a> 2014";

    showUpdatedStats();
    showUpdatedActions();
    showUpdatedShop();
	
    setInterval(function () {
        saveGame();
    }, 120000);

    setInterval(function () {
        if (Game.searching == true) {
            Game.searchTimer--;
            var searchBarVal = $("#searchTimer").prop("value");
            $("#searchTimer").val(searchBarVal + 1);
            return true;
        }
    }, 1000);

	setInterval(function() {
		if(getPlantedSeeds() <= 0) {
			setPlantedSeedsTimer(138);
            $("#seedsTimer").val(0);
		}
	}, 10);
	
    setInterval(function () {
        if (Game.searchTimer <= 0) {
            var randomNumberSeeds = Math.floor(Math.random() * 15 + 0);
            var randomGold = Math.floor(Math.random() * 10 + 0);
            Game.searching = false;
            Game.searchTimer = 120;
            var seedsFound = randomNumberSeeds;
            var goldFound = randomGold;
            setSeeds(getSeeds() + seedsFound);
            setGold(getGold() + goldFound);
            var thingsFound = "<strong>While searching, you found</strong>:<br/> <li><font color='green'>" + seedsFound + " seeds</li><li>" + goldFound + " Gold</font></li>";
            setLog(thingsFound);
            $("#searchTimer").val(0);
            showUpdatedStats();
            return true;
        }
    }, 10);

    setInterval(function() {
        if(getFarmingExp() >= getFarmingExpNeeded()) {
            var tempExp = getFarmingExp() - getFarmingExpNeeded();
            var lastFarmingExp = getFarmingExpNeeded();
            setFarmingExp(tempExp);
            setFarmingLevel(getFarmingLevel()+1);
            setFarmingExpNeeded(lastFarmingExp+Math.floor(Math.random()*100+25));
            showUpdatedStats();
            setLog("<strong>Farming Level Increased!</strong><br/><font color='green'>Next Farming level reached. You now need to get "+getFarmingExpNeeded()+" exp points till the next level.</font>")
            return true;
        } else if(getFarmingExp() == getFarmingExpNeeded()) {
            var lastFarmingExp = getFarmingExpNeeded();
            setFarmingExp(0);
            setFarmingLevel(getFarmingLevel()+1);
            setFarmingExpNeeded(lastFarmingExp+Math.floor(Math.random()*100+25));
            showUpdatedStats();
            setLog("<strong>Farming Level Increased!</strong><br/><font color='green'>Next Farming level reached. You now need to get "+getFarmingExpNeeded()+" exp points till the next level.</font>")
            return true;
        }
    }, 10);

    setInterval(function() {
        if(getBakingExp() >= getBakingExpNeeded()) {
            var lastBakingExp = getBakingExpNeeded();
            setBakingExp(0);
            setBakingLevel(getBakingLevel()+1);
            setBakingExpNeeded(lastBakingExp+Math.floor(Math.random()*100+25));
            showUpdatedStats();
            setLog("<strong>Baking Level Increased!</strong><br/><font color='green'>Next Baking level reached. You now need to get "+getBakingExpNeeded()+" exp points till the next level.</font>")
            return true;
        }
    }, 10);

    setInterval(function () {
        showUpdatedStats();
        if (Game.mode == 1) {
            checkHealth();
            if (getHealth() > getMaxHealth()) {
                setError("<font color='red'>CHEATER!</font>");
                setLog(getError());
                setHealth(getMaxHealth());
            }

            if (Game.plantedSeeds <= 0) {
                Game.plantedSeedsReady = false;
            }
        }

        if (getPlantedSeeds() < 0) {
            setPlantedSeeds(0);
            showUpdatedStats();
        }
        if (getSeeds() < 0) {
            setSeeds(0);
            showUpdatedStats();
        }

        if (Game.randomEventTimer <= 0) {
            randomEvents();
            Game.randomEventTimer = 90;
        }
        $("#farmName").click(function () {
            $("#nameInput").attr("disabled", false);
        });
        $("#farmName").focusout(function () {
            $("#nameInput").attr("disabled", true);
        });

        var $cont = $('#log');
        $cont[0].scrollTop = $cont[0].scrollHeight;

        var bar1 = $('progress').eq(0);
        var bar2 = $('progress').eq(1);
        var bar3 = $('progress').eq(2);

        var bar1Perc = parseInt(bar1.attr("value")) / parseInt(bar1.attr("max")) * 100;
        var bar2Perc = parseInt(bar2.attr("value")) / parseInt(bar2.attr("max")) * 100;
        var bar3Perc = parseInt(bar3.attr("value")) / parseInt(bar3.attr("max")) * 100;

        $('.progress-bar.progress-bar-success').css("width", bar1Perc + "%");
        $('.progress-bar.progress-bar-warning').css("width", bar2Perc + "%");
        $('.progress-bar.progress-bar-info').css("width", bar3Perc + "%");

    }, 100);


    setInterval(function () {
        if (getPlantedSeedsTimer() > 0 && getPlantedSeeds() > 0) {
            var seedsTimerValue = $("#seedsTimer").prop("value");
            setPlantedSeedsTimer(getPlantedSeedsTimer() - 1);
            $("#seedsTimer").val(seedsTimerValue + 1);
        }

        if (getPlantedSeedsTimer() <= 0) {
            var randomExp = Math.floor(Math.random()*20+10);
            setFarmingExp(getFarmingExp()+randomExp);
            setLog("<font color='green'>Your seed is fully grown. Harvest it to move on. You gained "+randomExp+" farming exp.</font>");
            setPlantedSeedsTimer(138);
            Game.plantedSeedsCheck = false;
            Game.plantedSeedsReady = true;
            setSeedsReadyToBeHarvested(getSeedsReadyToBeHarvested() + 1);
            setPlantedSeeds(getPlantedSeeds() - 1);
            $("#seedsTimer").val(0);
        }

        if (getBreadTimer() > 0 && getBreadBeingMade() > 0) {
            var breadTimerValue = $("#breadTimer").prop("value");
            Game.breadTimer--;
            $("#breadTimer").val(breadTimerValue + 1);
        }

        if (getBreadTimer() <= 0) {
            var randomExpGained = Math.floor(Math.random()*20+10)
            setBakingExp(getBakingExp()+randomExpGained);
            Game.breadBeingMadeCheck = false;
            setLog("<font color='green'>Your successfully baked a loaf of bread.</font>");
            setBreadTimer(69);
            setBreadBeingMade(getBreadBeingMade() - 1);
            setBread(getBread() + 1);
            $("#breadTimer").val(0);
        }
        Game.randomEventTimer--;
        Game.timeLivedSeconds++;
        convertTime(getElement("timeLived").innerHTML = "Time Lived: " + Game.timeLivedDays + " days " + Game.timeLivedHours + " hours " + Game.timeLivedMinutes + " minutes " + Game.timeLivedSeconds + " seconds");
        setSearchPoints(getSearchPoints() + 1);
        showUpdatedStats();
    }, 1000);

    setInterval(function () {
        if (Game.mode == 1) {
            setHealth(getHealth() - randomHealthLoss);
            setLog("<strong>Ouch!</strong><br/><font color='red'>You lost " + randomHealthLoss + " HP while feeling hungry.</font>")
        }
    }, randomNumber);

    setInterval(function () {
        if (getHealth() <= 25 && getBread() > 0) {
            eatBread();
            showUpdatedStats();
            setLog("<font color='green'>You ate one bread as your health got too low.</font>");
            return true;
        }
    }, 1);
}