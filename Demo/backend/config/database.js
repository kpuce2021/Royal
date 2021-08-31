const mysql = require('mysql');
const db_info = {
    host: 'database-1.cu4l9m7ygyls.ap-northeast-2.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: 'abc123456',
    database: 'hello_pt',
    multipleStatements: true
}

module.exports = {
    init: function () {
        return mysql.createConnection(db_info);
    },
    connect: function(conn) {
        conn.connect(function(err) {
            if(err) console.error('mysql connection error : ' + err);
            else console.log('mysql is connected successfully!');
        });
    }
}