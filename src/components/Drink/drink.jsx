import { Layer } from '../Layer/layer'
import './drink.css'

export const Drink = ({id, name, ordered, image, layers}) => (  
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src={`http://localhost:4000${image}`} />
        </div>
        <div className="drink__info">
          <h3>{name}</h3>
          {layers.map((layer, index) => (
            <Layer key={index} color={layer.color} label={layer.label} />
          ))}
        </div>        
      </div>
        <form className="drink__controls"  data-id={id}>
          <input type="hidden" className="order-id" value={id} />
          <button className={`order-btn ${ordered ? "order-btn--ordered" : ""}`}>
          {ordered ? "Zrušit" : "Objednat"}
          </button>
        </form>
    </div>
)




