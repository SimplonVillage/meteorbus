Enfants = new Mongo.Collection("enfants");
Enfants.attachSchema(new SimpleSchema({
  nom: {
    type: String,
    label: "Nom",
    max: 200
  },
  prenom: {
    type: String,
    label: "Prenom",
  },
  ecole: {
    type: String,
    label: "Ecole",
  },
  classe: {
    type: String,
    label: "Classe",
  },
  createdBy: {
    type: String,
    autoValue: function(){ return this.userId },
    unique:true
  }
}));

Enfants.allow({
  insert: function (userId, doc) {

    return !! userId;
  },
  update: function (userId, doc) {

    return !! userId;
  }
})