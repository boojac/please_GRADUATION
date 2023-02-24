var express = require('express');
var router = express.Router();

const {
    addClass,
    updateClass,
    delClass,
} = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const loginCheck = require('../middleware/loginCheck')


/* 添加目录分类 */
router.post('/add', (req, res, next) => {
    // req.body.author = req.session.username
    const result = addClass(req.body)
    return result.then(data => {
        res.json(
            new SuccessModel(data)
        )
    })
});


/* 更新目录分类 */
router.post('/update', (req, res, next) => {
    const result = updateClass(req.query.id, req.body)
    return result.then(val => {
        if (val) {
            res.json(
                new SuccessModel()
            )
        } else {
            res.json(
                new ErrorModel('更新目录失败')
            )
        }
    })
})

/* 删除目录分类 */

router.post('/del', (req, res, next) => {
    // const author = req.session.username

    const result = delClass(req.query.id)
    return result.then(val => {
        if (val) {
            res.json(
                new SuccessModel()
            )
        } else {
            res.json(
                new ErrorModel('删除目录失败')
            )
        }
    })
})


/* 分类列表（平铺） */
router.get('/list', function(req, res, next) {
    res.json({

    })
});




module.exports = router;
