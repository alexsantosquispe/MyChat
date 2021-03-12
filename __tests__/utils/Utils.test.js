import * as Utils from '../../src/utils'

describe('Generic Utils', () => {
  const palleteColors = [
    '#C70334',
    '#ff8800',
    '#d9aa00',
    '#00AC81',
    '#128cff',
    '#3c30db',
    '#e31ea1',
    '#004b73',
    '#573b01',
    '#78818a'
  ]
  it('GenerateNickName', () => {
    const emailsArr = ['testuser@test.com', '', 'fakeemail', null, undefined]
    const results = ['Testuser', '', 'Fakeemail', null, undefined]

    emailsArr.forEach((email, index) => {
      expect(Utils.generateNickName(email)).toEqual(results[index])
    })
  })

  it('UpperFirst', () => {
    const arrStrings = ['testing', 'a', null, undefined]
    const results = ['Testing', 'a', null, undefined]

    arrStrings.forEach((value, index) => {
      expect(Utils.upperFirst(value)).toEqual(results[index])
    })
  })

  it('GetRandomColor', () => {
    expect(palleteColors.includes(Utils.getRandomColor())).toEqual(true)
    expect(palleteColors.includes(Utils.getRandomColor())).toEqual(true)
    expect(palleteColors.includes(Utils.getRandomColor())).toEqual(true)
  })
})
