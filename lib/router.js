Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'home'});
Router.route('/inscription',{name:'insertParentsForm'});
Router.route('/inscriptionenfant',{name:'insertEnfantsForm'});
Router.route('/updateparent', {
  name:'updateParentsForm',
  data: function(){ return Parents.findOne({createdBy: Meteor.userId()});}
});

