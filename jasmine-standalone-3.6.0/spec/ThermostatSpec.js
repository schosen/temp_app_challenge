describe("Thermostat", function() {
    let thermostat;

    beforeEach(function() {
        thermostat = new Thermostat;
    });

    it('initially is at 20 degrees', function() {
        expect(thermostat.getTemp()).toEqual(20);
    });

    it('has a minimum temperature of 10 degrees', function() {
        for (let i = 0; i < 11; i++) {
            thermostat.down();
        }

        expect(thermostat.getTemp()).toEqual(10);
        
    });

    it('has a power saving mode on by default', function() {
        expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    it('can switch the power saving mode off', function() {
        thermostat.switchPowerSavingModeOff();
        expect(thermostat.isPowerSavingModeOn()).toBe(false)
    })

    it('can switch power saving mode on', function() {
        thermostat.switchPowerSavingModeOff();
        expect(thermostat.isPowerSavingModeOn()).toBe(false);
        thermostat.switchPowerSavingModeOn();
        expect(thermostat.isPowerSavingModeOn()).toBe(true);
    })

    it('can be reset to default temp', function(){
        for (var i = 0; i < 8; i++) {
            thermostat.up();
        }
        thermostat.resetTemp();
        expect(thermostat.getTemp()).toEqual(20);
    });

    describe('when power saving mode is on', function() {
        it('has a maximum temperature of 25 degrees', function() {
            for (var i = 0; i < 6; i ++) {
                thermostat.up();
            }

            expect(thermostat.getTemp()).toEqual(25);
        });
    });

    describe('when the power saving mode is off', function() {
        it('has a maximum temperature of 32 degrees', function() {
            thermostat.switchPowerSavingModeOff(); 

            for (var i = 0; i < 13; i++) {
              thermostat.up();
            }
            expect(thermostat.getTemp()).toEqual(32);
        });
    });

    describe("temperature increase", function() {
        it('should go up by at least one', function() {
            thermostat.up();
            expect(thermostat.getTemp()).toEqual(21);
        });

        it('should go up by set amount', function() {
            thermostat.up(10);
            expect(thermostat.getTemp()).toEqual(30);
        });
    });

    describe("temperature decrease", function () {
      it("should go down by at least one", function () {
        thermostat.down();
        expect(thermostat.getTemp()).toEqual(19);
      });

      it("should go down by set amount", function () {
        thermostat.down(5);
        expect(thermostat.getTemp()).toEqual(15);
      });
    });
});