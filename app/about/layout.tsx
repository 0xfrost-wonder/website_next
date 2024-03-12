import React from 'react'

export default function Aboutlayout({
    children,
}: {children:React.ReactNode}) {
    return (
        <>
            <nav>About NavBar</nav>
            <main>
                {children}
            </main>
        </>
    )
}
