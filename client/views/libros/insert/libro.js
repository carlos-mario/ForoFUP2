Template.Libro.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('libros_form');
    });
});

Template.Libro.helpers({

});

Template.Libro.events({
    'submit': function (event){
      event.preventDefault();
      var titulo = event.target.titulo.value;
      var autor = event.target.autor.value;
      var anio_publicacion = event.target.anio_publicacion.value;
      var editorial = event.target.editorial.value;
      var edicion = event.target.edicion.value;

      var libro = {
        
        titulo: titulo,
        autor: autor,
        anio_publicacion: anio_publicacion,
        editorial: editorial,
        edicion: edicion,
        createdAt: new Date()        
      }

      Meteor.call('LibrosForm.insert', libro);

      event.target.titulo.value = "";
      event.target.autor.value = "";
      event.target.anio_publicacion.value = "";
      event.target.editorial.value = "";
      event.target.edicion.value = "";
      console.log("Libro: ", libro);
      FlowRouter.go('libros');
  }
});