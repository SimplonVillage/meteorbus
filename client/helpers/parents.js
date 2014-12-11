Meteor.subscribe('parent');

Template.insertParentsForm.events({
  'submit form': function(e){
    e.preventDefault();
    Router.go('insertEnfantsForm');
  }
});