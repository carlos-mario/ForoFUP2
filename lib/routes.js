
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


FlowRouter.route('/usuario',{
	name: 'usuario',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Usuario'});
	}
});

FlowRouter.route('/usuarios/:id',{
    name: 'edit.usuario',
    action() {
        BlazeLayout.render('MainLayout', {main: 'EditUsuario'});
    }
});

FlowRouter.route('/usuarios',{
    name: 'usuarios',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Usuarios'});
    }
});

FlowRouter.route('/foro',{
	name: 'foro',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Foro'});
	}
});

FlowRouter.route('/foros/:id',{
    name: 'edit.foro',
    action() {
        BlazeLayout.render('MainLayout', {main: 'EditForo'});
    }
});

FlowRouter.route('/foros',{
    name: 'foros',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Foros'});
    }
});
