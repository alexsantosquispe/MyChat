const palleteColor = [
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

export const generateNickName = (email) => {
  if (email) {
    const arrUser = email.split('@')
    return `${upperFirst(arrUser[0])}`
  }
  return email
}

export const upperFirst = (str) => {
  let upperFirstLetter = str
  if (str && str.length > 1) {
    upperFirstLetter = str[0].toUpperCase() + str.substring(1)
  }
  return upperFirstLetter
}

export const getRandomColor = () => {
  const primaryColor = '#2663FF'
  try {
    const index = Math.floor(Math.random() * 10)
    return palleteColor[index]
  } catch (error) {
    console.log(error)
    return primaryColor
  }
}
