'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {signIn} from "next-auth/react";


export default function LoginPage(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginInProgress, setLoginInProgress] = useState(false);
    async function handleFormSubmit(ev){
        ev.preventDefault();
        setLoginInProgress(true);

        await signIn('credentials', {email, password, callbackUrl: '/' });

        setLoginInProgress(false);
    };

    return (
        <section className="my-8">
        <h1 className="mb-4 text-4xl text-center text-primary">Login</h1>
        <form className="max-w-xs mx-auto " onSubmit={handleFormSubmit}>
            <input
            name='email'
            disabled={loginInProgress}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            />
            <input
            name="password"
            disabled={loginInProgress}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            />
            <button type="submit" disabled={loginInProgress}>Login</button>
            <div className="my-4 text-center text-white">
            Or login with provider
            </div>
            <button
            type="button"
            onClick={() => signIn('google', {callbackUrl:'/'})}
            className="flex items-center justify-center gap-4 text-white" >
            <Image src="/google.png" alt="Google icon" width={32} height={32} />
            Login with Google
            </button>
            <div className="p-4 my-4 text-center text-white border-t">
                Dont have an account? {' '}
                <Link href={'/register'} className="text-center underline"> Register Here &raquo; </Link>
            </div>
        </form>
        </section>
    )
}