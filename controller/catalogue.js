const xss = require('xss')
const { exec } = require('../db/mysql')

// 添加目录分类
const addClass = (cataData = {}) => {
    // cataData 是一个博客对象，包含name type parent-id order-num 属性
    
    // console.log('title is', title)
    const name = xss(cataData.name)
    const type = cataData.type
    const parent_id = cataData.parent_id
    const order_num = cataData.order_num

    const createTime = Date.now()
    const sql = `
        insert into mall_category (name, type, parent_id, order_num, createtime)
        values ('${name}', '${type}','${parent_id}','${order_num}'${createTime});
    `

    return exec(sql).then(insertData => {
        // console.log('insertData is ', insertData)
        return {
            id: insertData.insertId
        }
    })
}

// 修改目录分类
const updateClass = (upCataData = {}) => {
    // upCata 是一个对象，包含id name type parent-id order-num 属性
    
    const id = upCataData.id
    const name = xss(upCataData.name)
    const type = upCataData.type
    const parent_id = upCataData.parent_id
    const order_num = upCataData.order_num

    const updateTime = Date.now()
    const sql = `
        update mall_category set name='${name}', set type='${type}', set parent_id='${parent_id}', order_num='${order_num}' set update='${updateTime}' 
        where id=${id}
    `

    return exec(sql).then(updateData => {
        // console.log('updateData is ', updateData)
        if (updateData.affectedRows > 0) {
            return true
        }
        return false
    })
}

// 删除目录分类
const delClass = (id) => {
    // id 就是要删除目录的 id
    const sql = `delete from mall_category where id='${id}';`
    return exec(sql).then(delData => {
        // console.log('delData is ', delData)
        if (delData.affectedRows > 0) {
            return true
        }
        return false
    })
}


module.exports = {
    addClass,
    updateClass,
    delClass,

}

// 除了这仨后台接口，还有两个分别来自前后台的列表展开