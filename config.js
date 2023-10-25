const DATABASE_URL =`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@blogproject.toollla.mongodb.net/blogprojectdb?retryWrites=true&w=majority&appName=AtlasApp`

// const DATABASE_URL =`mongodb+srv://aguirreoscar200413:project123@blogproject.toollla.mongodb.net/blogprojectdb?retryWrites=true&w=majority&appName=AtlasApp`

module.exports = {DATABASE_URL}