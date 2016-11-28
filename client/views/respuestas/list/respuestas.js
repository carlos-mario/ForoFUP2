Template.Respuestas.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('respuestas_form');
    });
});

Template.Respuestas.helpers({
    respuestas:function () {
        return RespuestasForm.find({},{sort:{createdAt: -1}}).fetch();
    },
    createdAt: function(){
        console.log("createdAt: ", this);
        return this.createdAt;
    }

});

Template.Respuestas.events({
	'click .add-rta': function(event){
		console.log("add respuesta");
		FlowRouter.go('respuesta');
	}
});