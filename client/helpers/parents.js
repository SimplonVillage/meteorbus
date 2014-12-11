Meteor.subscribe('parent');

Template.insertParentsForm.events({
  'submit form': function(e){
    e.preventDefault();
    Router.go('insertEnfantsForm');
  }
});

Template.updateParentsForm.events({
  'submit form': function(e){
    e.preventDefault();
    Router.go('home');
  }
});