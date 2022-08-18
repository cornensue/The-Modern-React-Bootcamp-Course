import React, {useState} from 'react';
import Box from './Box';
import { NewBoxForm } from './NewBoxForm';

function BoxList(props) {
    const [box, setBox] = useState([{width: 10, height: 40, color: 'magenta'}]);

    const boxes = box.map(box => (
        <Box width={box.width} height={box.height} color={box.color}/>
    ));

    function create(newBox) {
        setBox(...box, newBox);
    }
 
  return (
    <div>
        <h1>Color Box Thingy</h1>
        <NewBoxForm createBox={create}/>
        {boxes}
    </div>
  );
}

export default BoxList;