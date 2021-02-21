import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AddTab from './AddTab'

describe(`AddTab component`, () => {
    it('renders the complete addtab', () => {
        const wrapper = shallow(<AddTab />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})