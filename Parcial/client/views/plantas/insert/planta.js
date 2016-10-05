Meteor.subscribe('plantas_form');

Template.Plantas.helpers({

});

Template.Plantas.events({
    'submit' (event){
      event.preventDefault();
      var nom_de_planta = event.target.nom_de_planta.value;
      var num_de_planta = event.target.num_de_planta.value;
      var nom_de_vivero = event.target.nom_de_vivero.value;
      var region = event.target.region.value;
      var email = event.target.email.value;
      var horario = event.target.horario.value;
      var nom_del_cliente = event.target.nom_del_cliente.value;

      var planta = {
        características: nom_de_planta + " " + num_de_planta + " " + nom_de_vivero + " " + region + " " + email+ " " + horario+ " " + nom_del_cliente+ " "           
      }

      Meteor.call('PlantasForm.insert', planta);

      console.log("Planta: ", planta);
      event.target.tipo.value="";    
  }
});