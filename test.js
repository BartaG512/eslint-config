const module = require('./hello.js');

class ClassName extends Hello {
	constructor() {
		this.he = 1;
		super();
		const variable = 1;

		const {
			ownName: ds,
			configServerPort,
			configServerHost, 
		} = nodeArgs;
		const hey = {
			a: 1,
			b: 1,
			v: 1,
		};
		const hello = {
			a: 1,
			b: 2,
			c: 2,
		};
		const hello1 = '121';
		const hello12 = 'dfsfdgh';
		const error = new Error();
		throw error;
		// this.logger.info('hello', '11'); 
		const logger = () => {

		};
		logger.info('hello', 'mize');
		this.logger.info('Message');
		logger.info('hello', ['1']);
		logger.warn('hello', {
			error: 1,
			a: 1,
			b: 2,
		});
		console.warn('hello', ['1']); 
		this.logger.info('Message', 'Hello');
		// this.logger.info('hello', { what: "isLove" });
		// Symbol('1');
	}

	method1() { 
		console.log('1');
	}
}

// console.log("ClassName", ClassName);
(async() => {
	console.log('yes');
})();
const red = 1;

if (red === 1) {

}

if (red === 'red') {

}
const text = 4;
const expr = 4;
let m = 4;
while (m = text.match(expr)) {
	// ...
}

module.exports = { setupFilesAfterEnv: ['jest-extended'] };

/**
 * @description - Szállítási indok. Milyen okkal tart oda ahová tart. pl.: Valamilyen hiba történt, és elküldjük a kijáratra.
 * @param {object} obj
 * @param {object} obj.transport Transport példány
 * @param {object | string} obj.deliveryReason - Ez lehet egy object amiben vagy egy string kulcs
 * a resource konfig "plcErrorMessageDescriptors" leírójából. Ha a string nem található a leíró fájlban akkor, ahogy van úgy kerül elmentésre.
 * @param {string} obj.deliveryReason.type - Jelenleg csak típus létezik plcError
 * @returns {string} A feloldott delivery reasaon
 */
async function updateDeliveryReason({ transport, deliveryReason }) {
	console.log('transport:', transport);
	console.log('deliveryReason:', deliveryReason);
}

updateDeliveryReason();
