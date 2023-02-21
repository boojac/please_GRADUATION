var express = require('express');
var router = express.Router();

/* 添加目录分类 */
router.get('/add', function(req, res, next) {
    res.json({
        errno:0,
        data:[1,2,3]
    })
});

/* 更新目录分类 */
router.get('/update', function(req, res, next) {
    res.json({

    })
});

/* 删除目录分类 */
router.get('/delete', function(req, res, next) {
    res.json({

    })
});

/* 分类列表（平铺） */
router.get('/list', function(req, res, next) {
    res.json({

    })
});




module.exports = router;
