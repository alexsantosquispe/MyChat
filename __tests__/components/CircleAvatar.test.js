import React from 'react'
import renderer from 'react-test-renderer'
import CircleAvatar from '../../src/components/CircleAvatar'

describe('Circle Avatar', () => {
  it('Render', () => {
    const component = renderer.create(<CircleAvatar />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Render circle letter', () => {
    const component = renderer.create(<CircleAvatar username="John" />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Render image', () => {
    const component = renderer.create(<CircleAvatar imageSrc={true} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
