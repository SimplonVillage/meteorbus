Meteor.publish('parent',function() {
  return Parents.find();
});