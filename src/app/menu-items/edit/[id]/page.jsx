'use client'
import DeleteButton from "@/components/DeleteButton";
import Left from "@/components/icons/Left";
import EditableImage from "@/components/layout/EditableImage";
import MenuItemForm from "@/components/layout/MenuItemForm";
import UserTabs from "@/components/layout/UserTabs";
import { useProfile } from "@/components/UseProfile";
import Link from "next/link";
import { redirect, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";


export default function EditMenuItemPage() {

    const {id} = useParams();

    const [menuItem, setMenuItem] = useState(null);
    const [redirectToItems, setRedirectToItems] = useState(false);
    const {loading, data} = useProfile();

    useEffect( () => {
        fetch('/api/menu-items').then(res => {
            res.json().then(items => {
                const item = items.find(i => i._id === id);
                setMenuItem(item);
            });
        })
    }, []);


    async function handleFormSubmit(ev, data) {
        ev.preventDefault();
        data = {...data, _id: id};
        const savingPromise = new Promise ( async( resolve, reject) => {
            const response = await fetch('/api/menu-items', {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {'Content-Type': 'application/json'}
            });
            if (response.ok)
                resolve();
            else
                reject();
        });

        await toast.promise(savingPromise, {
            loading: 'Saving item',
            success: 'Saved!',
            error: 'Error saving data'
        });

        setRedirectToItems(true);
    }

    async function handleDeleteClick(){
        const promise = new Promise( async (resolve, reject) => {
            const res = await fetch(`/api/menu-items?_id=`+id, {
            method: 'DELETE',
        });
        if(res.ok)
            resolve();
        else
            reject();
        });

        await toast.promise(promise, {
            loading: 'Deleting item',
            success: 'Item deleted',
            error: 'Error deleting item'
        })

        setRedirectToItems(true);
    }


    if (redirectToItems) {
        return redirect('/menu-items');
    }

    // Solucion al no renderizado de los detalles del item
    if (!menuItem && !loading) {
        return <p>Loading item details...</p>;
    }

    if(loading){
        return 'Loading user info...';
    }
    if(!data.admin){
        return 'Not an admin.';
    }

    return (
        <section className="my-8">
            <UserTabs isAdmin={true}/>
            <div className="max-w-md mx-auto mt-8">
                <Link href={'/menu-items'} className="button">
                    <Left/>
                    <span>Show all menu items</span>
                </Link>
            </div>
            <MenuItemForm menuItem={menuItem} onSubmit={handleFormSubmit}/>
            <div className="max-w-md mx-auto mt-4">
                <div className="max-w-sm pl-20 ml-auto">
                    <DeleteButton
                        label={'Delete this menu item'}
                        onDelete={handleDeleteClick}/>
                </div>
            </div>
        </section>
    );
}