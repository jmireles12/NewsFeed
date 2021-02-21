import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import MyNews from './MyNews'

describe(`MyNews component`, () => {
    it('renders the complete MyNews', () => {
        const wrapper = shallow(<MyNews />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})