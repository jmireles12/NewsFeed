import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import EditTabs from './EditTabs'

describe(`EditTabs component`, () => {
    it('renders the complete EditTabs', () => {
        const wrapper = shallow(<EditTabs />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})