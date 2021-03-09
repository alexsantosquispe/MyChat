export const generateNickName = (email) => {
  const currentTime = new Date().getTime()
  if (email) {
    const arrUser = email.split('@')
    return `${arrUser[0]}-${currentTime}`
  }
  return currentTime
}
