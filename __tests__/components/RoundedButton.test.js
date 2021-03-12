import React from 'react'
import { shallow } from 'enzyme'
import RoundedButton from '../../src/components/RoundedButton'

describe('RoundedButton', () => {
  it('Render default button', () => {
    const button = shallow(<RoundedButton title="default button" />)
    expect(button).toMatchSnapshot()
  })

  it('Render default button onPress', () => {
    const mockOnPress = jest.fn()
    const button = shallow(
      <RoundedButton title="default button" onPressHandler={mockOnPress} />
    )
    expect(button).toMatchSnapshot()

    const component = button.first().props()
    component.onPress()
    expect(mockOnPress).toHaveBeenCalled()
    expect(mockOnPress).toHaveBeenCalledTimes(1)
  })

  it('Render outline button', () => {
    const button = shallow(
      <RoundedButton title="default button" type="outline" />
    )
    expect(button).toMatchSnapshot()
  })

  it('Render flat button', () => {
    const button = shallow(<RoundedButton title="default button" type="flat" />)
    expect(button).toMatchSnapshot()
  })

  it('Render button disabled', () => {
    const button = shallow(
      <RoundedButton title="disabled button" disabled={true} />
    )
    expect(button).toMatchSnapshot()
  })
})
