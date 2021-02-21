import React, { Component } from 'react'
import ApiContext from '../ApiContext'
import Articles from '../Articles/Articles'
import Tabs from '../Tabs/Tabs'
import './MyNews.css'

export default class MyNews extends Component {

    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = ApiContext;


    render() {
        const { news=[] } = this.context
        return (
            <section>
                <Tabs />
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