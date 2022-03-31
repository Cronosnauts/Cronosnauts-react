import { Container } from "./styles";
import twt from "../../assets/twt.svg";
import dsd from "../../assets/dsd.svg";
import tg from "../../assets/tg.svg";


export function Contact(){

  return(
    <Container id="contato">
      <header>
        <h2>JOIN OUR COMMUNITY</h2>
        <p>Follow us on our social networks to stay updated</p>      
      </header>
      <div className="contacts">
        <div>
          <img src={tg} alt="Email" />
          <a href="https://t.me/+1wceBXCpDNw2ZWU0">TELEGRAM</a>
        </div>
        <div>
          <img src={dsd} alt="Email" />
          <a href="https://discord.gg/7QtwManATf">DISCORD</a>
        </div> 
        <div>
          <img src={twt} alt="Email" />
          <a href="https://twitter.com/cronosnauts">TWITTER</a>
        </div> 
      </div>
    </Container>

  )
}