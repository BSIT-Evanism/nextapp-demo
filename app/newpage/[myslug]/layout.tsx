import { PropsWithChildren, ReactNode } from "react";



export default async function Layout({children, params}: {children: ReactNode, params: {myslug: string}}) {

    const data = await fetch('https://fakestoreapi.com/products')

    const res = await data.json()

    return (
        <div className="border-2 p-2 m-2">
            <h1>
                Im a nested layout in {params.myslug}
            </h1>
            {children}
            <div>
                {JSON.stringify(res)}
            </div>
        </div>
    )
}