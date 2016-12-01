Template.Respuestas.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('respuestas_form');
        self.subscribe('allUsers');
    });
});

Template.Respuestas.helpers({   
    respuestas:function () {
        return RespuestasForm.find({},{sort:{createdAt: -1}}).fetch();
    },
    createdAt: function(){
        console.log("createdAt: ", this);
        return this.createdAt;
    },
        createdAt: function(){
        console.log("createdAt: ", moment(this.createdAt).format('lll'));
         return moment(this.createdAt).format('lll');
    }
});

Template.Respuestas.events({
	'click .add-rta': function(event){
        event.preventDefault();
		console.log("add respuesta");
		FlowRouter.go('respuesta');
	},
    
    'click .like': function(event){
        event.preventDefault();
        
        var current_user_id = '123456813';
        var current_event_id = event.currentTarget.id;
        params = {  id: current_event_id, 
                    params: {   $inc: { likes: 1 },  
                                $push: { likers:  current_user_id } }
                 };

        var res = RespuestasForm.find( { _id: current_event_id}, { likers: 1}).fetch()[0].likers;
        var q = _.find(res, (x) => x == current_user_id );
        console.log('like', res, q); 
        if ( q == current_user_id ) return;        
        Meteor.call('RespuestasForm.update', params);        
    }
});