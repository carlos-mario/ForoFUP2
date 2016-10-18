Meteor.methods({
	'DeportesForm.insert': function(params){
		return DeportesForm.insert(params);
	},
	'DeportesForm.update': function(params){
		return DeportesForm.update({_id: params.id}, params.params);
	},
	'Fields.remove': function(params){
		DeportesForm.remove(params);
	},

	//vehiculos
	'VehiculosForm.insert': function(params){
		return VehiculosForm.insert(params);
	},
	'VehiculosForm.update': function(params){
		return VehiculosForm.update({_id: params.id}, params.params);
	},
	'Fields.remove': function (params) {
        VehiculosForm.remove(params);
    },
    //------------
});