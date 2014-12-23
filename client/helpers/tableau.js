Meteor.subscribe('tableau');

Template.tableau.events({
  'click a': function(target, item) {
    alert('you clicked:' + item.insertParentsForm + ''+item.insertEnfantsForm);
  }
    
});