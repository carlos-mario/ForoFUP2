Template.Vehiculo.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('vehiculos_form');
    });
});

Template.Vehiculo.helpers({

});

Template.Vehiculo.events({
    'submit': function (event){
      event.preventDefault();
      var marca = event.target.marca.value;
      var modelo = event.target.modelo.value;
      var color = event.target.color.value;
      var numero_puertas = event.target.numero_puertas.value;
      var valor = event.target.valor.value;

      var vehiculo = {

        marca: marca, 
        modelo: modelo,
        color: color,
        numero_puertas: numero_puertas,
        valor: valor        
      }

      Meteor.call('VehiculosForm.insert', vehiculo);

  	  event.target.marca.value = "";
      event.target.modelo.value = "";
      event.target.color.value = "";
      event.target.numero_puertas.value = "";
	    event.target.valor.value = "";
      console.log("Vehiculo: ", vehiculo);          
    }
});