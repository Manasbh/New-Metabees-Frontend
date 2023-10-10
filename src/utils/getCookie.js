import jwtDecode from 'jwt-decode';

export function getCookieByName(name) {
  const pattern = RegExp(name + '=.[^;]*');
  const matched = document.cookie.match(pattern);
  if (matched) {
    const cookie = matched[0].split('=');
    return cookie[1];
  }
  return null;
}

export function getCookieInfo() {
  try {
    const token = getCookieByName('aToken');
    if (token) {
      const decodedToken = jwtDecode(token);
      return decodedToken.id; // Make sure 'id' contains user information
    } else {
      // Handle the case where the 'aToken' cookie is missing
      console.error("JWT token not found in the cookie.");
      return null; // Return null or another appropriate value
    }
  } catch (error) {
    console.error("Error decoding JWT token:", error);
    return null; // Return null or another appropriate value if an error occurs
  }
}

export function delete_cookie(name) {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
