import React from 'react'
import { Component } from 'react';
import ApiContext from '../ApiContext';
import config from '../config'
import TabForm from '../TabForm/TabForm';
import TabName from '../TabName/TabName';
import './AddTab.css'

export default class AddTab extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            name: '',
            nameValid: '',
            validationMessage: ''
        }
    }

    static contextType = ApiContext;

    isNameValid = (e) => {
        e.preventDefault();
        if(!this.state.name) {
            this.setState({
                validationMessage: `Tab name can not be blank`,
                nameValid: false
            });
        } else {
            this.setState({
                validationMessage: '',
                nameValid: false
            })
            this.handleSubmit()
        }
    }

    handleSubmit = (e) => {
        fetch(`${config.API_ENDPOINT}/tabs`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ name: this.state.name })
        })
        .then(res => {
            if(!res.ok) {
                throw new Error('Something went wrong');
            }
            return res
        })
        .then(res => res.json())
        .then(tab => {
            this.context.addTab(tab)
            this.props.history.push('/mynews')
        })
        .catch(error => {
            console.error({ error })
            this.setState({ error: error.message })
        })
    }

    nameChange = letter => {
        this.setState({ name: letter })
    }

    render() {
        const { tabs=[] } = this.context
        return (
            <section className='AddTab'>
                <h2 className='AddTab__title'>Create New Tab</h2>
                <TabForm onSubmit={e => {this.isNameValid(e)}}>
                    <section className='field'>
                        <label htmlFor='tab-name-input'>
                            Name
                        </label>
                        <input type='text' id='tab-name-input' name='tab-name' onChange={e => this.nameChange(e.target.value)}/>
                        {!this.state.nameValid && (
                            <section>
                                <p>{this.state.validationMessage}</p>
                            </section>
                        )}
                    </section>
                    <section className='button'>
                        <button type='submit'>
                            Create Tab
                        </button>
                    </section>
                </TabForm>
                <ul className='EditTabs__ul'>
                    {tabs.map(tab =>
                        <li className='EditTabs__li' key={tab.id} value={tab.id}>
                            <TabName 
                                id={tab.id}
                                name={tab.name}
                            />
                        </li>)}
                </ul>
                <button className='Back-button' onClick={() => this.props.history.goBack()}>
                    Back
                </button>
            </section>
        )
    }
}