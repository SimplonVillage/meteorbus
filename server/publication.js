Meteor.publish('parent',function() {
  return Parents.find();
});

Meteor.publish('enfant',function() {
  return Enfants.find();
});
