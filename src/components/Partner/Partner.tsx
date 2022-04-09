import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Crosea  from "../../assets/Crosea.png"

export function Partner(){
 return(
  <Container id="contato">
    <div className="hero-text">
    <ScrollAnimation animateIn="fadeInUp">
      <p> </p>
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeInUp" delay={0.2*1000}>
    <header>
        <h2>PARTNERSHIP</h2>
      </header>
    </ScrollAnimation>
    <div className="contacts">
        <ScrollAnimation animateIn="fadeInDown" delay={1*1000}>
          <img src={Crosea} alt="Email" width="100" height="100"/>
          <a href="https://www.crosea.io/"><h1>CROSEA</h1> </a>
        </ScrollAnimation>
      </div>
    </div>
    </Container>

  )
}