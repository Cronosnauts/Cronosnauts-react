import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
<<<<<<< HEAD
import  Crosea   from "../../assets/Crosea.png"
import  Tra   from "../../assets/Tra.png"

=======
import Crosea  from "../../assets/Crosea.png"
>>>>>>> e5d6d64 (“Partnership”)

export function Partner(){
 return(
  <Container id="contato">
    <div className="hero-text">
    <ScrollAnimation animateIn="fadeInUp">
      <p> </p>
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeInUp" delay={0.2*1000}>
    <header>
<<<<<<< HEAD
        <h2>PARTNERSHIP</h2>
=======
        <h2>PARTNERSHIP</h2>      
>>>>>>> e5d6d64 (“Partnership”)
      </header>
    </ScrollAnimation>
    <div className="contacts">
        <ScrollAnimation animateIn="fadeInDown" delay={1*1000}>
          <img src={Crosea} alt="Email" width="100" height="100"/>
<<<<<<< HEAD
          <a href="https://www.crosea.io/"><h1>CROSEA</h1> </a>
        </ScrollAnimation>
      </div>
      <div className="contacts">
        <ScrollAnimation animateIn="fadeInDown" delay={1*1000}>
          <img src={Tra} alt="Email" width="100" height="100"/>
          <a href="https://cronosbay.com"><h1>CRONOSBAY</h1> </a>
=======
>>>>>>> e5d6d64 (“Partnership”)
        </ScrollAnimation>
      </div>
    </div>
    </Container>

  )
}