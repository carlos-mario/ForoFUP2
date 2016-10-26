Template.Vehiculos.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('vehiculos_form');
    });
});

Template.Vehiculos.helpers({
    vehiculos:function () {
        return VehiculosForm.find({},{sort:{createdAt: -1}}).fetch();
    }

});

Template.Vehiculos.events({
	'click .add-vehicle': function(event){
		console.log("add vehiculo");
		FlowRouter.go('vehiculo');
	}
});