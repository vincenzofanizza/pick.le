// Simple code to explore Twilio's api.
// Note that Twilio's account credentials are required to use the client.
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

async function deleteAllMessages() {
    // Deletes all account's messages with a warning.
    const messages = await client.messages.list();

    for (message of messages) {
        console.warn(`Deleting ${message.sid}`);
        message.remove();
    }
}

// Show properties of JavaScript async programming.
console.log('Deleting messages...')
deleteAllMessages()
    .then(() => console.log('DONE'))
    .catch(err => console.error(err));  // NOTE: catch() allows to print any error that occurred in the async function.
