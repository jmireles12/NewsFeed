import React, { Component } from 'react'
import ApiContext from '../ApiContext'
import TabName from '../TabName/TabName'

export default class EditTabs extends Component {
    
    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = ApiContext;

    render() {
        const { tabs=[] } = this.context
        return (
            <section className='EditTabs'>
                <ul className='EditTabs__ul'>
                    {tabs.map(tab =>
                        <li className='EditTabs__li' key={tab.id} value={tab.id}>
                            <TabName 
                                id={tab.id}
                                name={tab.name}
                            />
                        </li>)}
                </ul>
                
            </section>
        )
    }
}