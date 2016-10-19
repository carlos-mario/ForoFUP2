Template.Fruta.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('frutas_form');
    });
});

Template.Fruta.helpers({

});

Template.Fruta.events({
    'submit': function (event){
      event.preventDefault();
      var nom_de_fruta = event.target.nom_de_fruta.value;
      var num_frutas = event.target.num_frutas.value;
      var color_fruta = event.target.color_fruta.value;
      var peso_fruta = event.target.peso_fruta.value;
      var forma_fruta = event.target.forma_fruta.value;
      
      var fruta = {
        nom_de_fruta: nom_de_fruta,
        num_frutas: num_frutas,
        color_fruta: color_fruta,
        peso_fruta: peso_fruta,
        forma_fruta: forma_fruta
      }

      Meteor.call('FrutasForm.insert', fruta);

      event.target.nom_de_fruta.value="";    
      event.target.num_frutas.value = "";
      event.target.color_fruta.value = "";
      event.target.peso_fruta.value = "";
      event.target.forma_fruta.value = "";
      console.log("Fruta: ", fruta);
    }
});