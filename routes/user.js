var express = require('express');
var router = express.Router();

// 注册
router.get('/register', function(req, res, next) {

});

//登录
router.post('/login', function(req, res, next) {
    const { username, password } = req.body
    res.json({
        errno: 0,
        data: {
            username,
            password
        }
    })
});

//登出
router.get('/logout', function(req, res, next) {

});

//管理员登录
router.get('/adminLogin', function(req, res, next) {

});

module.exports = router;
