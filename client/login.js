Template.Login.helpers({
    foros:function () {
        return EditUsuario.find({usuarios},{sort:{createdAt: -1}}).fetch();
    }
});