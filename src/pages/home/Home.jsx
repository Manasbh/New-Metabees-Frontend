import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Pricings from '../../components/pricing/Pricings'
import Footer from '../../components/footer/Footer'
import Neptaverse from '../../components/neptaverse/Neptaverse'
import Loading from '../../components/loadingspinner/Loading'
import computer from '../../assets/ContentImages/computer.png'
import mobile from '../../assets/ContentImages/mobile.png'
import tablet from '../../assets/ContentImages/tablet.png'
import vr from '../../assets/ContentImages/vr.png'
import amazon from '../../assets/ContentImages/amazon.png'
import microsoft from '../../assets/ContentImages/microsoft.png'
import buildspace from '../../assets/ContentImages/buildspace.jpg'
import multipleWorlds from '../../assets/ContentImages/multipleWorlds.mp4'
import websiteBg from '../../assets/ContentImages/websiteBg.mp4'
import './Home.css'

function Home() {
  const navigate = useNavigate()
  const [loaded, setLoaded] = useState(false)

  const videoloaded = () => {
    setTimeout(() => {
      setLoaded(true)
    }, 2000)
  }

  return (
    <div>
      {/* Home Video */}
      {!loaded && <Loading />}
      <div className="video-container">
        <video
          autoPlay
          loop
          muted
          className="video-background"
          onLoadedData={videoloaded}
        >
          <source src={websiteBg} type="video/mp4" />
        </video>
        <div className="bg-transparent text-white video-content">
          {/* <h1 className="text-[#E4A0F7] drop-shadow-lg mb-5 sm:font-bold sm:text-3xl home-heading">
            The Future Of E-Commerce Is Here
          </h1> */}
          <button
            className="home-enter-btn mt-5"
            onClick={() => navigate('/waitlist')}
          >
            Visit The Virtual World
          </button>
        </div>
      </div>

      {/* Products */}

      <Neptaverse />

      {/* Pricing */}

      <Pricings />

      {/* Device Support */}
      <div className="mt-10 relative w-full h-full flex flex-col overflow-x-hidden">
        <h1 className="m-auto font-bold text-[#864bc9] text-center text-2xl home-heading">
          Multi Device Support
        </h1>
        <div className="flex flex-col lg:flex-row p-6">
          <div className="home-main-card">
            <div className="home-sub-card text-white font-bold">
              <div className="flex flex-col items-center">
                <img className="h-1/2 w-1/2" src={computer} alt="PC" />
                <p className="mt-1">Desktop / Laptop</p>
              </div>
            </div>
          </div>
          <div className="home-main-card">
            <div className="home-sub-card text-white font-bold">
              <div className="flex flex-col items-center">
                <img className="h-1/2 w-1/2" src={mobile} alt="Mobile" />
                <p className="mt-1">Smartphone</p>
              </div>
            </div>
          </div>
          <div className="home-main-card">
            <div className="home-sub-card text-white font-bold">
              <div className="flex flex-col items-center">
                <img className="h-1/2 w-1/2" src={tablet} alt="PC" />
                <p className="mt-1">Tablet / iPad</p>
              </div>
            </div>
          </div>
          <div className="home-main-card">
            <div className="home-sub-card text-white font-bold">
              <div className="flex flex-col items-center">
                <img className="h-1/2 w-1/2" src={vr} alt="PC" />
                <p className="mt-1">VR Headset</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Multiple Worlds */}
      <div className="mt-10 mb-2 video-container">
        {!loaded && <Loading />}
        <video
          autoPlay
          loop
          muted
          className="video-background"
          onLoadedData={() => setLoaded(true)}
        >
          <source src={multipleWorlds} type="video/mp4" />
        </video>
        <div className="bg-transparent text-white video-content">
          <h1 className="sm:font-bold sm:text-3xl home-heading">
            <span className="text-[#915cce]">
              MUL<span className="text-[#853fd6]">TI</span>
              <span className="text-[#8c4ad8]">PLE</span>
            </span>
            <span className="text-[#9957e6]"> W</span>
            <span className="text-[#8041c7]">O</span>
            <span className="text-[#8153b6]">RL</span>
            <span className="text-[#853cda]">DS</span>
          </h1>
        </div>
      </div>

      {/* Powered By */}

      <div className="mt-10 relative w-full h-full flex flex-col items-center justify-center overflow-x-hidden">
        <h1 className="m-auto mb-2 text-[#864bc9] font-bold text-2xl home-heading">
          Powered By
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:items-center lg:justify-between p-6">
          <img
            className="h-28 w-36 m-5 lg:mr-16 max-sm:w-1/6 max-sm:h-1/6 rounded-lg"
            src={amazon}
            alt="Amazon"
          />
          <img
            className="w-1/6 h-1/6 m-5 lg:mr-14 rounded-lg"
            src={microsoft}
            alt="Microsoft"
          />
          <img
            className="w-1/6 h-1/6 m-5 rounded-lg"
            src={buildspace}
            alt="Buildspace"
          />
        </div>
      </div>

      {/* Footer */}

      <Footer />
    </div>
  )
}

export default Home
