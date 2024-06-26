import './style.css'

export const Drink = ({name, image, layers}) => {
  //const {name, ordered, image, layers} = drink
  //const {color, label} = layers
  return (  
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src={image} />
        </div>
        <div className="drink__info">
          <h3>{name}</h3>
            <div className="layer">
              <div className="layer__color" style={{backgroundColor: `{layers[0].color}` }} />
              <div className="layer__label">`{layers[0].label}`</div>
            </div>
            <div className="layer">
              <div className="layer__color" style={{backgroundColor: `{layers[1].color}` }} />
              <div className="layer__label">`{layers[1].label}`</div>
            </div>
        </div>        
      </div>
        <form className="drink__controls">
          <input type="hidden" className="order-id" value="1" />
          <button className="order-btn">
            Objednat
          </button>
        </form>
    </div>
  )}




