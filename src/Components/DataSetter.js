import React, { useState } from 'react';
import {nanoid} from 'nanoid';

export default function DataSetter(props) {
	const [ dataValue, setDataValue ] = useState('');
	const [ kmValue, setKmValue ] = useState('');
	const { arr } = props;
	
	return(
	<form action="" className="form" >
		<div className="container">
			<label htmlFor="data">Дата (ДД.ММ.ГГ)</label>
			<input type="date" name="data" value={dataValue} onChange={(evt) => {
				setDataValue(evt.target.value);
			}
			}/>
		</div>
		<div className="container">
			<label htmlFor="kilom">Пройдено км</label>
			<input type="number" name="kilom" value={kmValue} onChange={(evt) => {
				setKmValue(evt.target.value);
			}
			}/>
		</div>
		<button type="submit" onClick={(evt) => {
			evt.preventDefault();
			if(kmValue !== ''){
			  arr({data: dataValue, km: kmValue, id: nanoid()})
			  setDataValue('');
			  setKmValue('');
			}
		}
		}>
		OK
		</button>
	</form>
	);
}