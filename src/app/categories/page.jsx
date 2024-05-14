'use client'
import DeleteButton from "@/components/DeleteButton";
import UserTabs from "@/components/layout/UserTabs";
import {useProfile} from '@/components/UseProfile'
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function CategoriesPage() {

    const [categoryName, setCategoryName] = useState('');
    const [categories, setCategories] = useState([]); // [{name: 'category1'}, {name: 'category2'}
    const {loading:profileLoading, data:profileData} = useProfile();
    const [editedCategory, setEditedCategory] = useState(null);

    useEffect( () => {
        fetchCategories();
    }, [])

    function fetchCategories() {
        fetch('/api/categories').then( res => {
            res.json().then(categories => {
                setCategories(categories);
            });
        });
    }

    async function handleDeleteClick(_id) {
        console.log('deleting category', _id)
        const promise = new Promise(async (resolve, reject) => {
            const response = await fetch('/api/categories?_id='+_id, {
                method: 'DELETE',
            });
            if (response.ok) {
                resolve();
            } else {
                reject();
            }
        });

        await toast.promise(promise, {
            loading: 'Deleting...',
            success: 'Deleted',
            error: 'Error',
        });

        fetchCategories();
    }

    async function handleCategorySubmit(ev){
        ev.preventDefault();
        const creationPromise = new Promise( async (resolve, reject) => {
            const data = {name: categoryName};
            if (editedCategory ){
                data._id = editedCategory._id;
            }
            const response = await fetch('/api/categories', {
                method: editedCategory ? 'PUT' : 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            });
            setCategoryName('');
            fetchCategories();
            if(response.ok)
                resolve()
            else
                reject();
        });
        await toast.promise(creationPromise, {
            loading: editedCategory
                    ? 'Updating category'
                    : 'Creating category...',
            success: editedCategory
                    ? 'Category updated'
                    : 'Category created',
            error: 'Error creating category'
        })
    }


    if(profileLoading){
        return 'Loading user info...';
    }
    if(!profileData){
        return 'Not an admin';
    }

    return (
        <section className="max-w-2xl mx-auto my-8 ">
            <UserTabs isAdmin={true}/>
            <form className="mt-8" onSubmit={handleCategorySubmit}>
                <div className="flex items-end gap-2">
                    <div className=" grow">
                        <label >
                            {editedCategory ? 'Update category ' : 'New category name '}
                            {editedCategory&& (
                                <>: <b>{editedCategory.name}</b> </>
                            )}
                        </label>
                        <input type="text" className=""
                                value={categoryName}
                                onChange={ev => setCategoryName(ev.target.value)}/>
                    </div>
                    <div className="flex gap-2 pb-2">
                        <button type="submit"className="border ">
                            {editedCategory ? 'Update' : 'Create'}
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                setEditedCategory(null);
                                setCategoryName('');
                            }}>
                                Cancel
                        </button>
                    </div>
                </div>
            </form>
            <div className="">
                <h2 className="mt-8 text-sm text-gray-500">Existing categories:</h2>
                {categories?.length > 0 && categories.map( c => (
                    <div
                        className="flex items-center gap-1 p-2 px-4 mb-1 bg-gray-100 rounded-xl">
                        <div
                            className="grow">{c.name}
                        </div>
                    <div className="flex gap-1">
                        <button type="button"
                                onClick={ () => {
                                    setEditedCategory(c);
                                    setCategoryName(c.name);
                        }}>
                                Edit
                        </button>
                        <DeleteButton label={'delete'}
                                        onDelete={() => handleDeleteClick(c._id)}/>
                    </div>
                    </div>
                ))}
            </div>
        </section>
    )
}