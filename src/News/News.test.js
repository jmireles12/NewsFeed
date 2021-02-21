import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import News from './News'

describe(`News component`, () => {
    it('renders the complete News', () => {
        const wrapper = shallow(<News />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})