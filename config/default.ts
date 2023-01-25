
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS

export default{
    port : 3000,
    
    env: "development",
    dbUri: `mongodb+srv://${dbUser}:${dbPass}@cluster0.kafqu2p.mongodb.net/?retryWrites=true&w=majority`

}