Template.home.helpers({
  parents: function(){
    return Parents.findOne({createdBy: Meteor.userId()});
  }
})