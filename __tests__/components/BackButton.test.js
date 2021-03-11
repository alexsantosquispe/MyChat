import React from 'react'
import renderer from 'react-test-renderer'
import BackButton from '../../src/components/BackButton'

describe('BackButton', () => {
  it('Render', () => {
    const component = renderer.create(<BackButton onPresHandler={() => {}} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
