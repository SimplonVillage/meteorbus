Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'home'});
Router.route('/inscription',{name:'insertParentsForm'});
Router.route('/inscriptionenfant',{name:'insertEnfantsForm'});


