import React from 'react'
import { View } from 'react-native'
import { shallow } from 'enzyme'
import DismissKeyboard from '../../src/components/DismissKeyboard'

describe('DismissKeyboard', () => {
  it('Render default', () => {
    const component = shallow(
      <DismissKeyboard>
        <View />
      </DismissKeyboard>
    )
    component.first().props().onPress()
    expect(component).toMatchSnapshot()
  })
})
