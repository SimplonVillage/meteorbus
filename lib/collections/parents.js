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
}));

Parents.allow({
  insert: function (userId, doc) {

    return (!!userId);
  },
  fetch: ['owner']
})