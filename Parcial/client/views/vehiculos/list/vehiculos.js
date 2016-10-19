Template.Vehiculos.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('vehiculos_form');
    });
});

Template.Vehiculos.helpers({
    vehiculos:function () {
        return VehiculosForm.find().fetch();
    }

});

Template.Vehiculos.events({

});