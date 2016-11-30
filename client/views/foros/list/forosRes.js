Template.ForosRes.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('foros_form');
        self.subscribe('temas_form');
    });
});

Template.ForosRes.helpers({
    foros:function () {
        current_foro_id = Session.get('current_foro_id');
        return [ForosForm.findOne({_id: current_foro_id})];
    },
    categoria: function(){
        console.log("categoria: ", this);
        categoria = TemasForm.findOne({_id: this.categoria});
        return categoria.titulo_tema;
    }
});

Template.ForosRes.events({
	'click .add-forum': function(event){
		console.log("add foro", event.currentTarget.id);
		FlowRouter.go('ForosRes');
	},  
});


