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


FlowRouter.route('/figuras',{
	name: 'figuras',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Figuras'});
	}
});