import React from 'react'
import renderer from 'react-test-renderer'
import ContactItem from '../../src/components/ContactItem'

describe('ContactItem', () => {
  it('Render default', () => {
    const component = renderer.create(<ContactItem />)
    const tree = component.toJSON()
    expect(tree).toEqual(null)
  })

  it('Render', () => {
    const user = { nickName: 'UserName', email: 'test@test.com' }
    const component = renderer.create(<ContactItem user={user} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
