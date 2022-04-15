import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import {Hero} from "../Hero/Hero"

export function Timeline(){
  return(

<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="Q4 — 2021"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={Hero}
  >
    <h3 className="vertical-timeline-element-title">PHASE 0</h3>
    <h2 className="vertical-timeline-element-subtitle">HOW WE BORN</h2>
    <h4>
    WE WERE BORN AS CREATOR AND DEVS ON CDC AT THE END OF 2021, HAVING GREAT SUCCESS. 
    </h4>
    <h4>THE TEAM'S INTENT IS TO CREATE A DURABLE AND SELF-SUSTAINABLE ECOSYSTEM THROUGH THEIR COMMUNITY.</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="Q1 — 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={Hero}
  >
    <h3 className="vertical-timeline-element-title">PHASE 1 </h3>
    <h2 className="vertical-timeline-element-subtitle">» GENESIS</h2>
    <h4>👨‍🚀 »» 1.111 CRONOSNAUTS (1st GEN)</h4> 
    <h4>🌐 »» WEB v1 </h4>
    <h4>‍🚀 »» STAKING (Passive Income)</h4> 
    <h4>🎁 »» SPACEGIFT </h4>
    <h4>🛸 »» MARKETING </h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
  date="Q3 — 2022"
  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  icon={Hero}
  >
    <h3 className="vertical-timeline-element-title">PHASE 3</h3>
    <h2 className="vertical-timeline-element-subtitle">INVASION</h2>
    <h4>
    🧰 »» UTILITIES </h4>
    <h4>
    💰 »» $CROF TOKEN </h4>
    <h4>
    🔐 »» COMMUNITY WALLET </h4>
    <h4>
    🧢 »» BETA MERCH
    </h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    date="Q4 — 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={Hero}
  >
    <h3 className="vertical-timeline-element-title">PHASE 4</h3>
    <h2 className="vertical-timeline-element-subtitle">» RE—BUILDING THE HISTORY</h2>
    <h4>
    🧿  »» RE—BUILDING UI </h4>
    <h4>
    🦑  »» 3.333 CRONOSNAUTS (2nd GEN) </h4>
    <h4>
    🐳  »» MARKETING V2 </h4>
    <h4>
    🏆  »» MATERIAL UTILITIES — MERCH 
    </h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    date="Q1 — 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={Hero}
  >
    <h3 className="vertical-timeline-element-title">PHASE 5</h3>
    <h2 className="vertical-timeline-element-subtitle">» COLONIZATION</h2>
    <h4>
    💀  »» INSANE GA </h4>
    <h4>
    🏖  »» EXSCLUSIVE OGs UTILITIES </h4>
    <h4>
    💸  »» EXSCLUSIVE AIRDROP HOLDERS </h4>
    <h4>
    🪐   »» EXPAND PROJECT IN OTHER ECOSYSTEM
    </h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={Hero}
    date="Q2 — 2023"
  />
</VerticalTimeline>

 )
}