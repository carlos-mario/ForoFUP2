Template.ForosIndex.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('foros_form');
    });
});

Template.ForosIndex.helpers({
    foros:function () {
        return ForosForm.find({},{sort:{createdAt: -1}}).fetch();
    }

});

Template.ForosIndex.events({
	'click .add-forum': function(event){
		console.log("add foro");
		FlowRouter.go('foro');
	}

});