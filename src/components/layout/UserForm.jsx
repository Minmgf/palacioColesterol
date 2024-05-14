import { useState } from "react";
import EditableImage from "./EditableImage";
import { useProfile } from "../UseProfile";
import toast from "react-hot-toast";
import AddressInputs from "./AddressInputs";

export default function UserForm({ user, onSave }) {
    console.log(user);
    const [userName, setUserName] = useState(user?.name || '');
    const [image, setImage] = useState(user?.image || '');
    const [phone, setPhone] = useState(user?.phone || '');
    const [streetAddress, setStreetAddress] = useState(user?.streetAddress || '');
    const [zipCode, setZipCode] = useState(user?.zipCode || '');
    const [city, setCity] = useState(user?.city || '');
    const [country, setCountry] = useState(user?.country || '');
    const [admin, setAdmin] = useState(user?.admin || false);
    const {data:loggedInUserData} = useProfile();

    function handleAddressChange(propName, value){
        if(propName === 'phone') setPhone(value);
        if(propName === 'streetAddress') setStreetAddress(value);
        if(propName === 'zipCode') setZipCode(value);
        if(propName === 'city') setCity(value);
        if(propName === 'country') setCountry(value);
    }



    return (
        <div className="flex gap-4">
            <div>
                <div className="p-2 rounded-lg relative max-w-[180px]">
                    <EditableImage link={image} setLink={setImage} />
                </div>
            </div>
            <form
                className="grow"
                onSubmit={ev => {
                    ev.preventDefault(); // Prevent default form submission
                    onSave(ev, {
                        name:userName,
                        image,
                        phone,
                        streetAddress,
                        zipCode,
                        city,
                        country,
                        admin
                    });
                }}
            >
                <label htmlFor="name">First and last name</label>
                <input
                    type="text"
                    id="name"
                    placeholder="First and last name"
                    value={userName}
                    onChange={ev => setUserName(ev.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Email address"
                    value={user?.email || ''} // Check user is defined before accessing email
                    disabled={true}
                />
                <AddressInputs addressProps={{phone, streetAddress, zipCode, city, country}}
                                setAddressProp={handleAddressChange} />
                {loggedInUserData?.admin && (
                <div className="">
                    <label htmlFor={'adminCB'} className="inline-flex items-center gap-2 p-2 mb-2">
                        <input
                            type="checkbox" className="" id="adminCB" value={'1'}
                            checked={admin}
                            onClick={ev => setAdmin(ev.target.checked)}
                            />

                        <span>Admin</span>
                    </label>
                </div>
                )}
                <button type="submit">Save</button>
                <p className="mt-4 text-xs font-semibold text-center text-gray-500 underline">Algunos cambios se verán reflejados al iniciar sesión de nuevo.</p>
            </form>
        </div>
    );
}
