import React from 'react'
import { shallow } from 'enzyme'
import TouchableItem from '../../src/components/TouchableItem'

describe('TouchableItem', () => {
  it('Render default', () => {
    const touchableItem = shallow(<TouchableItem />)
    expect(touchableItem).toMatchSnapshot()
  })

  it('Render with props', () => {
    const mockOnPressHandler = jest.fn()
    const touchableItem = shallow(
      <TouchableItem title="item" onPressHandler={mockOnPressHandler} />
    )
    expect(touchableItem).toMatchSnapshot()
    touchableItem.first().props().onPress()
    expect(mockOnPressHandler).toHaveBeenCalled()
    expect(mockOnPressHandler).toHaveBeenCalledTimes(1)
  })
})
