import React, { Component } from 'react'
import ApiContext from '../ApiContext'
import config from '../config'
import './TabName.css'


export default class TabName extends Component {

    static defaultProps = {
        handleDeleteTab: () => { },
        onDeleteTab: () => { },
        match: {
            params: {}
        }
    }

    static contextType = ApiContext

    handleDeleteTab = (e) => {
        const tabId = this.props.id
        fetch(`${config.API_ENDPOINT}/tabs/` + tabId, {
            method: 'DELETE',
            header: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tabId)
        })
            .then(res => {
                if(!res.ok) {
                    throw new Error(res.statusText)
                }
            })
            .then(res => {
                this.context.deleteTab(tabId)
            })
            .catch(error => {
                console.error(error)
            })
    }

    render() {
        const { name, id } = this.props
        return (
            <section className='TabName'>
                <h4 className='tab-name'>{name}</h4>
                <button
                    className='TabName__delete'
                    type='button'
                    onClick={() => {this.handleDeleteTab(id) }}
                >
                    x
                </button>
            </section>
        )
    }
}