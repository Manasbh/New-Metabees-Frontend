import { useState, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import styles from './styles.module.css'

const PasswordReset = () => {
  const [validUrl, setValidUrl] = useState(true)
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')
  const [error, setError] = useState('')
  const param = useParams()
  const url = `${process.env.BACKEND_URL}/auth/reset-password/${param.id}/${param.token}`

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post(url, { password })
      setMsg(data.message)
      setError('')
      window.location = '/login'
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message)
        setMsg('')
        setValidUrl(false)
      }
    }
  }

  return (
    <Fragment>
      {validUrl ? (
        <div className={styles.passresetcontainer}>
          <form
            className={styles.passresetform_container}
            onSubmit={handleSubmit}
          >
            <h1>Add New Password</h1>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              className={styles.passresetinput}
            />
            {error && <div className={styles.passreseterror_msg}>{error}</div>}
            {msg && <div className={styles.passresetsuccess_msg}>{msg}</div>}
            <button type="submit" className={styles.passresetgreen_btn}>
              Submit
            </button>
          </form>
        </div>
      ) : (
        <h1>404 Not Found</h1>
      )}
    </Fragment>
  )
}

export default PasswordReset
