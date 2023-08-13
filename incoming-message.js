exports.handler = function(context, event, callback) {
    // This function is an example of how to write a handler function using Twilio's api.
    // In this case, the handler simply replies to the incoming message with a message response, and returning a json.
    console.log(`Incoming message: ${event.Body}`);
  
    // Here's an example of setting up some TWiML to respond to with this function.
    const twiml = new Twilio.twiml.MessagingResponse();
    twiml.message("Thanks for your submission!");
    console.log(`TwiML was ${twiml}`);
  
    // This callback is what is returned in response to this function being invoked.
    // It's really important! E.g. you might respond with TWiML here for a voice or SMS response.
    // Or you might return JSON data to a studio flow. Don't forget it!
    return callback(null, twiml);
};