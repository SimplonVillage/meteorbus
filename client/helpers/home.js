Template.home.helpers({
  parents: function(){
    return Parents.findOne({createdBy: Meteor.userId()});
  }
});

Template.home.helpers({
  enfants: function(){
    return Enfants.findOne({createdBy: Meteor.userId()});
  }
});

 Template.Homepage.created = function() {
   if (Accounts._verifyEmailToken) {
     Accounts.verifyEmail(Accounts._verifyEmailToken, function(err) {
       if (err != null) {
         if (err.message = 'Verify email link expired [403]') {
           console.log('Sorry this verification link has expired.')
         }
       } else {
         console.log('Thank you! Your email address has been confirmed.')
       }
     });
   }
 };