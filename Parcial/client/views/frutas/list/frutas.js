Template.Frutas.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('frutas_form');
    });
});

Template.Frutas.helpers({
    frutas:function () {
        return FrutasForm.find().fetch();
    }

});

Template.Frutas.events({

});