import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';
import { Inventory } from '../imports/api/inventory.js';
import { Session } from 'meteor/session';
import '../imports/api/dymo.js';

import './main.html';

tagAssembler = function() {
    var tag = [{ tagIdSelector: Session.get("toptagIdSelector"), tagFront2: Session.get("toptagFront2"), tagFront3: "$"+Session.get("toptagFront3"), tagBack1: Session.get("toptagBack1"), tagBack2: Session.get("toptagBack2"), tagBack3: Session.get("toptagBack3") },
        { tagIdSelector: Session.get("bottomtagIdSelector"), tagFront2: Session.get("bottomtagFront2"), tagFront3: "$"+Session.get("bottomtagFront3"), tagBack1: Session.get("bottomtagBack1"), tagBack2: Session.get("bottomtagBack2"), tagBack3: Session.get("bottomtagBack3") }
    ]
    return tag
}

Template.printCard.events({
	'click #printButton'(e){
		e.preventDefault();
		var tags = tagAssembler()
		tags.forEach(function(tag) {
			tag["idnum"] =  parseInt(tag["tagIdSelector"].substring(2))
			tag["idtype"] = tag["tagIdSelector"].substring(0,2)
			Inventory.insert(tag)
		})
		console.log("we did it");
        try {
            if (!label) {
                alert("Load label before printing");
                return;
            }

            //alert(printersSelect.value);
            label.print(printersSelect.value);
            //label.print("unknown printer");
        } catch (e) {
            alert(e.message || e);
        }		
	}
})

Template.cardForm.onCreated(function() {
    var pos = this.data.position;
    var ids = ['tagIdSelector', 'tagFront2', 'tagFront3', 'tagBack1', 'tagBack2', 'tagBack3']
    ids.forEach(function(element) {
        Session.setDefault(pos + element, "----");
    });
    // "A" Anklet
    // "B" Bracelet
    // "C" Chain
    // "P" Pendant
    // "N" Necklace
    // "R" Ring
    // "S" Slide
    // "M" Mens
    handle = Meteor.subscribe('inventory');
    if (handle.ready()) {
        var types = ["A", "B", "C", "P", "N", "R", "S", "M"]
        types.forEach(function(element) {
            Session.setDefault("V" + element, "1000");
        });
    }

});

Template.cardForm.helpers({
    tagId: function() {
        var value = Session.get(Template.instance().data.position + "tagIdSelector")
        return value;
    },
    tagFront2: function() {
        var value = Session.get(Template.instance().data.position + "tagFront2")
        return value;
    },
    tagFront3: function() {
        var value = Session.get(Template.instance().data.position + "tagFront3")
        return value;
    },
    tagBack1: function() {
        var value = Session.get(Template.instance().data.position + "tagBack1")
        return value;
    },
    tagBack2: function() {
        var value = Session.get(Template.instance().data.position + "tagBack2")
        return value;
    },
    tagBack3: function() {
        var value = Session.get(Template.instance().data.position + "tagBack3")
        return value;
    }
});

Template.cardForm.events({
    'change select'(e) {
        var key = "V" + $(e.target).val();
        var doc = Inventory.find({ "idtype": key},{limit: 3, sort: {idnum:-1}}).fetch();
        console.log(doc)
        if (doc.length < 1) {
            doc = 1000
        } else {
            doc = doc[0]["idnum"] + 1
        }

        Session.set(Template.instance().data.position + $(e.target).attr("id"), key + doc);
        label = dymo.label.framework.openLabelXml(getLabelXml(tagAssembler()));
        updatePreview(label);
    },
    'blur input'(e) {
        var opt = $(e.target).val()
        Session.set(Template.instance().data.position + $(e.target).attr("id"), opt);
        label = dymo.label.framework.openLabelXml(getLabelXml(tagAssembler()));
        updatePreview(label);
    }
});