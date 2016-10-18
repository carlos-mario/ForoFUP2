FlowRouter.route('/',{
    name: 'home',
    action() {
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/test',{
    name: 'test',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Test'});
    }
});

FlowRouter.route('/vehiculo',{
	name: 'vehiculo',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Vehiculo'});
	}
});

FlowRouter.route('/vehiculos/:id',{
    name: 'edit.vehiculo',
    action() {
        BlazeLayout.render('MainLayout', {main: 'EditVehiculo'});
    }
});

FlowRouter.route('/vehiculos',{
    name: 'vehiculos',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Vehiculos'});
    }
});

FlowRouter.route('/frutas',{
	name: 'frutas',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Frutas'});
}
});

FlowRouter.route('/figuras',{
	name: 'figuras',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Figuras'});
	}
});

FlowRouter.route('/libro',{
	name: 'libro',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Libro'});
	}
});
		
FlowRouter.route('/plantas',{
	name: 'plantas',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Plantas'});

	}
});

FlowRouter.route('/deporte',{
	name: 'deporte',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Deporte'});

	}
});

FlowRouter.route('/deportes/:id',{
    name: 'edit.deporte',
    action() {
        BlazeLayout.render('MainLayout', {main: 'EditDeporte'});
    }
});

FlowRouter.route('/deportes',{
    name: 'deportes',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Deportes'});
    }
});