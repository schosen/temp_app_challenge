"use strict";

class Thermostat {
    constructor() {
        this.MINIMUM_TEMPERATURE = 10;
        this.MAX_TEMP_PSM_ON = 25;
        this.MAX_TEMP_PSM_OFF = 32;
        this.DEFAULT_TEMP = 20;
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
};