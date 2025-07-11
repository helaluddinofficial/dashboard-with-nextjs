import React from 'react'

const Card = ({title,value,type}) => {
	return (
		<div>
			<h2>{title}</h2>
			<p>{value}</p>
			<p>{type }</p>
		</div>
	)
}

export default Card
