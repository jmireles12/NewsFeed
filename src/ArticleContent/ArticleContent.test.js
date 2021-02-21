import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ArticleContent from './ArticleContent'

describe(`ArticleContent component`, () => {
    it('renders the complete ArticleContent', () => {
        const wrapper = shallow(<ArticleContent />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})