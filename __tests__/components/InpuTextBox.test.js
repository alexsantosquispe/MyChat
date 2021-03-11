import React from 'react'
import { shallow } from 'enzyme'
import InputTextBox from '../../src/components/InputTextBox'

describe('InputTextBox', () => {
  it('Render default', () => {
    const component = shallow(<InputTextBox />)
    expect(component).toMatchSnapshot()
  })

  it('Render with props', () => {
    const onChangeTextMock = jest.fn()
    const component = shallow(
      <InputTextBox
        icon="mail"
        placeholder="Enter email"
        value="text entered"
        onChangeHandler={onChangeTextMock}
      />
    )
    expect(component).toMatchSnapshot()
  })

  it('Render with props for password', () => {
    const onChangeTextMock = jest.fn()
    const component = shallow(
      <InputTextBox
        icon="mail"
        placeholder="Password"
        secureTextEntry={true}
        secureIcon={true}
        value="123"
        onChangeHandler={onChangeTextMock}
      />
    )

    // On click icon to show/hide password
    const inputTextBoxRow = component.first().props().children[0].props
    const secureIcon = inputTextBoxRow.children[2].props
    secureIcon.onPress()
    expect(component).toMatchSnapshot()
  })

  it('Render validation', () => {
    const onChangeTextMock = jest.fn()
    const component1 = shallow(
      <InputTextBox
        icon="mail"
        value="123"
        isValid={true}
        onChangeHandler={onChangeTextMock}
      />
    )
    const component2 = shallow(
      <InputTextBox
        icon="mail"
        value="123"
        isValid={false}
        errorMessage="error"
        onChangeHandler={onChangeTextMock}
      />
    )

    expect(component1).toMatchSnapshot()
    expect(component2).toMatchSnapshot()
  })
})
