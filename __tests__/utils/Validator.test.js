import { validate } from '../../src/utils/validation/Validator'

describe('Validate fields', () => {
  it('Validate', () => {
    const values = [
      { rules: [], text: {}, secondText: undefined, result: false },
      { rules: [], text: '', secondText: undefined, result: false },
      { rules: ['required'], text: '', secondText: undefined, result: false },
      { rules: ['email'], text: '', secondText: undefined, result: false },
      { rules: ['compare'], text: '', secondText: undefined, result: false },
      {
        rules: ['required', 'email'],
        text: 'test@test.com',
        secondText: undefined,
        result: true
      },
      {
        rules: ['required', 'compare'],
        text: 'test',
        secondText: null,
        result: false
      },
      {
        rules: ['required', 'compare'],
        text: 'stringtest',
        secondText: 'stringtest   ',
        result: false
      },
      {
        rules: ['required', 'compare'],
        text: 'stringtest',
        secondText: 'stringtest',
        result: true
      }
    ]
    values.forEach((element) => {
      expect(
        validate(element.rules, element.text, element.secondText).isValid
      ).toEqual(element.result)
    })
  })
})
