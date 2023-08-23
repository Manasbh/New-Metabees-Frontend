import { useNavigate } from 'react-router-dom'
import TeamCard from '../../components/teamcard/TeamCard'
import about from '../../assets/about.jpg'
import Adi from '../../assets/Adi.jpg'
import Manas from '../../assets/Manas.jpg'
import Suvigya from '../../assets/Suvigya.jpg'

function About() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4">
        {/* Hero Map */}
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <div className="max-w-max rounded-full  bg-[#6e25c0] p-1 px-3">
            <p className="text-xs font-semibold text-white leading-normal md:text-sm">
              About Us
            </p>
          </div>
          <p className="text-2xl font-bold text-[#8547cc] md:text-3xl md:leading-10 home-h1">
            VR is the future and we will help you build on it.
          </p>
          <p className="max-w-4xl text-base text-[#edd8f7] md:text-xl">
            Metabees aims to become an enabler for other thriving companies and
            businesses. New grounds are being broken and Metabees is opening the
            door to the future (and hey we’re taking everyone with us!).
          </p>
          <p className="max-w-4xl text-base text-[#edd8f7] md:text-xl">
            Our biggest milestone is to revolutionize the workings of the
            consumer market and pave a new path to bring businesses closer to
            their customers
          </p>
        </div>
        <div className="w-full space-y-4"></div>
        {/* greetings */}
        <div className="mt-16 flex items-center">
          <div className="space-y-6 md:w-3/4">
            <p className="text-2xl font-bold text-[#8547cc] md:text-3xl md:leading-10 home-h1">
              Meet our team
            </p>
            <p className="max-w-4xl text-base text-[#edd8f7] md:text-xl">
              Here at Metabees, our group is one of pioneers, explorers and
              artists.
              <br />
              <br />
              Built on the foundation of trust, diligence and integrity, our
              team thrives on collaboration and a healthy work ethic.
              <br />
              <br />
              They have expressed themselves by incorporating their unique style
              to the projects they have worked on.
            </p>
            <div></div>
          </div>
        </div>
        {/* TEAM */}
        <div className="grid grid-cols-1 lg:ml-32 gap-4 gap-y-6 py-12 pb-20 md:grid-cols-2 lg:grid-cols-3">
          <TeamCard
            name="Manas Bhasin"
            role="Founder"
            linkedinlink="https://www.linkedin.com/in/manas-bhasin-00b7a1250/"
            githublink="https://github.com/Manasbh"
            photo={Manas}
          />
          <TeamCard
            name="Aditya Ranjan"
            role="Backend Developer"
            linkedinlink="https://www.linkedin.com/in/aditya-ranjan-577242252/"
            githublink="https://github.com/adityar2705"
            photo={Adi}
          />
          <TeamCard
            name="Suvigya Mishra"
            role="Full Stack Developer"
            linkedinlink="https://www.linkedin.com/in/suvigyamishra/"
            githublink="https://github.com/Crazyhaller"
            photo={Suvigya}
          />
        </div>
        {/* Hiring Banner */}
        <div className="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row">
          <div className="space-y-6">
            <p className="text-3xl text-[#edd8f7] font-bold md:text-4xl">
              We&apos;re just getting started
            </p>
            <p className="text-base text-[#edd8f7] md:text-lg">
              Our philosophy is simple — hire a team of diverse, passionate
              people and foster a culture that empowers you to do your best
              work.
            </p>
            <button
              type="button"
              className="rounded-md bg-[#642b7c] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#e7caf3] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={() => navigate('/waitlist')}
            >
              Apply Here
            </button>
          </div>
          <div className="md:mt-o mt-10 w-full">
            <img src={about} alt="Getting Started" className="rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
