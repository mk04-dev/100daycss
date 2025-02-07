stat = {
	str: 5,
	iq: 5,
	baseMA: 3,
};

wep = {
	"stat.baseMA >= 1": {
		str: 2,
		iq: 1,
	},

    "stat.baseMA >= 3": {
		str: 4,
		iq: 2,
	},
    "stat.baseMA >= 4": {
		str: 10,
		iq: 10,
	},
};

applyStat = (stat, extra) => {
	Object.entries(extra).forEach(([k, v]) => {
		stat[k] += v;
	});
};

equipWeapon = function (stat, weapon) {
	let extra = {};
	Object.entries(weapon).forEach(([k, v]) => {
		var isValid = new Function("stat", `return ${k}`);
		if (isValid(stat)) {
			extra = v;
		}
	});
	applyStat(stat, extra);
};


equipWeapon(stat, wep);
