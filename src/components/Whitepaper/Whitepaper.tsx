import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import wagmi from "../../assets/wagmi.png"

export function Whitepaper(){
  return(
    <Container id="whitepaper">


            <div className="about-text">
        <ScrollAnimation animateIn="fadeInDown">
          <h2>WHITEPAPER</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>Want to see our plans for the future?</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000} style={{marginTop: "2rem", marginBottom: "2rem"}}>

          <p>Check out our Whitepaper to stay up to date</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>

          <p>Get involved, meet new people, expand the community and feel part of it</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
        </ScrollAnimation>
        <div className="hard-skills">
        <a href="../assets/WHITEPAPER.pdf" download className="button">
            Download Whitepaper
          </a>
        <a href="../assets/TOKENOMICSV1.png" download className="button">
            Download Tokenomics
          </a>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src={ wagmi } />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
