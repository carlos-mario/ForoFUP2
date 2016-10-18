Template.Figura.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('figuras_form');
    });
});

Template.Figura.helpers({

});

Template.Figura.events({
    'submit': function (event) {
        event.preventDefault();        
        var nombre = event.target.nombre.value;
        var color = event.target.color.value;
        var ancho = event.target.ancho.value;
        var alto = event.target.alto.value;
        var largo = event.target.largo.value;
        var tamaño = event.target.tamaño.value;
        var lados = event.target.lados.value;

        var figura = {
            nombre: nombre,
            color: color,
            ancho: ancho,
            alto: alto,
            largo:largo,
            tamaño:tamaño,
            lados:lados
        }

        Meteor.call('FigurasForm.insert', figura);

         event.target.nombre.value = "";
        event.target.color.value = "";
        event.target.ancho.value = "";
        event.target.alto.value = "";
        event.target.largo.value = "";
        event.target.tamaño.value = "";
        event.target.lados.value = "";
        console.log("Figura: ", figura);
    }
});

