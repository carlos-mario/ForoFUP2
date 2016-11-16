Template.Tema.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('temas_form');
    });
});

Template.Tema.helpers({

});

Template.Tema.events({
    'submit': function (event){
      event.preventDefault();
      var id_tema= event.target.id_tema.value;
      var titulo_tema = event.target.titulo_tema .value;
     

      var tema = {

        id_tema: id_tema, 
        titulo_tema: titulo_tema,
        createdAt: new Date()        
      }

      Meteor.call('TemasForm.insert', tema);

      event.target.id_tema.value = "";
      event.target.titulo_tema.value = "";
      console.log("Tema: ", tema); 
      FlowRouter.go('temas');         
    }
});