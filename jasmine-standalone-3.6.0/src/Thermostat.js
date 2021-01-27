"use strict";

class Thermostat {
    constructor() {
        this.MINIMUM_TEMPERATURE = 10;
        this.MAX_TEMP_PSM_ON = 25;
        this.MAX_TEMP_PSM_OFF = 32;
        this.DEFAULT_TEMP = 20;
        this.ENERGY_LIMIT_HIGH = 25;
        this.ENERGY_LIMIT_LOW = 18;


        this.temp = this.DEFAULT_TEMP;
        this.powerSavingMode = true;
    }

    isPowerSavingModeOn() {
        return this.powerSavingMode === true;
    }

    isMinTemp() {
        return this.temp === this.MINIMUM_TEMPERATURE;
    }

    isMaxTemp() {
        if (this.isPowerSavingModeOn() === false) {
            return this.temp === this.MAX_TEMP_PSM_OFF;
        }
        return this.temp === this.MAX_TEMP_PSM_ON;
    }

    switchPowerSavingModeOff() {
        this.powerSavingMode = false;
    }

    switchPowerSavingModeOn() {
        this.powerSavingMode = true;
    }

    up(inc = 1) {
        if (this.isMaxTemp()) {
            return;
        }
        this.temp += inc;
    }

    down(dec = 1) {
        if (this.isMinTemp()) {
            return;
        }
        this.temp -= dec;
    }

    getTemp() {
        return this.temp;
    }

    resetTemp() {
        return this.temp = this.DEFAULT_TEMP;
    }

    energyUsage() {
        if (this.temp < this.ENERGY_LIMIT_LOW) {
          return "low-usage";
        } else if (this.temp >= this.ENERGY_LIMIT_HIGH) {
          return "high-usage";
        } else {
          return "medium-usage";
        };
    }
};