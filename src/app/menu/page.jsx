'use client'
import MenuItem from "@/components/menu/MenuItem";
import SectionHeaders from "@/components/layout/SectionHeaders";
import { useEffect, useState } from "react";

export default function MenuPage() {
    const [categories, setCategories] = useState([]);
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        fetch('/api/categories').then(res => {
            res.json().then(categories => setCategories(categories));
        });
        fetch('/api/menu-items').then(res => {
            res.json().then(menuItems => setMenuItems(menuItems));
        })
    }, [])

    return(
        <section className="max-w-6xl mx-auto">
            {categories?.length > 0 && categories.map(c => (
                <div >
                    <div className="text-center">
                        <SectionHeaders mainHeader={c.name} />
                    </div>
                    <div className="grid gap-4 mt-6 mb-12 sm:grid-cols-3">
                        {menuItems.filter(item => item.category === c._id).map(item => (
                            <MenuItem key={item._id} {...item} />
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}