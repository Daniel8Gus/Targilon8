const Article = require('../models/article')

const createArticle = async (title, published) => {
    const article = new Article({ title: title })
    if (published) article.published = published
    return await article.save()
}

const getArticleById = async (id) => { return await Article.findById(id) }

const getArticles = async () => { return await Article.find({}) }

const updateArticle = async (id, title) => {
    const article = await getArticleById(id)
    if(!article) return null
    article.title = title
    await article.save()
    return article
}

const deleteArticle = async (id) => {
    const article = await getArticleById(id)
    if(!article) return null
    await article.deleteOne()
    return article
} 

module.exports = { createArticle, getArticles, getArticleById, updateArticle, deleteArticle }