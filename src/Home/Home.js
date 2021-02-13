import React, { Component } from 'react'
import './Home.css'

import ApiContext from '../ApiContext'

export default class Home extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    
    static contextType = ApiContext

    render() {
        return (
            <section className='home'>
                <h2 className='welcome__title'>Welcome</h2>
                <p className='welcome__message'>Welcome to NewsFeed where you can add Tabs
                and display news containing the name of the Tabs.
                I created this website to make searching news a
                little bit easier. Instead of having different tabs
                in your browser where you could get different articles
                or blogs, NewsFeed will only show you news and you
                can go back and forward from tha Tabs that you created
                from the drop down.</p>
            </section>
        )
    }
}