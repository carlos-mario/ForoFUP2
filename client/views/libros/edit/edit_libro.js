Template.EditLibro.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('libros_form');
    });
});

Template.EditLibro.onRendered(function () {
    $('.modal-trigger').leanModal();
});

Template.EditLibro.helpers({
    libro: function () {
        var id = FlowRouter.getParam('id');
        return LibrosForm.findOne({_id: id});
    }
});

Template.EditLibro.events({
    'submit': function (event) {
        event.preventDefault();
        var titulo = event.target.tiutlo.value;
        var autor = event.target.autor.value;
        var anio_publicacion = event.target.anio_publicacion.value;
        var editorial = event.target.editorial.value;
		var edicion = event.target.edicion.value;

        var libro_updated = {
            id: FlowRouter.getParam('id'),
            params: {
                $set: {
					titulo: titulo, 
					autor: autor,
					anio_publicacion: anio_publicacion,
					editorial: editorial,
					edicion: edicion
                }
            }
        }

        Meteor.call('LibrosForm.update', libro_updated);

        event.target.titulo.value = "";
		event.target.autor.value = "";
		event.target.anio_publicacion.value = "";
		event.target.editorial.value = "";
		event.target.edicion.value = "";
        FlowRouter.go('libros');
    },
    'click .delete': function (event) {
        event.preventDefault();
        Meteor.call('LibrosForm.remove', {_id:FlowRouter.getParam('id')});
        FlowRouter.go('libros');
    }
});