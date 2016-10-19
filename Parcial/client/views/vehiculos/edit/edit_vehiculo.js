Template.EditVehiculo.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('vehiculos_form');
    });
});

Template.EditVehiculo.helpers({
    vehiculo: function () {
        var id = FlowRouter.getParam('id');
        return VehiculosForm.findOne({_id: id});
    }
});

Template.EditVehiculo.events({
    'submit': function (event) {
        event.preventDefault();
        var marca = event.target.marca.value;
        var modelo = event.target.modelo.value;
        var color = event.target.color.value;
        var numero_puertas = event.target.numero_puertas.value;
		var valor = event.target.valor.value;

        var vehiculo_updated = {
            id: FlowRouter.getParam('id'),
            params: {
                $set: {
					marca: marca, 
					modelo: modelo,
					color: color,
					numero_puertas: numero_puertas,
					valor: valor
                }
            }
        }

        Meteor.call('VehiculosForm.update', vehiculo_updated);

        event.target.marca.value = "";
		event.target.modelo.value = "";
		event.target.color.value = "";
		event.target.numero_puertas.value = "";
		event.target.valor.value = "";
        FlowRouter.go('vehiculos');
    }
});