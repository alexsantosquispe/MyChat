import React from 'react'
import { shallow } from 'enzyme'
import LinkText from '../../src/components/LinkText'

describe('LinkText', () => {
  it('Render default', () => {
    const component = shallow(<LinkText />)
    expect(component).toMatchSnapshot()
  })

  it('Render with props', () => {
    const onPressHandlerMock = jest.fn()
    const component = shallow(
      <LinkText label="labelTest" onPressHandler={onPressHandlerMock} />
    )
    expect(component).toMatchSnapshot()

    component.first().props().onPress()
    expect(onPressHandlerMock).toHaveBeenCalled()
    expect(onPressHandlerMock).toHaveBeenCalledTimes(1)
  })
})
