import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <nav className='header'>
                <h1 className='title'>
                    <Link className='NewsFeed' to='/'>NewsFeed</Link>
                </h1>
                <section className='Nav'>
                    <Link to='/'>Home</Link>
                    {/* <Link to='/news'>News</Link> */}
                    <Link to='/mynews'>My News</Link>
                </section>
            </nav>
        )
    }
}