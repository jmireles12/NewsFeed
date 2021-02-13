import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h1 className='title'>
                    <Link className='NewsFeed' to='/'>NewsFeed</Link>
                </h1>
                <div className='Nav'>
                    <Link to='/'>Home</Link>
                    {/* <Link to='/news'>News</Link> */}
                    <Link to='/mynews'>My News</Link>
                </div>
            </div>
        )
    }
}