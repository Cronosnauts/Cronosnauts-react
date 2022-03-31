import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import yes from "../../assets/yes.svg"
import no1 from "../../assets/no1.svg"


export function Portfolio(){
  return(
    <Container id="roadmap">
      <h2>ROADMAP</h2>

      <div className="projects">

      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
          <div className="project-links">
            <a href="https://github.com/joaotuliojt/fc-squad43" target="_blank" rel="noreferrer">
              <img src={yes} alt="GitHub" />
            </a>
          </div>
          </header>
          <div className="body">
            <h4>Q4 - 2021</h4>
            <p>Crypto.com Creator - Release 500 NFTs on CDC - Social Accounts - Community. This is the 1st Phase of the project.
            </p>
          </div>
          <footer>
          </footer>
        </div>
      </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
          <div className="project-links">
            <a href="https://github.com/joaotuliojt/fc-squad43" target="_blank" rel="noreferrer">
              <img src={yes} alt="GitHub" />
            </a>
          </div>
          </header>
            <div className="body">
              <h4>Q1 - PHASE 1</h4>
              <p>Community expansion - Development of $ CROF Token - First Batches.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
          <div className="project-links">
            <a href="https://github.com/joaotuliojt/fc-squad43" target="_blank" rel="noreferrer">
              <img src={no1} alt="GitHub" />
            </a>
          </div>
          </header>
            <div className="body">
              <h4>Q2 - The Genesis</h4>
              <p>1.111 Cronosnauts 1st GEN - Airdrop $CROF - Utilities for holders - WEB v1
              </p>
            </div>
            <footer>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
          <div className="project-links">
            <a href="https://github.com/joaotuliojt/fc-squad43" target="_blank" rel="noreferrer">
              <img src={no1} alt="GitHub" />
            </a>
          </div>
          </header>
            <div className="body">
              <h4>Q3 - Evolution</h4>
              <p>3.333 Cronosnauts 2nd GEN - Rarity - 2nd GEN of utilities - MV - WEB v2 - Farmspace&Staking
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li></li>
                <li></li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
          <div className="project-links">
            <a href="https://github.com/joaotuliojt/fc-squad43" target="_blank" rel="noreferrer">
              <img src={no1} alt="GitHub" />
            </a>
          </div>
          </header>
            <div className="body">
              <h4>Q4 - MOONLOVERS</h4>
              <p>Merchandising and Marketing - Owners Holidays - DAO
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li></li>
                <li></li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
          <div className="project-links">
            <a href="https://github.com/joaotuliojt/fc-squad43" target="_blank" rel="noreferrer">
              <img src={no1} alt="GitHub" />
            </a>
          </div>
          </header>
            <div className="body">
              <h4> Q1 - 2023</h4>
              <p> COMING SOON...
              </p>
            </div>
            <footer>
            </footer>
          </div>
        </ScrollAnimation>



      </div>
    </Container>
  );
}