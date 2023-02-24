// 存储数据库配置
const env = process.env.NODE_ENV //环境参数

let MYSQL_CONF

if(env === 'dev') {
    MYSQL_CONF = {
        host:'localhost',
        user:'root',
        password:'admin111',
        port:'3306',
        database:'graduation_mall',
    }
}

if(env === 'production') {
    // 实际应该写服务器的配置，
    MYSQL_CONF = {
        host:'localhost',
        user:'root',
        password:'admin111',
        port:'3306',
        database:'graduation_mall',
    }
}

module.exports = {
    MYSQL_CONF
}
