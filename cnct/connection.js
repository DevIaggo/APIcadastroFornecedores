import dotenv from 'dotenv'
dotenv.config({ path: './process.env' })

const connectBd= {

    server: process.env.DATABASE_SERVER,
    database: process.env.DATABASE_BD,
    user: process.env.DATABASE_USERSA,
    password: process.env.DATABASE_PASS,
    port: 1433,
    options: {
        encrypt: false
    }
};
function GetConect() {
    return connectBd;
}
export default {
    GetConect
}
