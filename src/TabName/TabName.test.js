import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import TabName from './TabName'

describe(`TabName component`, () => {
    it('renders the complete TabName', () => {
        const wrapper = shallow(<TabName />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})