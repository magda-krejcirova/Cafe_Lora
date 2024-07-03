import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header/header';
import { Footer } from '../components/Footer/footer';
import { Contact } from '../components/Contact/contact';
import { Gallery } from '../components/Gallery/gallery';
import { Banner } from '../components/Banner/banner';
import { Menu } from '../components/Menu/menu';

const response = await fetch("http://localhost:4000/api/drinks")
const json = await response.json()
const cafes = json.data

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu drinks={cafes} />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>
);

/* <-- RESENI UKOLU CISLO 3 --> */
const hamburger = document.querySelector(".nav-btn")

hamburger.addEventListener("click", async (event) => {
  const menuElm = document.querySelector(".rollout-nav")
  menuElm.classList.toggle("nav-closed")

  menuElm.addEventListener("click", async (e) => {
  menuElm.classList.add("nav-closed")
  })
})

/* <-- RESENI UKOLU CISLO 7 --> */
