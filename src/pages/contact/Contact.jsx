import { useNavigate } from 'react-router'
import bgVideo from '../../assets/homeBg.mp4'
import './Contact.css'

export default function Contact() {
  const navigate = useNavigate()
  const onSubmit = () => {
    navigate('/waitlist')
  }

  return (
    <>
      <video autoPlay loop muted className="view-video-background">
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="contact-form-container">
        <div className="contact-form=container"></div>
        <form className="contact-form">
          <input className="contact-input" type="text" placeholder="Name" />
          <input className="contact-input" type="text" placeholder="E-Mail" />
          <textarea
            className="contact-textarea"
            placeholder="Your Message..."
          ></textarea>
          <center>
            <button className="contact-button" onClick={onSubmit}>
              Submit
            </button>
          </center>
        </form>
      </div>
    </>
  )
}
