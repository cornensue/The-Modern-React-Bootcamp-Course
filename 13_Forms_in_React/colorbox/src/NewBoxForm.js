import React, {useState} from 'react'

export const NewBoxForm = (props) => {

    const [height, setHeight] = useState('');
    const [width, setWidth] = useState('');
    const [color, setColor] = useState('');

    const handleHeight = e => setHeight(e.target.value);
    const handleWidth = e => setWidth(e.target.value);
    const handleColor = e => setColor(e.target.value);

    const handelSubmit = e => {
        e.preventDefault();
        props.createBox()
    }

  return (
    <form onSubmit={handelSubmit}>
        <div>
            <label htmlFor='height'>Height</label>
            <input type='text' name='height' id='height' value={height} onChange={handleHeight}></input>
        </div>
        <div>
            <label htmlFor='width'>Width</label>
            <input type='text' name='width' id='width' value={width} onChange={handleWidth}></input>
        </div>
        <div>
            <label htmlFor='color'>Color</label>
            <input type='text' name='color' id='color' value={color} onChange={handleColor}></input>
        </div>
        <button>Add New Box!</button>
    </form>
  )
}
