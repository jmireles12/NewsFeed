import React, { Component } from 'react'
import ApiContext from '../ApiContext'
import Article from '../Articles/Articles'
import { findArticle } from '../news-helper'
import './ArticleContent.css'

export default class ArticleContent extends Component {
    
    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = ApiContext;
    render() {
        const { news=[] } = this.context
        const { articleId } = this.props.match.params
        const article = findArticle(news, articleId) || { body: '' }
        console.log(this.props.id)
        return (
            <section className='ArticleContent'>
                <Article
                    id={article.id}
                    name={article.name}
                />
                <div className='ArticleContent__content'>
                    {article.body.split(/\n \r|\n/).map((para, i) =>
                        <p key={i}>{para}</p>
                    )}
                </div>
            </section>
        )
    }
}