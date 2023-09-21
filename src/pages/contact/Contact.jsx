import Axios from 'axios'
import bgVideo from '../../assets/PageBackgrounds/viewBg.mp4'
import './Contact.css'

export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault()
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value

    Axios.post('https://web-production-5ee8.up.railway.app/contact', {
      name: name,
      email: email,
      message: message,
    })
      .then((response) => {
        if (response.status === 201) {
          window.alert('Query submitted successfully!')
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <>
      <video autoPlay loop muted className="view-video-background">
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="contact-form-container">
        <div className="contact-form=container"></div>
        <form className="contact-form">
          <input
            id="name"
            className="contact-input"
            type="text"
            placeholder="Name"
          />
          <input
            id="email"
            className="contact-input"
            type="text"
            placeholder="E-Mail"
          />
          <textarea
            id="message"
            className="contact-textarea"
            placeholder="Your Message..."
          ></textarea>
          <center>
            <button className="contact-button" onClick={(e) => onSubmit(e)}>
              Submit
            </button>
          </center>
        </form>
      </div>
    </>
  )
}
