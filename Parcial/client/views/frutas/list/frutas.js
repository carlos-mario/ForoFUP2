Template.Frutas.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('frutas_form');
    });
});

Template.Frutas.helpers({
    frutas:function () {
        return FrutasForm.find({},{sort:{createdAt: -1}}).fetch();
    }

});

Template.Frutas.events({
	'click .add-fruit': function(event){
		console.log("add fruta");
		FlowRouter.go('fruta');
	}
});

