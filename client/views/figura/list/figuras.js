Template.Figuras.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('figuras_form');
    });
});

Template.Figuras.helpers({
    figuras:function () {
        return FigurasForm.find({},{sort:{createdAt: -1}}).fetch();
    }

});

Template.Figuras.events({
	'click .add-figure': function(event){
		console.log("add figura");
		FlowRouter.go('figura');
	}
});
	