import { Rules } from '../../src/utils/validation/Rules'
describe('Rules of validation', () => {
  it('IsEmail', () => {
    const emails = [
      { value: '', result: false },
      { value: null, result: false },
      { value: undefined, result: false },
      { value: [], result: false },
      { value: {}, result: false },
      { value: 'notemail', result: false },
      { value: 'test.com', result: false },
      { value: 'test@test.com', result: true }
    ]

    emails.forEach((elem) => {
      expect(Rules.email(elem.value).isValid).toEqual(elem.result)
    })
  })

  it('NoEmpty', () => {
    const values = [
      { value: '', result: false },
      { value: null, result: false },
      { value: undefined, result: false },
      { value: [], result: false },
      { value: {}, result: false },
      { value: 'test', result: true }
    ]

    values.forEach((elem) => {
      expect(Rules.required(elem.value).isValid).toEqual(elem.result)
    })
  })

  it('IsEqual', () => {
    const strings = [
      { value: 'test', secondValue: 'test', result: true },
      { value: 'test', secondValue: 'test  ', result: false },
      { value: 1, secondValue: '1', result: false }
    ]

    strings.forEach((elem) => {
      expect(Rules.compare(elem.value, elem.secondValue).isValid).toEqual(
        elem.result
      )
    })
  })
})
