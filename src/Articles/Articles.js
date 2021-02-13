import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ApiContext from '../ApiContext'
import './Articles.css'

export default class Articles extends Component {

    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = ApiContext;

    render() {
        const { url, title, thumbnail } = this.props
        return (
            <section className='Article'>
                <img className='photo' src={thumbnail} alt='provided by Guardian.com'/>
                <h2 className='title'>
                    <Link to={{ pathname: url }} target='_blank'>{title}</Link>
                </h2>
            </section>
        )
    }
}