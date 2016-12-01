Template.ForosIndex.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('foros_form');
        //nos subscribimos para poder buscar en el foro
        self.subscribe('temas_form');
        self.subscribe('allUsers');
    });
});

Template.ForosIndex.helpers({
    owner: function(){
        console.log("user: ", this.owner, Meteor.users.find({_id: this.owner}).fetch()[0].emails[0].address);
        var owner = Meteor.users.find({_id: this.owner}).fetch()[0];
        return owner.emails[0].address;
    },
    foros:function () {
        //cambio en find
        return ForosForm.find({categori: Session.get('categori_filter')},{sort:{createdAt: -1}}).fetch();
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
    },
    categories: function (){
    categories = [];
    categoria_1 = {
      value: "1",
      text: "opción 1"
    };
    categoria_2 = {
      value: "2",
      text: "opción x"
    };
    categories.push(categoria_1);
    categories.push(categoria_2);

    categories_mongo = TemasForm.find().fetch();

    console.log("categories: ", categories_mongo);
    return categories_mongo;
   }
});

Template.ForosIndex.events({
	'click .add-forum': function(event){
		console.log("add foro");
		FlowRouter.go('foro');
	},
    'click .foro_info': function(event){
        console.log("add foro", event.currentTarget.id);
        var current_event_foro_id = event.currentTarget.id;
        Session.set('current_foro_id', current_event_foro_id);
        FlowRouter.go('ForosRes');
    },
    'change select': function(event){
        Session.set('categori_filter', event.value);
    }   
});