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
    //figuras
        'FigurasForm.insert': function(params){
		return FigurasForm.insert(params);
	},
	'FigurasForm.update': function(params){
		return FigurasForm.update({_id: params.id}, params.params);
	},
	'Fields.remove': function(params){
		 FigurasForm.remove(params);
	},
    //------------
});