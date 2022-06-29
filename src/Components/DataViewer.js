import React, { useState } from 'react';

export default function DataViewer(props) {
	const { data, remove } = props;

	return(
		<ul className="list">
			{data.map(o => 
				<li key={o.id} className="list-point">
				  <span>{o.data}</span>
				  <span>{o.km}</span>
				  <button onClick={() => {
				  	remove(o.id);
				  }}>DEL</button>
				</li>
		        )}
		</ul>
		);
}