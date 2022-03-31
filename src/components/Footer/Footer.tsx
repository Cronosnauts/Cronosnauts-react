import { Container } from './styles'

import twt from "../../assets/twt.svg";
import dsd from "../../assets/dsd.svg";
import tg from "../../assets/tg.svg";
import instagramIcon from "../../assets/instagram.png"

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>CRONOS</span>
        <span>NAUTS</span>
      </a>

      <div className="social-media">
        <a
          href="https://t.me/+1wceBXCpDNw2ZWU0"
          target="_blank"
          rel="noreferrer"
        >
          <img src={tg} alt="Telegram" />
        </a>

        <a
          href="https://discord.gg/7QtwManATf"
          target="_blank"
          rel="noreferrer"
        >
          <img src={dsd} alt="Discord" />
        </a>

        <a
          href="https://www.instagram.com/cronosnauts"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>

        <a
          href="https://twitter.com/cronosnauts"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twt} alt="Twitter" />
        </a>
      </div>
    </Container>
  )
}
