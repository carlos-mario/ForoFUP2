Meteor.subscribe('deportes_form');

Template.Deportes.helpers({

});

Template.Deportes.events({
    'submit' (event){
      event.preventDefault();
      var nom_de_deporte = event.target.nom_de_deporte.value;
      var num_jugadores = event.target.num_jugadores.value;
      var color_unifor = event.target.color_unifor.value;
      var color_unifor_2 = event.target.color_unifor_2.value;
      var instrumento = event.target.instrumento.value;
      var horario = event.target.horario.value;
      var espacio_donde_ejecuta = event.target.espacio_donde_ejecuta.value;

      var deporte = {
        características: nom_de_deporte + " " + num_jugadores + " " + color_unifor + " " + color_unifor_2 + " " + instrumento+ " " + horario+ " " + espacio_donde_ejecuta+ " "           
      }

      Meteor.call('DeportesForm.insert', deporte);

      console.log("Deporte: ", deporte);
      event.target.tipo.value="";    
  }
});