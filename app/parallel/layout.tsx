import { ReactNode } from "react";


export default async function Layout({children, left}: {children: ReactNode, left: ReactNode}) {
    return (
        <div>
        <h1>Layout</h1>
        <div className="flex">
            {children}
            {left}
        </div>
        </div>
    )
}