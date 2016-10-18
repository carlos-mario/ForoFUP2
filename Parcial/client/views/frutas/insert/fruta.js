Meteor.subscribe('frutas_form');

Template.Frutas.helpers({

});

Template.Frutas.events({
    'submit' (event){
      event.preventDefault();
      var nom_de_fruta = event.target.nom_de_fruta.value;
      var num_frutas = event.target.num_frutas.value;
      var color_fruta = event.target.color_fruta.value;
      var peso_fruta = event.target.peso_fruta.value;
      var forma_fruta = event.target.forma_fruta.value;
      

      var fruta = {
        características: nom_de_fruta + " " + num_frutas + " " + color_fruta + " " + peso_fruta + " " + forma_fruta+ " "           
      }

      Meteor.call('FrutasForm.insert', fruta);

      console.log("Fruta: ", fruta);
      event.target.tipo.value="";    
  }
});