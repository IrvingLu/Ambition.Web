/*
 * @Author: your name
 * @Date: 2021-08-18 16:36:44
 * @LastEditTime: 2021-08-20 10:59:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\src\plugins\element.js
 */
import ElementPlus  from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'

export default (app) => {
  app.use(ElementPlus,{ locale })
}
