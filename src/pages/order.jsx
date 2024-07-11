import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './order.css';
import { Footer } from '../components/Footer/footer';
import { Header } from '../components/Header/header';
import { Order } from "../components/Order/order";

const response = await fetch("http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image")
const json = await response.json()
const objednavka = json.data

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <div className="page">
      <Header showMenu={false} />
        <Order items={objednavka} />
      <Footer />
    </div>
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