import { useState } from 'react'
import './waitlist.css'
import axios from 'axios'

export default function Waitlist() {
  const [isModalOpen, setModalOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const onSubmit = async () => {
    if (!name || !email) {
      alert('Please fill all the fields')
      return
    }

    try {
      await axios.post(
        `http://ec2-13-228-183-209.ap-southeast-1.compute.amazonaws.com:5000/waitlist`,
        {
          email: email,
          name: name,
        },
        { withCredentials: true }
      )
      setName('')
      setEmail('')
      setModalOpen(true)
      setTimeout(() => {
        setModalOpen(false)
      }, 10000)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="waitlist-bg">
      <div>
        <form className="waitlist-form">
          <div className="waitlist-form-title">
            <span>Apply for </span>
          </div>
          <div className="waitlist-title-2">
            <span>BETA</span>
          </div>
          <div className="waitlist-input-container">
            <input
              className="waitlist-input-mail"
              value={name}
              name="name"
              type="text"
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
            <span> </span>
          </div>

          <section className="waitlist-bg-stars">
            <span className="waitlist-star"></span>
            <span className="waitlist-star"></span>
            <span className="waitlist-star"></span>
            <span className="waitlist-star"></span>
          </section>

          <div className="waitlist-input-container">
            <input
              className="waitlist-input-pwd"
              value={email}
              name="email"
              type="e-mail"
              placeholder="Enter e-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="button" className="waitlist-submit" onClick={onSubmit}>
            <span className="sign-text">Join waitlist</span>
          </button>
        </form>
        {isModalOpen && (
          <div className="waitlist-modal" id="modal">
            <div className="waitlist-card">
              <div className="waitlist-card-content">
                <p className="waitlist-card-title">🏆Congrats🏆</p>
                <p className="waitlist-card-para">
                  You have successfully applied for the waitlist.Keep an eye on
                  yor email for further updates
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
