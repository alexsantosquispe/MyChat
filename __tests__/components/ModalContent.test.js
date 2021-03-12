import React from 'react'
import { shallow } from 'enzyme'
import ModalContent from '../../src/components/ModalContent'

describe('Modal', () => {
  it('Modal default render', () => {
    const modal = shallow(<ModalContent visibility={false} success={true} />)
    expect(modal).toMatchSnapshot()
  })

  it('Modal loading', () => {
    const modal = shallow(<ModalContent visibility={false} loading={true} />)
    expect(modal).toMatchSnapshot()
  })

  it('Modal error', () => {
    const modal = shallow(<ModalContent visibility={false} success={false} />)
    expect(modal).toMatchSnapshot()
  })

  it('Modal error with buttons', () => {
    const mockPositiveAction = jest.fn()
    const mockNegativeAction = jest.fn()
    const modal = shallow(
      <ModalContent
        visibility={false}
        success={false}
        type="error"
        negativeButtonTitle="No"
        positiveButtonTitle="Yes"
        negativeAction={mockNegativeAction}
        positiveAction={mockPositiveAction}
      />
    )
    expect(modal).toMatchSnapshot()

    const buttons = modal.find('RoundedButton')
    expect(buttons.length).toEqual(2)

    const negativeButton = buttons.at(0).props()
    const positiveButton = buttons.at(1).props()
    negativeButton.onPressHandler()
    positiveButton.onPressHandler()
    expect(mockPositiveAction).toHaveBeenCalled()
    expect(mockPositiveAction).toHaveBeenCalled()
    expect(mockPositiveAction).toHaveBeenCalledTimes(1)
    expect(mockPositiveAction).toHaveBeenCalledTimes(1)
  })
})
