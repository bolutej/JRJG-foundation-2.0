import './App.css'
import facebookIcon from "./assets/facebook.svg"
import twitterIcon from "./assets/twitter.svg"
import instagramIcon from "./assets/instagram.svg"
import lineIcon from "./assets/line.svg"
import logoIcon from "./assets/logo.svg"
import image1 from './assets/jrjf-1.png'
import image2 from './assets/jrjf-2.png'
import image9 from './assets/jrjf-9.png'
import image12 from './assets/jrjf-12.png'
import video from './assets/video_horizontal.mp4'
import Contact from './component/Contact'
import Gallery from './component/Gallery'
import Typewriter from './component/Typewriter'
import Navbar from './component/Navbar'

const links = [
  { id: 1, url: "#about", label: "About Us" },
  { id: 2, url: "#events", label: "Our Programs" },
  { id: 3, url: "#donate", label: "Partner with Us" }
];

function App() {
 

  return (
    <>
        <Navbar links={links} />
      <section className="bg">
      
    <div className="main">
        <h1>
        <span className="static-line">Glorifying<br/> Jesus Through</span>
        <span className="tw-line">
          <Typewriter/>
        </span>
      </h1>
        <p>We stand with believers and those coming to the<br/> knowledge of Christ — meeting needs, funding dreams,<br/> and spreading the gospel through every act of giving.</p>
        <a href="https://docs.google.com/forms/d/1tCuG8BX1n70x1OR0nW-tALAPKVshiJq1Oa08eZaDoyM" target="_blank"><button className="lBtn">Volunteer</button></a>
        <a href="#donate"><button className="rBtn">Support Us</button></a>
    </div>

    <div className="slides">
        <Gallery />
    </div>
      </section>
      <section className="overlap" id="about">
    
        <div className="before" >
            <img src={image1} />
            <div>
            <button>Our Vision</button>
            <h4>Every nation touched.<br/>Every believe<br/> supported. Every vision<br/> funded -- for His glory</h4>   
            <p>At JRJG Foundation, we believe the gospel was never<br/> meant to stay in the four walls of a church — it was always<br/> meant to be felt. In a bag of food before Christmas. In an<br/> exam fee paid for a child whose parents couldn't afford it.<br/> In a vision funded that would have otherwise died quietly.<br/>We are building toward a world where God's generosity is<br/> made visible through His people — where every nation, in<br/> some tangible way, encounters the love of the One who<br/> sent us. This is not our foundation. It belongs to Him. We<br/> are simply the hands.</p>
        </div>
        </div>
        <div className="after">
            <div>
            <button>Mission</button>
            <h4>Glorifying Jesus through<br/> intentional giving — to<br/> people, to nations, to His<br/> purposes.</h4>   
            <p>To glorify Jesus Christ through intentional, Spirit-led<br/> giving — standing with believers in their times of need,<br/> reaching those who are just coming to the knowledge of<br/> Christ, and supporting every God-given work that carries<br/> His gospel forward.</p><p>We do this through food, through education, through<br/> funding Kingdom visions — and through whatever else the<br/> Spirit leads us into. We are not driven by a program. We<br/> are driven by a Person. And as long as there are people<br/> who need to see Jesus revealed in practical love, we will<br/> show up — across communities, across borders, and<br/> across nations — until His name is glorified in every<br/> corner of the earth.</p>
        </div>
        <img src={image2} />
        </div>    
      </section>
      <section className="exp">
      
        <h1>Our Impacts</h1>
        <p>Every number represets a life touched, a need met, and the<br/> name of Jesus made known in a tangible way.</p>
        <div className="grid">
            <div>
                <h1>300+</h1>
                <p>Lives impacted through food<br/> outreach, educational support, and<br/> Kingdom-driven giving since we<br/> began</p>
            </div>
            <div>
                <h1>900+</h1> 
                <p>Famillies reached through our<br/> Christmas Food Outreach —<br/> ensuring no table was empty as we<br/> celebrated His birth.</p>
            </div>
            <div>
                <h1>20+</h1>
                <p>Students supported Exam fees<br/> paid, tuition covered, and<br/> educational journeys walked alongside — because no child's<br/> future should be limited by<br/> finances.</p>
            </div>
            </div>
            <div className="video">
                <video muted controls>
                  <source src={video} type="video/mp4" />
              </video>
        </div>
       
      </section>

      <section className="Pr" id="events">
        <div className="hh">
            <h1>Our Programs</h1>
            <p>Every program is Spririt-ied and people-focused —<br/> meeting real needs in real communities, for the<br/> glory of Jesus Christ.</p>
        </div>
        <div className="near">
            <div className="vs">
                <img src={image9} />
                <div >
                    <button>Upcoming</button>
                <h4>The Happy Home (Retirement<br/> Community for Elders)</h4>
                <p>Our elders deserve to be honoured, not forgotten. The Happy<br/> Home is our vision to create a warm, dignified space where<br/> retired men and women are cared for, seen, and loved —<br/> because honouring those who came before us is a Kingdom<br/> value.</p>
            </div>
        </div>
            <div id="inv"></div>
            <div className="vs">
                <img src={image12} />
                <div >
                    <button>Reccuring</button>
                <h4>December Food Outreach</h4>
                <p>Every December, a few weeks before Christmas, we show up<br/> with food for families who need it most. It is our way of<br/> celebrating the birth of Christ — not just with worship, but with<br/> the kind of practical love He himself demonstrated.<br/> Because the One whose birth we celebrate never let the<br/> hungry go home empty.</p>
            </div>
        </div>
        </div>
      </section>

      {/* <section id="donate">
            <div>
            <h1>Partner with Us<br/> in this work</h1>
            <p>If God is speaking to you about this foundation,<br/>we'd love to hear from you - whether to give, to<br/>or to collaborate.</p>
            </div>
            <form className="inputPr" id="form">
                <input type="name" placeholder="Full Name" id="name" /><br/>
                <input type="email" placeholder="Email Address" id="email" /><br/>
               <div><Characters/></div>
            </form>
      </section> */}
      
      <Contact />

      <footer id="contacts">
        <div>
        <div className="logoPart">
            
        <img src={logoIcon} className="logo" />
        <img src={lineIcon} className="line" />
        <p><span className="first">Jesus Revealed<br/> Jesus Glorified</span><br/><span className="span">Foundation</span></p>
    </div>

    <h1>Empowering lifes through<br/> compassion</h1>
</div>
<div className="sect">
    <ul>
    <p>Contacts</p>
    <li>+2348172584412</li>
    <li>jrjg.foundation@gmail.com</li>
</ul>
<div>
    <p>Follow Us</p>
    <div className="social">
    <a href="https://www.instagram.com/jrjg.foundation/" target="_blank"><img src={instagramIcon} alt="Instagram" /></a>
    <a href="https://x.com/JRJGFoundation"><img src={twitterIcon} alt="twitter" /></a>
    <a href=""><img src={facebookIcon} alt="Facebook" /></a>
    </div>
</div>
</div>

    </footer>
    <div className="last">
    <img src="images/last.png" />
    <img src="images/last.png" />
</div>
<div className="toast" id="toast"></div>
    </>
  )
}

export default App
