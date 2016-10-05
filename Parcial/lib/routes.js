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

<<<<<<< HEAD
FlowRouter.route('/figuras',{
	name: 'figuras',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Figuras'});
	}
});

=======
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


>>>>>>> 681c49afa750b96f85a5feb67b0dba745ba4362e
FlowRouter.route('/deportes',{
	name: 'deportes',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Deportes'});

	}
});
