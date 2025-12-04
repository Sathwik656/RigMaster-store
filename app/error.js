'use client'
import { useEffect } from "react"
import Link from "next/link"
export default function Error(props){
    const {error, resrt} = props

    useEffect(() => {
        console.log(error)
    }, [error])
    return (
        <div>
            <h3>Something went wrong</h3>
            <div>
                <button onClick={resrt}>Reset</button>
                <Link href={'/'}><button>Home</button></Link>  
            </div>
        </div>
    )
}