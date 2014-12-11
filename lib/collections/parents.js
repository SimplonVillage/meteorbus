Parents = new Mongo.Collection("parents");
Parents.attachSchema(new SimpleSchema({
  nom: {
    type: String,
    label: "Nom",
    max: 200
  },
  prenom: {
    type: String,
    label: "Prenom",
  },
  adresse: {
    type: String,
    label: "Adresse",
  },
  telephone: {
    type: String,
    label: "Telephone",
  },
  createdBy: {
    type: String,
    autoValue: function(){ return this.userId },
    unique:true
  }
}));

Parents.allow({
  insert: function (userId, doc) {

    return !! userId;
  },
  update: function (userId, doc) {

    return !! userId;
  }
})