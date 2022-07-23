import React, { useState } from 'react';
import {nanoid} from 'nanoid';
import moment from 'moment';

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
			const arr1 = dataValue.split('.');
			const date = moment(arr1[2]+'-'+arr1[1]+'-'+arr1[0]);
			if(kmValue !== '' && date.isValid()){
			  arr({data: dataValue, km: kmValue, id: nanoid(), date: date})
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