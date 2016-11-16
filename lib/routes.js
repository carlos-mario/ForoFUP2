
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
FlowRouter.route('/tema',{
    name: 'tema',
    action(){
        BlazeLayout.render('MainLayout', {main: 'Tema'});
    }
});

FlowRouter.route('/temas/:id',{
    name: 'edit.tema',
    action() {
        BlazeLayout.render('MainLayout', {main: 'EditTema'});
    }
});

FlowRouter.route('/temas',{
    name: 'temas',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Temas'});
    }
});
