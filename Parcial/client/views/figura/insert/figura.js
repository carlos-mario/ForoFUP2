Meteor.subscribe('figuras_form');

Template.Figuras.helpers({

});

Template.Figuras.events({
    'submit' (event){
      event.preventDefault();
      var figura = event.target.figura.value;
      var color = event.target.color.value;
      var ancho = event.target.ancho.value;
      var alto = event.target.alto.value;
      var largo = event.target.largo.value;
      var tamaño = event.target.tamaño.value;
      var lados = event.target.lados.value;

      var figura = {
        características: figura + " " + color + " " + ancho + " " + alto + " " + largo+ " " + tamaño+ " " + lados+ " "           
      }

      Meteor.call('FigurasForm.insert', figura);

      console.log("Figura: ", figura);
      event.target.figura.value="";    
  }
});