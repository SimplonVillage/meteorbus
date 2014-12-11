Template.home.helpers({
  parents: function(){
    return Parents.findOne({createdBy: Meteor.userId()});
  }
})

Template.home.helpers({
  enfants: function(){
    return Enfants.findOne({createdBy: Meteor.userId()});
  }
})