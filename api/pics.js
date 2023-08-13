exports.handler = async function(context, event, callback) {
    // This function is the actual api handler function.
    // Whenever a user sends a message to the Twilio number, the api allows the user to pose their images on the main webpage (see ../index.html).
    const client = context.getTwilioClient();
    const gallery = [];
    const messagges = await client.messagges.list({to: context.TWILIO_NUMBER});
    
    for (const message of messagges) {
        // Collect the media shared with each message.
        const pics = await message.media().list();

        // Save the pics to the gallery along with the message.
        for (const pic of pics) {
            gallery.push({
                src: "https://api.twilio.com" + pic.uri.replace(".json", ""),
                description: message.body,
                alt: message.body,
                thumbnailWidth: "200px"
            });
        }
    }

    return callback(null, gallery)
};