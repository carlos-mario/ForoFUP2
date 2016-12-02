
/*FlowRouter.route('/',{
    name: 'home',
    action() {
        BlazeLayout.render('forosIndex');
    }
});*/

FlowRouter.route('/',{
    name: 'test',
    action() {
        BlazeLayout.render('MainLayout', {main: 'ForosIndex'});
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

FlowRouter.route('/ForosIndex',{
    name: 'foros',
    action() {
        BlazeLayout.render('MainLayout', {main: 'ForosIndex'});
    }
});

FlowRouter.route('/ForosRes',{
    name: 'ForosRes',
    action() {
        BlazeLayout.render('MainLayout', {main: 'ForosRes'});
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

FlowRouter.route('/respuesta',{
    name: 'respuesta',
    action(){
        BlazeLayout.render('MainLayout', {main: 'Respuesta'});
    }
});

FlowRouter.route('/respuestas/:id',{
    name: 'edit.respuesta',
    action() {
        BlazeLayout.render('MainLayout', {main: 'EditRespuesta'});
    }
});

FlowRouter.route('/respuestas',{
    name: 'respuestas',
    action() {
        BlazeLayout.render('MainLayout', {main: 'ForosRes'});
    }
});

FlowRouter.route('/login',{
    name: 'login',
    action() {
        BlazeLayout.render('MainLayout', {main: 'login'});
    }
});

