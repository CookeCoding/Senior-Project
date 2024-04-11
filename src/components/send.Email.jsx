const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.sendEmailNotification = functions.firestore.document('waitlist/{waitlistId}')
  .onCreate((snap, context) => {
    const data = snap.data();
    const email = data.email;
    const furniture = data.selectedFurniture;
    const color = data.selectedColor;

    const subject = 'Waitlist Confirmation';
    const text = `Thank you for joining the waitlist!\n\nYou have selected ${furniture} in ${color}.\n\nWe will notify you once it's available.`;

    return admin.auth().getUserByEmail(email)
      .then((user) => {
        const uid = user.uid;
        return admin.auth().sendEmailVerification(uid, { url: 'https://your-app-url.com' });
      })
      .then(() => {
        console.log(`Email sent to ${email}`);
      })
      .catch((error) => {
        console.log(`Error sending email to ${email}: ${error}`);
      });
  });
