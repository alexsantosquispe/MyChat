const isEmail = (email) => {
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/
  const isValid = email && typeof email === 'string' && regex.test(email)
  return !isValid
    ? { isValid, message: 'Enter a valid email address' }
    : { isValid }
}

const noEmpty = (value) => {
  const isValid = value && typeof value === 'string'
  return !isValid
    ? { isValid, message: 'This field cannot be empty' }
    : { isValid }
}

const limitLong = (value) => {
  return value && max && value.length <= max
}

export const Rules = {
  email: isEmail,
  noEmpty: noEmpty,
  limit: limitLong
}
