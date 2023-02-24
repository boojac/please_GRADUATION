const mysql = require ('mysql')

// 创建链接对象
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'admin111',
    port:'3306',
    database:'graduation_mall',
})

//开始连接

con.connect()

// 执行 sql 语句
const sql = 'select * from mall_user;'
con.query(sql, (err, result) => {
    if(err) {
        console.err(err)
        return
    }
    console.log(result)
})

//关闭连接

con.end()