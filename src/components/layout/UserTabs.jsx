'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function UserTabs({isAdmin}) {
    const path = usePathname();
    console.log(path)
    return (
        <div className="flex justify-center gap-2 mb-8 tabs">
        <Link
        className={ path === '/profile' ? 'active' : ''}
        href={'/profile'}>
            Profile
        </Link>
        {isAdmin && (
            <>
                <Link href={'/categories'}
                    className={ path === '/categories' ? 'active' : ''}
                    >
                    Categories
                </Link>
                <Link href={'/menu-items'}
                    className={ path.includes('menu-items') ? 'active' : ''}
                    >
                    Menu items
                </Link>
                <Link href={'/users'}
                    className={ path.includes('users') ? 'active' : ''}

                >
                Users
                </Link>
                <Link href={'/orders'}
                    className={ path === '/orders' ? 'active' : ''}
                >
                Orders
                </Link>
            </>
        )}
    </div>
    )}
