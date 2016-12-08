import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { mount } from 'enzyme'
import WagerSlider from './WagerSlider'

const muiTheme = getMuiTheme()

it('has default value of 100', () => {
	const wrapper = mount(<WagerSlider />, {
    	context: {muiTheme},
    	childContextTypes: {muiTheme: React.PropTypes.object}
    })

	console.log(wrapper)

	expect(wrapper.first().props().defaultValue).toEqual(100)
})