import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ApiContext from '../ApiContext'
import 'react-tabs/style/react-tabs.css'
import './Tabs.css'

export default class Tabs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '1'
        }
    }

    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = ApiContext;


    handleChange = (e) => {
        let queryValue = '&q=' + e.target.value
        this.context.addQueryValue(queryValue)
        this.context.fetchData(queryValue)
        this.setState({ value: e.target.value})
    }


    render() {
        const { tabs=[] } = this.context
        return (
            <section className='Filter'>
                <select className='dropdown' value={this.state.value} name='filter-list' onChange={this.handleChange}>
                    <option value='1' disabled>...</option>
                    {tabs.map(tab =>
                        <option key={tab.id} value={tab.name}>
                            {tab.name}
                        </option>)}
                </select>
                <Link to='/add-tab'>
                    <button className='edit__button'>
                        Edit/Add
                    </button>    
                </Link>
            </section>
        )
    }
}
  
