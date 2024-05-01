import Link from "next/link";

export default function AboutUsPage() {
    return (
        <>
            <h1 className="mb-16">Hello World</h1>
            <Link href="/login">LOGIN LINK</Link>
            <a href="/login" className="bg-purple-400 border p-12">Login</a>
        </>

);
    
}
