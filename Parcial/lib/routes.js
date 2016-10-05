FlowRouter.route('/',{
	name: 'home',
	action(){
		BlazeLayout.render('HomeLayout')
	}
});

FlowRouter.route('/vehiculo',{
	name: 'vehiculo',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Vehiculo'});
	}
});
FlowRouter.route('/libro',{
	name: 'libro',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Libro'});
	}
});