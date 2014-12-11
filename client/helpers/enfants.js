Meteor.subscribe('enfant');

Template.insertEnfantsForm.events({
  'submit form': function(e){
    e.preventDefault();
    Router.go('home');
  }
});