import { useContext, useState } from "react";
import { CartContext } from "../AppContext";
import toast from "react-hot-toast";
import MenuItemTile from "./MenuItemTile";
import Image from "next/image";
import FlyingButton from "react-flying-item";

export default function MenuItem(menuItem) {
    const {
        image, name, description, basePrice,
        sizes, extraIngredientsPrices
    } = menuItem;

    const [
        selectedSize, setSelectedSize
    ] = useState(sizes?.[0] || null);
    const [selectedExtras, setSelectedExtras] = useState([]);
    const { addToCart } = useContext(CartContext);
    const [showPopup, setShowPopup] = useState(false);


    async function handleAddToCarButtonClick() {
        const hasOptions = sizes.length > 0 && extraIngredientsPrices.length > 0;
        if(hasOptions && !showPopup){
            setShowPopup(true);
            return;
        }
        addToCart(menuItem, selectedSize, selectedExtras);
        await new Promise(resolve => setTimeout(resolve, 1000));
            setShowPopup(false);


        toast.success('Item added to cart', {
            position: 'bottom-right'
        });

    }

    function handleExtraThingClick(ev, extraThing){
        const checked = ev.target.checked;
        if (checked){
            setSelectedExtras(prev => [...prev, extraThing]);
        }else{
            setSelectedExtras(prev => {
                return prev.filter(e => e.name !== extraThing.name)
            });
        }
    }

    let selectedPrice = basePrice;
    if (selectedSize){
        selectedPrice += selectedSize.price;
    }
    if( selectedExtras.length > 0){
        for (const extra of selectedExtras){
            selectedPrice += extra.price;
        }
    }

    return (
        <>
            {showPopup && (
                <div
                onClick={() => setShowPopup(false)}
                className="fixed inset-0 flex items-center justify-center bg-black/80">
                    <div
                    onClick={ev => ev.stopPropagation()}
                    className="max-w-md p-2 my-8 bg-white rounded-lg ">
                        <div className="p-2 overflow-y-scroll"
                            style={{maxHeight:'calc(100vh - 120px)'}}>
                            <Image
                                src={image}
                                alt={name}
                                width={300}
                                height={200}
                                className="mx-auto" />
                            <h2 className="mb-4 text-lg font-bold text-center">{name}</h2>
                            <p className="mb-2 text-sm text-gray-500 text-wrap ">{description}</p>
                            {sizes?.length > 0 && (
                                <div className="py-2 rounded-lg">
                                    <h3 className="text-center text-gray-700">Pick your size</h3>
                                    {sizes.map(size => (
                                        <label className="flex items-center gap-2 p-4 mb-2 border rounded-md">
                                            <input
                                            onClick={() => setSelectedSize(size)}
                                            checked={selectedSize?.name === size.name}
                                            type="radio"
                                            name="size"/>
                                            {size.name} ${basePrice + size.price}
                                        </label>
                                    ))}
                                </div>
                            )}
                            {extraIngredientsPrices?.length > 0 && (
                                <div className="py-2 rounded-lg">
                                    <h3 className="text-center text-gray-700">Any extras?</h3>
                                    {extraIngredientsPrices.map(extraThing => (
                                        <label className="flex items-center gap-2 p-4 mb-2 border rounded-md">
                                            <input
                                            type="checkbox"
                                            onClick={ev => handleExtraThingClick(ev, extraThing)}
                                            name={extraThing.name}/>
                                            Extra {extraThing.name} +${ extraThing.price}
                                        </label>
                                    ))}
                                </div>
                            )}
                            <FlyingButton targetTop={'5%'} targetRight={'95%'} src={image}>
                                <div className="sticky bottom-2 "
                                    onClick={handleAddToCarButtonClick}>
                                    Add to cart ${selectedPrice}
                                </div>
                            </FlyingButton>
                            <button
                                className="mt-2"
                                onClick={() => setShowPopup(false)}>
                                    Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <MenuItemTile onAddToCart={handleAddToCarButtonClick}
                {...menuItem} />
        </>
    )
}