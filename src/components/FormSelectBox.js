import React, { useState } from 'react';
import  '../css/formSelectBox.css';
import '../App.css';

const FormSelectBox = (props) => {

    const [ useItems, setItems ] = useState(props.items || []);
    const [ useSelectedItem, setSelectedItem ] = useState('');
    const [ useShowMenu, setShowMenu ] = useState(false);


console.log(useSelectedItem);
    return (
        <div className="selectBox-wrapper">
            <div className="selectBox-displaySelected">
            {useSelectedItem.value || 'Select an item'}<div className="selectBox-arrow selectBox-arrow__down" onClick={e => setShowMenu(!useShowMenu)}></div>
            </div>
            <div className="selectBox box-shadow">
    { useShowMenu ? props.items.map((item, index) => <div key={index} className={useItems === item ? "selectBox-item selecteed": 'selectBox-item'} onClick={e => setSelectedItem(item)}>{item.value}</div>):''}
        </div>
        </div>
        
    )

}

export default FormSelectBox;