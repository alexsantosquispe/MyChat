import { Rules } from './Rules'

export const validate = (value, rules) => {
  let response = {
    isValid: false,
    message: 'This field cannot be empty'
  }

  if (value && Array.isArray(rules)) {
    rules.some((ruleName) => {
      response = Rules[ruleName](value)
      return !response.isValid
    })
  }

  return response
}
