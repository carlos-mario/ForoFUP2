Template.Deportes.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('deportes_form');
    });
});

Template.Deportes.helpers({
    deportes:function () {
        return DeportesForm.find({},{sort:{createdAt: -1}}).fetch();
    }

});

Template.Deportes.events({
	'click .add-sport': function(event){
		console.log("add deporte");
		FlowRouter.go('deporte');
	}

});