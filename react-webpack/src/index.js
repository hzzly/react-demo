import React from 'react'
import ReactDom from 'react-dom'
import CommentBox from './CommentBox'

import './assets/style.css'

//测试数据 放到 json 文件里
// let comments = [
// 	{author: 'hzzly', date: '5 分钟前', text: 'this is a comment'},
// 	{author: 'hzzly2', date: '2 分钟前',  text: '哈哈哈哈'}
// ]

ReactDom.render(
    // <CommentBox comments={comments}/>,
    <CommentBox url='/src/comment.json'/>,
    document.getElementById('app')
)