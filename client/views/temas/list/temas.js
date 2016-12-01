Template.Temas.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('temas_form');
    });
});

Template.Temas.helpers({
    temas:function () {
        return TemasForm.find({},{sort:{createdAt: -1}}).fetch();
    }

});

Template.Temas.events({
    'click .add-theme': function(event){
        console.log("add tema");
        FlowRouter.go('tema');
    }
});
