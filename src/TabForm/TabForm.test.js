import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import TabForm from './TabForm'

describe(`TabForm component`, () => {
    it('renders the complete TabForm', () => {
        const wrapper = shallow(<TabForm />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})