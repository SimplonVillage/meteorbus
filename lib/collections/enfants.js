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
  matin: {
    type: Object
  },
  'matin.domicile': {
    type: String,
    allowedValues: ['Oui', 'Non'],
  },
  'matin.garderie': {
    type: String,
    allowedValues: ['Oui', 'Non'],
  },
  'matin.autre': {
    type: String,
    optional: true
  },
  midi: {
    type: Object
  },
  'midi.domicile': {
    type: String,
    allowedValues: ['Oui', 'Non'],
  },
  'midi.garderie': {
    type: String,
    allowedValues: ['Oui', 'Non'],
  },
  'midi.autre': {
    type: String,
    optional: true
  },
  arret: {
    type: String,
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