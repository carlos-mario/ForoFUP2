Template.Figuras.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('figuras_form');
    });
});

Template.Figuras.helpers({
    figuras:function () {
        return FigurasForm.find().fetch();
    }

});

Template.Figuras.events({

});
	