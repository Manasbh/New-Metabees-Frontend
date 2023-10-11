import jwtDecode from 'jwt-decode'

export function getCookieByName(name) {
  const pattern = RegExp(name + '=.[^;]*')
  const matched = document.cookie.match(pattern)
  if (matched) {
    const cookie = matched[0].split('=')
    return cookie[1]
  }
  return null
}

export function getCookieInfo() {
  try {
    let token = getCookieByName('aToken')
    const decodedToken = jwtDecode(token)
    localStorage.setItem('userId', decodedToken.id)
    return decodedToken.id
  } catch (e) {}
  return false
}

export function delete_cookie(name) {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
}
