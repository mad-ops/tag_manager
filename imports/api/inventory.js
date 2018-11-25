import { Mongo } from 'meteor/mongo';
 
export const Inventory = new Mongo.Collection('inventory');
if (Meteor.isServer) {
	Meteor.publish('inventory', function () {
	  return Inventory.find({});
	});
}