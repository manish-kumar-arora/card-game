import React from 'react';
import CardItem from './card_item';

const CardRow  = (props) => {

	var items = props.rowCards.map((card)=>{
		return <CardItem key={card} id={card}/>
	});

	return (
		<div>
			{items}
		</div>
		);
}

export default CardRow;