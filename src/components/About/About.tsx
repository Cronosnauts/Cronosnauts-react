import { Container } from "./styles";

import wawa from "../../assets/wawa.png"
import ScrollAnimation from "react-animate-on-scroll";


export function About(){
  return(
    <Container id="spaceship">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>The Beginning</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>Cronosnauts is a project born from the idea of ​​broadening the concept of respect and fraternity.
         In space, where we come from, there are not all these communications .. that's why we decided to land on Cronos..</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000} style={{marginTop: "2rem", marginBottom: "2rem"}}>

          <p>Everything starts from Genesis.. <h3>1.111 CRONOSNAUTS</h3> will be send to explore the planet and search for evidence of human life..so</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>

          <p>What are you waiting for? Get ready for landing, they need an owner</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
          <h3>Be part of our crewmates, be the future</h3>
        </ScrollAnimation>
        <div className="hard-skills">
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
         <img src={ wawa } />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
