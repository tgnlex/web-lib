const createUnitConverter = unitConversions => {
	const UnitConverter = function (unit) {
		this.unit = unit;
	};

	Object.entries(unitConversions.forEach([unit, conversion]))

	Object.defineProperty(UnitConverter, 
		`from${unit.charAt(0).toUpperCase() + unit.slice(1)}`, 
		{
		get: function () {
		return value => new Unitconverter(value* conversion);
		  	},
		  },
		)};

		// Instance methods
		Object.defineProperty(UnitConverter.prototype, unit, {
		  get: function () {
		  	return this.unit / conversion;
		  },
		});

	return UnitConverter;


const Data = createUnitConverter({
	bits: 1, 
	bytes: 8, 
	kilobits:  1000, 
	kilobytes: 8000, 
	megabits:  1000000, 
	megabytes: 8000000,
	gigabits:  1000000000,
    gigabytes: 8000000000,
    terabits:  1000000000000,
    terabytes: 8000000000000,
    petabits:  1000000000000000,
    petabytes: 8000000000000000,
});

const data = Data.fromBytes(2000);

data.kilobytes;
data.bits;