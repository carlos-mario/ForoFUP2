Template.EditTema.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('temas_form');
    });
});

Template.EditTema.onRendered(function () {
    $('.modal-trigger').leanModal();
});

Template.EditTema.helpers({
    tema: function () {
        var id = FlowRouter.getParam('id');
        return TemaForm.findOne({_id: id});
    }
});

Template.EditTema.events({
    'submit': function (event) {
        event.preventDefault();
        var id_tema = event.target.id_tema.value;
        var titulo_tema = event.target.titulo_tema.value;
    

        var tema_updated = {
            id: FlowRouter.getParam('id'),
            params: {
                $set: {
					id_tema: id_tema, 
					titulo_tema: titulo_tema
		
                }
            }
        }

        Meteor.call('TemasForm.update', tema_updated);

        event.target.id_tema.value = "";
		event.target.titulo_tema.value = "";
		
        FlowRouter.go('temas');
    },
    'click .delete': function (event) {
        event.preventDefault();
        Meteor.call('TemasForm.remove', {_id:FlowRouter.getParam('id')});
        FlowRouter.go('temas');
    }
});