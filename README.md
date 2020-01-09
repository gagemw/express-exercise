# EXERCISE SUMMARY

Your goal is to connect the client to the server.
> When the client types into the input field: "dog/cat/ferret/duck" and clicks the find animal button it should update the client accordingly

You should not need to touch this /src folder if you do it *correctly.*

# WEBPACK WOES

If running the start script does not work for you try again with:
> webpack-dev-server --config ./webpack.config.js --mode development
>> Then go to localhost:8080 in your browser

If it continues to fail and you're on a Mac OS make sure you've installed Xcode:
> xcode-select --install

If it continues to fail globally install webpack, webpack-cli, and webpack-dev-server

## Extra Credit

- Account for case handling in the input field
- Create a post route to add animals to the DB
> Use postman to send the data to your server