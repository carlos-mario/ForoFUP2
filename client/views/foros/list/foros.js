
Template.Foros.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('foros_form');
    });
});

Template.Foros.helpers({
    foros:function () {
        return ForosForm.find({},{sort:{createdAt: -1}}).fetch();
    }

});

Template.Foros.events({
	'click .add-sport': function(event){
		console.log("add foro");
		FlowRouter.go('foro');
	}

});