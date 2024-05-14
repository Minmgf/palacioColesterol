"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [creatingUser, setCreatingUser] = useState(false);
const [userCreated, setUserCreated] = useState(false);
const [error, setError] = useState(false);
async function handleFormSubmit(ev) {
    ev.preventDefault();
    setCreatingUser(true);
    setUserCreated(false);
    setError(false);
    const response = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        setUserCreated(true);
    }
    else{
        setError(true);
    }
    setCreatingUser(false);

}

return (
    <section className="my-8">
    <h1 className="mb-4 text-4xl text-center text-primary">Register</h1>

    {userCreated && (
        <div className="my-4 text-center">
            User created. <br />
            Now you can <Link href="/login" className="underline">login &raquo;</Link>
        </div>
    )}
    {error && (
        <div className="my-4 text-center">
            An error has occured. <br />
            please try again later.
        </div>
    )}

    <form
        action=""
        className="block max-w-xs mx-auto"
        onSubmit={handleFormSubmit}
    >
        <input
        disabled={creatingUser}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
        disabled={creatingUser}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
        />
        <button type="submit" disabled={creatingUser}>
            Register
        </button>
        <div className="my-4 text-center text-white">
        Or login with provider
        </div>
        <button
        onClick={() => signIn('google', {callbackUrl:'/'})}
        className="flex items-center justify-center gap-4 text-white">
        <Image src="/google.png" alt="Google icon" width={32} height={32} />
        Login with Google
        </button>
        <div className="p-4 my-4 text-center text-white border-t">
            Existing account? {' '}
            <Link href={'/login'} className="text-center underline"> Login Here &raquo; </Link>
        </div>
    </form>
    </section>
);
}
