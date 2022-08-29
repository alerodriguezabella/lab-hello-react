// import React, { Component } from "react";
import Card from './Card';
import "./Card.css";
import icon1 from '../../images/icon1.png'
import icon2 from '../../images/icon2.png'
import icon3 from '../../images/icon3.png'
import icon4 from '../../images/icon4.png'




// class CardList extends Component {
//     render() {
//         return (
//             <div className="cardList">
//                 <Card />
//             </div>
//         )
//     }
// }

// best practice to use functional (function instead of class) components
function CardList() {
    const cards = [
        { key: 1, logo: icon1, title: 'Declarative', description: 'React makes it painless...' }, 
        { key: 2, logo: icon2, title: 'Components', description: 'Build encapsulated components...' },
        { key: 3, logo: icon3, title: 'Single-Way', description: 'A set of immutable...' },
        { key: 4, logo: icon4, title: 'JSX', description: 'Statically-typed...' }
    ]
    return (
        <div className="card-list">
            {cards.map(card => {
                return <Card key={card.key} logo={card.logo} title={card.title} description={card.description} />
            })}
        </div>
    )
}

export default CardList;