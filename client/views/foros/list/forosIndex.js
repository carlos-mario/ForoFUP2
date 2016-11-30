Template.ForosIndex.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('foros_form');
        //nos subscribimos para poder buscar en el foro
        self.subscribe('temas_form');
    });
});

Template.ForosIndex.helpers({
    foros:function () {
        return ForosForm.find({},{sort:{createdAt: -1}}).fetch();
    },
    //TOMAMOS EL OBJETO Y MOSTRAMOS SOLO EL TITULO
    categoria: function(){
        console.log("categoria: ", this);
        categoria = TemasForm.findOne({_id: this.categoria});
        return categoria.titulo_tema;
    },
    //FECHA CON FORMATO 
    createdAt: function(){
        console.log("createdAt: ", moment(this.createdAt).format('lll'));
         return moment(this.createdAt).format('lll');
    }
});

Template.ForosIndex.events({
	'click .add-forum': function(event){
		console.log("add foro");
		FlowRouter.go('foro');
	},
    'click .foro_info': function(event){
        console.log("click_foro", event);
        FlowRouter.go('ForosRes');
    }   
});