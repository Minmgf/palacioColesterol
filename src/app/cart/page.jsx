'use client'
import { CartContext, cartProductPrice } from "@/components/AppContext";
import Trash from "@/components/icons/Trash";
import AddressInputs from "@/components/layout/AddressInputs";
import SectionHeaders from "@/components/layout/SectionHeaders";
import { useProfile } from "@/components/UseProfile";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

export default function CartPage() {
    const {cartProducts, removeCartProduct } = useContext(CartContext);
    const [address, setAddress] = useState({});
    const {data: profileData} = useProfile();

    useEffect( () => {
        if(profileData?.city){
            const {phone, streetAddress, city, zipCode, country} = profileData;
            const addressFromProfile = {
                phone,
                streetAddress,
                city,
                zipCode,
                country,
            };
            setAddress(addressFromProfile);
        }
    } , [profileData])

    function handleAddressChange(propName, value){
        setAddress( prevAddress => ({ ...prevAddress, [propName]: value}));
    }

    let total = 0;
    for( const p of cartProducts){
        total += cartProductPrice(p);
    }
    return(
        <section className="mx-auto my-8 ">
            <div className="text-center">
                <SectionHeaders mainHeader="Cart" />
            </div>
            <div className="grid grid-cols-2 gap-8 mt-8 ">
                <div>
                    {cartProducts?.length === 0 && (
                        <div className="">
                            No items in cart
                        </div>
                    )}
                    {cartProducts?.length > 0 && cartProducts.map((product, index) => (
                        <div className="flex items-center gap-4 py-4 border-b">
                            <div className="w-24">
                                <Image src={product.image} alt={""} width={240} height={240}/>
                            </div>
                            <div className="grow">
                                <h3 className="font-semibold">
                                    {product.name}
                                </h3>
                                {product.size && (
                                    <div className="text-sm ">Size: <span>{product.size.name}</span></div>
                                )}
                                {product.extras?.length > 0 &&(
                                    <div className="text-sm text-gray-500">
                                        {product.extras.map(extra => (
                                            <div >{extra.name} ${extra.price}</div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="text-lg font-semibold">
                                ${cartProductPrice(product)}
                            </div>
                            <div className="ml-2">
                                <button
                                type="button"
                                onClick={() => removeCartProduct(index)}
                                className="p-2">
                                    <Trash/>
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="py-2 pr-16 text-right">
                        <span className="text-gray-500">
                            Subtotal:
                        </span>
                        <span className="pl-2 text-lg font-semibold">
                            ${total}
                        </span>
                    </div>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg">
                    <h2>Checkout</h2>
                    <form action="">
                        <AddressInputs
                            addressProps={address}
                            setAddressProp={handleAddressChange}
                            />
                        <button type="submit"> Pay ${total}</button>
                    </form>

                </div>
            </div>
        </section>
    )
};