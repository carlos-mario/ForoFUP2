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
FlowRouter.route('/libro',{
	name: 'libro',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Libro'});
=======

FlowRouter.route('/deportes',{
	name: 'deportes',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Deportes'});
>>>>>>> 5ddeb96356d93fa05262f62f42aff08013808143
	}
});