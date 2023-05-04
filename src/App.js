import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImg from "./images/alexa.png";
import SiriImg from "./images/siri.png";
import CortanaImg from "./images/cortana.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard title="Alexa" handle="@alexaAmazon" img={AlexaImg} desc={'Alexa was made by Amazon :)'}/>
            </div>
            <div className="column is-4">
              <ProfileCard title="Siri" handle="@siriApple" img={SiriImg} desc={'Hey Siri? This was made by Apple.'}/>
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortanaMS"
                img={CortanaImg}
                desc={'Cortana was made by Microsoft.'}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
