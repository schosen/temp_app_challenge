"use strict";

class Thermostat {
    constructor() {
        this.temp = 20;
        this.MINIMUM_TEMPERATURE = 10;
        this.powerSavingMode = true;
    }

    isPowerSavingModeOn() {
        return this.powerSavingMode === true
    }

    isMinTemp() {
        return this.temp === this.MINIMUM_TEMPERATURE;
    }

    up(inc = 1) {
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
};