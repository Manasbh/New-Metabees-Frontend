import { useState } from 'react'
import axios from 'axios'
import styles from './styles.module.css'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const url = `https://web-production-5ee8.up.railway.app/auth/forgot-password`
      const { data } = await axios.post(url, { email })
      setMsg(data.message)
      setError('')
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message)
        setMsg('')
      }
    }
  }

  return (
    <div className={styles.forgotpasscontainer}>
      <form className={styles.forgotpassform_container} onSubmit={handleSubmit}>
        <h1>Forgot Password</h1>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          className={styles.forgotpassinput}
        />
        {error && <div className={styles.forgotpasserror_msg}>{error}</div>}
        {msg && <div className={styles.forgotpasssuccess_msg}>{msg}</div>}
        <button type="submit" className={styles.forgotpasspurple_btn}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default ForgotPassword
