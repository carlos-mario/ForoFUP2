
Template.Foros.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('foros_form');
    });
});

Template.Foros.helpers({
    foros:function () {
        return ForosForm.find({categori: Session.get('categori_filter')},{sort:{createdAt: -1}}).fetch();
    },
    createdAt: function(){
        console.log("createdAt: ", this);
        return this.createdAt;
    }
});

Template.Foros.events({
	'click .add-forum': function(event){
		console.log("add foro");
		FlowRouter.go('foro');
	},
    'change select': function(event){
        Session.set('categori_filter', event.value);
    }
});

