Template.Deportes.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('deportes_form');
    });
});

Template.Deportes.helpers({
    deportes:function () {
        return DeportesForm.find().fetch();
    }

});

Template.Deportes.events({

});