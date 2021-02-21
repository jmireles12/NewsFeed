import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Articles from './Articles'

describe(`Articles component`, () => {
    it('renders the complete Articles', () => {
        const wrapper = shallow(<Articles />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})