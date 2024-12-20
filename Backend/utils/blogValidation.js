const validator = require('validator');

const validateCreateBlogData = (req) => {
    // required fields -> title, content
    const {title, content, thumbnail, visibility, tags} = req.body;
    if(!title || !content || !tags) {
        throw new Error("Title, content or tags cannot be empty");
    }
    else if(title.length < 10 || title.length > 50) {
        throw new Error("Title length is invalid, it should be in between 10-50")
    }
    else if(content.length < 1 || content.length > 5000) {
        throw new Error("Content length should be in between 1-5000 range")
    }
    else if(thumbnail && !validator.isURL(thumbnail)) {
        throw new Error("Thumbnail url is not valid");
    }
    else if (visibility && !["locked", "unlocked"].includes(visibility.trim())) {
        throw new Error('Visibility is invalid. It must be either "locked" or "unlocked".');
    }
    else if(tags.length > 5) {
        throw new Error("Maximum tags allowed : 5");
    }
}

const validateCommentData = (req) => {
    const {message} = req.body;
    if(!message) {
        throw new Error("Comment cannot be empty");
    }
    else if(message.length < 1 || message.length > 100) {
        throw new Error("Comment length is invalid, it is in between 1-100");
    }
}

module.exports = {validateCreateBlogData, validateCommentData}