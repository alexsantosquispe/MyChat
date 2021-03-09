import { Rules } from './Rules'

/**
 * Validates a text with an array of rules
 * @param {array} rules - Array od rules to validate
 * @param {string} text - the value to be verified
 * @param {string} secondText - (optional)This is only to 'compare' validation with other text
 * @returns {object} {isValid: false/true, message: ''}
 */
export const validate = (rules, text, secondText = null) => {
  let response = {
    isValid: false,
    message: 'This field cannot be empty'
  }

  if (text && Array.isArray(rules)) {
    rules.some((ruleName) => {
      response = Rules[ruleName].apply(this, [text, secondText])
      return !response.isValid
    })
  }

  return response
}
