import bgVideo from '../../assets/PageBackgrounds/viewBg.mp4'
import { useNavigate } from 'react-router'
import './View.css'

const View = () => {
  const navigate = useNavigate()
  const onSubmit = () => {
    navigate('/signup')
  }

  return (
    <div className="view-video-container">
      <video autoPlay loop muted className="view-video-background">
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="bg-transparent view-video-content">
        <h1 className="mb-5 sm:font-bold sm:text-3xl home-heading">
          <span className="text-[#6e25c0]">
            En<span className="text-[#853fd6]">t</span>
            <span className="text-[#8c4ad8]">er</span>
          </span>
          <span className="text-[#9957e6]"> Your</span>{' '}
          <span className="text-[#8041c7]">De</span>
          <span className="text-[#9964d6]">si</span>
          <span className="text-[#8a57c5]">red</span>{' '}
          <span className="text-[#853cda]">Li</span>
          <span className="text-[#9252db]">nk</span>
        </h1>
        <div className="view-input-container">
          <input
            type="text"
            name="text"
            className="view-input-box"
            placeholder="Enter Text"
            required=""
          />
        </div>
        <button className="view-enter-btn" onClick={onSubmit}>
          ENTER
        </button>
      </div>
    </div>
  )
}

export default View
