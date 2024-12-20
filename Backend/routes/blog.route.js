const express = require('express');
const { userAuth } = require('../middlewares/userAuth.middleware');
const {createBlog, clapBlog, addComment, editComment, deleteComment, deleteBlog, viewBlog} = require("../controllers/blog.controller")
const blogRouter = express.Router();


blogRouter.post('/createblog', userAuth, createBlog);
blogRouter.delete('/deleteblog/:blogId', userAuth, deleteBlog);
blogRouter.get('/@:username/:titleSlug', userAuth, viewBlog);
blogRouter.post('/clap/:blogId', userAuth, clapBlog);
blogRouter.post('/addcomment/:blogId', userAuth, addComment); 
blogRouter.patch('/editcomment/:commentId', userAuth, editComment); 
blogRouter.delete('/deletecomment/:blogId/:commentId', userAuth, deleteComment); 

module.exports = {blogRouter};