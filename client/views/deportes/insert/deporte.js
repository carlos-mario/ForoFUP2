Template.Deporte.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('deportes_form');
    });
});

Template.Deporte.helpers({

});

Template.Deporte.events({
    'submit': function (event){
      event.preventDefault();
      var nom_de_deporte = event.target.nom_de_deporte.value;
      var num_jugadores = event.target.num_jugadores.value;
      var color_unifor = event.target.color_unifor.value;
      var color_unifor_2 = event.target.color_unifor_2.value;
      var instrumento = event.target.instrumento.value;
      var horario = event.target.horario.value;
      var espacio_donde_ejecuta = event.target.espacio_donde_ejecuta.value;

      var deporte = {
        
        nom_de_deporte: nom_de_deporte,
        num_jugadores: num_jugadores,
        color_unifor: color_unifor,
        color_unifor_2: color_unifor_2,
        instrumento: instrumento,
        horario: horario,
        espacio_donde_ejecuta: espacio_donde_ejecuta,
        createdAt: new Date()        
      }

      Meteor.call('DeportesForm.insert', deporte);

      event.target.nom_de_deporte.value="";    
      event.target.num_jugadores.value = "";
      event.target.color_unifor.value = "";
      event.target.color_unifor_2.value = "";
      event.target.instrumento.value = "";
      event.target.horario.value = "";
      event.target.espacio_donde_ejecuta.value = "";
      console.log("Deporte: ", deporte);
      FlowRouter.go('deportes'); 
    }
});