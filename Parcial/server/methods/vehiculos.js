Meteor.methods({
	'VehiculosForm.insert': function(params){
		return VehiculosForm.insert(params);
	},
	'VehiculosForm.update': function(params){
		return VehiculosForm.update({_id: params.id}, params.params);
	},
	'Fields.remove': function (params) {
        VehiculosForm.remove(params);
    },
});