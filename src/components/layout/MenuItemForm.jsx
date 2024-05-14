import Plus from "../icons/Plus";
import Trash from "../icons/Trash";
import EditableImage from "./EditableImage";
import MenuItemPriceProps from "./MenuItemPriceProps";
import { useEffect, useState } from "react";

export default function MenuItemForm({onSubmit, menuItem}){
    const [image, setImage] = useState(menuItem?.image || '');
    const [name, setName] = useState(menuItem?.name || '');
    const [description, setDescription] = useState(menuItem?.description || '');
    const [basePrice, setBasePrice] = useState(menuItem?.basePrice || '');
    const [sizes, setSizes] = useState( menuItem?.sizes || []);
    const [category, setCategory] = useState(menuItem?.category || '')
    const [categories, setCategories] = useState([]);
    const [
        extraIngredientsPrices,
        setExtraIngredientsPrices,
    ] = useState(menuItem?.extraIngredientsPrices ||[]);

    useEffect( () => {
        fetch ('/api/categories').then (res => {
            res.json().then(categories => {
                setCategories(categories);
            })
        })
    }, [])

    return(
        <form
            onSubmit={ev =>
                onSubmit(ev, {
                    image, name, description, basePrice, sizes, extraIngredientsPrices, category,
                })
            }
            className="max-w-2xl mx-auto mt-8" >
        <div className="grid items-start gap-4" style={{gridTemplateColumns: '.3fr .7fr'}}>
            <div className="">
                <EditableImage link={image} setLink={setImage} />
            </div>
            <div className="grow">
                <label>Name</label>
                <input
                    value={name}
                    onChange={ ev => setName(ev.target.value)}
                    type="text"
                />
                <label>Description</label>
                <input
                    value={description}
                    onChange={ ev => setDescription(ev.target.value)}
                    type="text"
                />
                <label>Category</label>
                <select value={category} onChange={ev => setCategory(ev.target.value)}>
                    {categories?.length > 0 && categories.map(c => (
                        <option value={c._id}>{c.name}</option>
                    ))}
                </select>
                <label>Base price</label>
                <input
                    value={basePrice}
                    onChange={ ev => setBasePrice(ev.target.value)}
                    type="text"
                />
                <MenuItemPriceProps name={'Sizes'}
                                    addLabel={'Add item size'}
                                    props={sizes}
                                    setProps={setSizes}/>
                <MenuItemPriceProps name={'Extra ingredients'}
                                    addLabel={'Add ingridients extra'}
                                    props={extraIngredientsPrices}
                                    setProps={setExtraIngredientsPrices}/>
                <button type="submit" className="">Save</button>
            </div>
        </div>
    </form>
    )
};