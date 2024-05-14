'use client';
import Right from "@/components/icons/Right";
import UserTabs from "@/components/layout/UserTabs";
import { useProfile } from "@/components/UseProfile";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MenuItesmsPage(){


    const [menuItems, setMenuItems] = useState([]);
    const {loading, data} = useProfile();

    useEffect( () => {
        fetch('/api/menu-items').then(res => {
            res.json().then(menuItems => {
                setMenuItems(menuItems);
            });
        })
    }, []);

    if (loading){
        return 'Loading user info...'
    }
    if (!data.admin){
        return 'Not an admin'
    }


    return (
        <section className="max-w-2xl mx-auto my-8">
            <UserTabs isAdmin={true}/>
            <div className="mt-8">
                <Link
                    className="flex button"
                    href={'/menu-items/new'}>
                        <span>Create new menu item</span>
                    <Right/>
                </Link>
            </div>
            <div className="">
                <h2 className="mt-8 text-sm text-gray-500">Edit menu items</h2>
                <div className="grid content-center grid-cols-3 gap-2">
                    {menuItems?.length > 0 && menuItems.map( item => (
                        <Link href={'/menu-items/edit/'+item._id}
                                className="flex-col p-4 bg-gray-100 rounded-lg justify-self-center">
                            <div className="relative w-44 h-4w-44">
                                <Image
                                className="rounded-md "
                                src={item.image} alt="image" width={200} height={200} />
                            </div>
                            <div className="text-center">
                                {item.name}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};