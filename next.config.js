module.exports = {
    env: {
        BASE_API_URL: process.env.BASE_API_URL || "http://localhost:3000/api/v1/",
        MONGODB_URI: process.env.MONGODB_URI || "MONGO_LOCAL_URI",
        JWT_KEY: process.env.JWT_KEY || "superSeNhASegura2021Pog"
    },
};

