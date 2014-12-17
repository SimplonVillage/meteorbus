 // server/smtp.js
 Meteor.startup(function () {
   // smtp = {
   //   username: 'your_username',   // eg: server@gentlenode.com
   //   password: 'your_password',   // eg: 3eeP1gtizk5eziohfervU
   //   server:   'smtp.gmail.com',  // eg: mail.gandi.net
   //   port: 25
   // }

   //process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
   process.env.MAIL_URL = 'smtp://postmaster%40sandbox92263dd139194b3fb953178ae8927d7d.mailgun.org:2090a2aa2b6e972534e532786161cccb@smtp.mailgun.org:587';
   // By default, the email is sent from no-reply@meteor.com. If you wish to receive email from users asking for help with their account, be sure to set this to an email address that you can receive email at.
   Accounts.emailTemplates.from = 'Wild Code School <no-reply@wildcodeschool.fr>';

   // The public name of your application. Defaults to the DNS name of the application (eg: awesome.meteor.com).
   Accounts.emailTemplates.siteName = 'Wild Code School';

   // A Function that takes a user object and returns a String for the subject line of the email.
   Accounts.emailTemplates.verifyEmail.subject = function(user) {
     return 'Confirmez votre adresse email';
   };

   // A Function that takes a user object and a url, and returns the body text for the email.
   // Note: if you need to return HTML instead, use Accounts.emailTemplates.verifyEmail.html
   Accounts.emailTemplates.verifyEmail.text = function(user, url) {
     return 'Veuillez cliquer sur ce lien pour vérifier votre email: ' + url;
   };
 });

 // (server-side)
 Accounts.onCreateUser(function(options, user) {
   user.profile = {};

   // we wait for Meteor to create the user before sending an email
   Meteor.setTimeout(function() {
     Accounts.sendVerificationEmail(user._id);
   }, 2 * 1000);

   return user;
 });

 // (server-side) called whenever a login is attempted
 Accounts.validateLoginAttempt(function(attempt){
   if (attempt.user && attempt.user.emails && !attempt.user.emails[0].verified ) {
     console.log('email not verified');

     return false; // the login is aborted
   }
   return true;
}); 