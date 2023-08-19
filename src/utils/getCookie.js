import jwtDecode from 'jwt-decode'

export default function getCookieByName(name) {
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
    return decodedToken.id
  } catch (e) {}
  return false
}
