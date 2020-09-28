import React,{useState} from 'react'

function HookCounterFour() {
    const [items, setItem] = useState([])
    const AddItems = () => {
        setItem([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

    return (
        <div>
            <button onClick={AddItems}>Add Items</button>
            <ul>

                {items.map(item => (<li id={item.id}>{item.value}</li>))}

            </ul>
        </div>
    )
}

export default HookCounterFour
