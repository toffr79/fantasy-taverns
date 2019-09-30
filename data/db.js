const sql = require('mssql');
const config = {
    user: process.env.db_user,
    password: process.env.db_password,
    server: process.env.db_server,
    database: process.env.db_name,
};

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then((pool) => {
        console.log('Connected to MSSQL');
        return pool;
    })
    .catch((err) =>
        console.log('Database Connection Failed! Bad Config: ', err),
    );

module.exports = {
    sql,
    poolPromise,
};
