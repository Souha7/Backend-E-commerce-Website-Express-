const MySqli = require ( 'mysqli' );

let conn = new MySqli ({

    host: 'localhost',
    port: '3308',
    user:'Souha',
    password:'Souha123',
    database:'souha_shop'
})

let db = conn.emit(false,'');

module.exports = {

    database: db
};