import TechnologiesContainer from "./TechnologiesContainer";
import '../styles/components/maincontent.sass'
import AboutContainer from './AboutContainer'

const MainContent = () => {
  return <main id='main-content'>
    <AboutContainer/>
    <TechnologiesContainer />
  </main>
}

export default MainContent