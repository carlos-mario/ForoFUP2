Template.Foro.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('foros_form');
    });
});

Template.Foro.helpers({

});

Template.Foro.events({
    'submit': function (event){
      event.preventDefault();
      var titulo_foro = event.target.titulo_foro.value;
      var descripcion = event.target.descripcion.value;
      var fecha_creacion_foro = event.target.fecha_creacion_foro.value;
      
      var foro = {
        
        titulo_foro: titulo_foro,
        descripcion: descripcion,
        fecha_creacion_foro: fecha_creacion_foro,
        createdAt: new Date()        
      }

      Meteor.call('ForosForm.insert', foro);

      event.target.titulo_foro.value="";    
      event.target.descripcion.value = "";
      event.target.fecha_creacion_foro.value = "";
      console.log("Foros: ", foro);
      FlowRouter.go('foros'); 
    }
});