import React from "react";

const Card = ({app}) => {
    const {name, description, subscriptions, categories} = app
    
    return (
        <li>
        <div className="app-item">
          <div className="box-info">
            <div className="box-info--content">
              <div className="description">
                <h1>{name}</h1>
                <p>{description}</p>
              </div>
              <div className="tags">
                {
                    categories.map(category => {
                        return (
                            <span>{category} {categories.length > 1 && "/"} </span>
                        )
                    })
                }
              </div>
            </div>
            <div className="box-info--footer">
              <ul>
                {
                    subscriptions.map(sub => {
                        return (
                            <li key={sub.id}><span>{sub.name}</span> {sub.price > 0 ? <h3>{sub.price}<sup>€</sup></h3> : <h3>Free</h3>}</li>
                        )
                    })
                }
              </ul>
            </div>
          </div>
        </div>
      </li>
    )
}

export default Card; 