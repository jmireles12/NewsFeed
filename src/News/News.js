import React, { Component } from 'react'
import ApiContext from '../ApiContext'
import Articles from '../Articles/Articles'
import './News.css'

export default class News extends Component {

    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = ApiContext;

    render() {
        const { news=[] } = this.context
        return (
            <section className='headlines'>
                <ul className='headline-list'>
                    {news.map(article =>
                        <li className='headline__li' key={article.id}>
                            <Articles
                                id={article.id}
                                title={article.fields.headline}
                                body={article.fields.bodyText}
                                publication={article.webPublicationDate}
                                url={article.webUrl}
                                thumbnail={article.fields.thumbnail}
                            />
                        </li>)}
                </ul>
            </section>
        )
    }
}