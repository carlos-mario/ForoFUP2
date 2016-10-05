Meteor.subscribe('vehiculos_form');

Template.Vehiculo.helpers({

});

Template.Vehiculo.events({
    'submit' (event){
      event.preventDefault();
      var marca = event.target.marca.value;
      var modelo = event.target.modelo.value;
      var color = event.target.color.value;
      var numero_puertas = event.target.numero_puertas.value;
      var valor = event.target.valor.value;

      var vehiculo = {
        características: marca + " " + modelo + " " + color + " " + numero_puertas + " " + valor        
      }

      Meteor.call('VehiculosForm.insert', vehiculo);

      console.log("Vehiculo: ", vehiculo);
      event.target.marca.value="";    
  }
});