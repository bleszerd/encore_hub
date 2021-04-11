module.exports = {
    env: {
        BASE_API_URL: process.env.BASE_API_URL || "http://localhost:3000/api/v1/",
        MONGODB_URI: process.env.MONGODB_URI ||"mongodb+srv://bleszerd:senhasegura2@cluster0.jq6gi.mongodb.net/encore?retryWrites=true&w=majority",
    },
  };