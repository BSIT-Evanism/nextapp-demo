import { PropsWithChildren } from "react";



export default async function Layout({children}: PropsWithChildren) {
    return (
        <div>

            <header>
                <nav>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </nav>
            </header>
            {children}
        </div>
    )
}