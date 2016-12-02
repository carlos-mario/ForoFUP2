Template.Foro.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('foros_form');
        self.subscribe('temas_form');
    });
});

Template.Foro.helpers({
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

Template.Foro.events({
    'submit': function (event){
      event.preventDefault();
      var titulo_foro = event.target.titulo_foro.value;
      var descripcion = event.target.descripcion.value;
      //var fecha_creacion_foro = event.target.fecha_creacion_foro.value;
      console.log('id select: ', $( "#categories-select option:selected" ).val());

      var foro = {
        
        titulo_foro: titulo_foro,
        descripcion: descripcion,
        //trae las categorias del select
        categoria: $( "#categories-select option:selected" ).val(),  
        owner: Meteor.userId(),    
        createdAt: new Date()        
      }

      Meteor.call('ForosForm.insert', foro);

      event.target.titulo_foro.value="";    
      event.target.descripcion.value = "";
      //event.target.fecha_creacion_foro.value = "";
      console.log("Foros: ", foro);
      FlowRouter.go('foros'); 
    }
});