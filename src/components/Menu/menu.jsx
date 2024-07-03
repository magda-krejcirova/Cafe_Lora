import { Drink } from '../Drink/drink'
import './menu.css'

// const params = new URLSearchParams(window.location.search);
// const id = params.get('id');

const response = await fetch("http://localhost:4000/api/drinks")
const json = await response.json()
const drinks = json.data
//console.log(drinks)

export const Menu = ({drinks}) => {
   //const {id, name, ordered, image, layers} = drinks
   //console.log(drinks.id)
    return (
        <section id="menu" className="menu">
            <div className="container">
                <h2>Naše nabídka</h2>
                <p className="menu-intro">
                    Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
                </p>
                <div className="drinks-list">
                  {drinks.map(drink => (
                    <Drink
                        key={drink.id}
                        id={drink.id}
                        name={drink.name}
                        ordered={drink.ordered}
                        image={drink.image}
                        layers={drink.layers}                                       
                    />
                  )) }
                </div>
            
                <div className="order-detail">
                    <a href="/order.html">Detail objednávky</a>
                </div>
            </div>
        </section>
    )
}