import Header from '../layouts/header/Header';
import Hero from '../components/hero/Hero';
import Skills from '../components/skills/Skills';
import Project from '../components/projects/Project';
import Contact from '../components/contacts/Contact';
import Footer from '../layouts/footer/Footer';
const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home;