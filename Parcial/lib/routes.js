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
		

FlowRouter.route('/plantas',{
	name: 'plantas',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Plantas'});
	}
});


FlowRouter.route('/deportes',{
	name: 'deportes',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Deportes'});

	}
});
