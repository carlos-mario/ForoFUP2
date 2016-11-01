Template.Libros.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('libros_form');
    });
});

Template.Libros.helpers({
    Libros:function () {
        return LibrosForm.find({},{sort:{createdAt: -1}}).fetch();
    }

});

Template.Libros.events({
	'click .add-book': function(event){
		console.log("add libro");
		FlowRouter.go('libro');
	}
});