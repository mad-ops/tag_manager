import '../imports/api/inventory.js';
import { Inventory } from '../imports/api/inventory.js';

Meteor.startup(() => {
	if(Inventory.find().count() === 0){ // if collecton is empty initialize to 0
		var doc = {
			tagIdSelector: "VM1000", tagFront2: "DOX", tagFront3: "250", tagBack1: "VISH", tagBack2: "14 KT YG", tagBack3: "0.50 G CTRN",
			idnum: 1000, idtype: "VM"
		}
		Inventory.insert(doc)
	}
});

