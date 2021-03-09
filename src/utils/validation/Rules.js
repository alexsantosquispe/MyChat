/**
 * Checks if the email has a valid format
 * @param {string} email - The text to be checked
 */
const isEmail = (email) => {
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/
  const isValid = email && typeof email === 'string' && regex.test(email)
  return !isValid
    ? { isValid, message: 'Enter a valid email address' }
    : { isValid }
}

/**
 * Validates if some string is not empty
 * @param {string} text
 */
const noEmpty = (text) => {
  const isValid = text && typeof text === 'string'
  return !isValid
    ? { isValid, message: 'This field cannot be empty' }
    : { isValid }
}

/**
 * Compares two strings
 * @param {string} value
 * @param {string} secondValue
 * @returns {Object} {isValid: true} or {isValid: false, message: 'some error message'}
 */
const isEqual = (value, secondValue) => {
  const isValid = value === secondValue
  return !isValid
    ? { isValid, message: 'The password is not the same' }
    : { isValid }
}

export const Rules = {
  email: isEmail,
  required: noEmpty,
  compare: isEqual
}
