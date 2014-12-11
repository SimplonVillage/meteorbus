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
    type: Object
  },
  'adresse.rue': {
    type: String
  },
  'adresse.codePostal': {
    type: String
  },
  'adresse.ville': {
    type: String
  },
  telephone: {
    type: Object
  },
  'telephone.domicile': {
    type: String
  },
  'telephone.travail': {
    type: String
  },
  'telephone.portable': {
    type: String
  },
  email: {
    type: String,
    label: "email",
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