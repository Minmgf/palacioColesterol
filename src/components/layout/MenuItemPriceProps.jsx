import { useState } from "react";
import ChevronDown from "../icons/ChevronDown";
import ChevronUp from "../icons/ChevronUp";
import Plus from "../icons/Plus";
import Trash from "../icons/Trash";

export default function MenuItemPriceProps({props, setProps, name, addLabel}){

    const [isOpen, setIsOpen] = useState(false);

    function addProp(){
        setProps(oldProps => {
            return [...oldProps, {name: '', price: 0}]
        })
    }

    function editProp( ev, index, prop){
        const newValue = ev.target.value;
        setProps(prevSizes => {
            const newSizes = [...prevSizes];
            newSizes[index][prop] = newValue;
            return newSizes;
        })
    }

    function removeProp(indexToRemove){
        setProps(prev => prev.filter( (v,index) => index !== indexToRemove))
    }

    return(
        <div className="p-2 mb-2 bg-gray-200 rounded-md">
            <button
                className="inline-flex justify-start p-1 border-0"
                onClick={() => setIsOpen( prev => !isOpen)}
                type="button">
                    {isOpen ? <ChevronUp/> : <ChevronDown/>}
                    <span>{name}</span>
                    <span>({props.length})</span>
            </button>
            <div className={isOpen ? 'block' : 'hidden'}>
                {props?.length > 0 && props.map( (size, index) => (
                    <div className="flex items-end gap-2">
                        <div className="">
                            <label >Name</label>
                            <input type="text" placeholder="Siza Name"
                            value={size.name}
                            onChange={ev => editProp( ev, index, 'name') }/>
                        </div>
                        <div className="">
                            <label >Extra price</label>
                            <input type="text" placeholder="Extra price"
                                value={size.price}
                                onChange={ev => editProp( ev, index, 'price') }/>
                        </div>
                        <div >
                            <button type="button"
                                onClick={() => removeProp(index)}
                                className="px-2 mb-2 bg-white">
                                    <Trash/>
                                </button>
                        </div>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={addProp}
                    className="items-center bg-white">
                        <Plus/>
                        <span>{addLabel}</span>
                </button>
            </div>
        </div>
    )
};