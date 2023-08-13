# Pick.le 🥒

Pick.le is a webapp built as part of the [API for Beginners](https://www.freecodecamp.org/news/apis-for-beginners) course to test my initial understanding of REST APIs. 

The app allows the user to upload as many pics as they want and visualize them on a web page. The key part of the project is the handler function written in ```api/pics.js```, which takes the ```POST``` request submitted by the user, push all the media sent via message to the gallery, and returns a json object just like many web-based APIs.

The app is hosted using [Twilio](https://www.twilio.com), and the handler function is implemented using Twilio's API for SMS.

## Usage 

You can try the app by sending a pic to: ```+14706195406```. You should see it appearing at the following URL: https://pickle-5316.twil.io/index.html.
