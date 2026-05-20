import { useEffect, useState } from "react"

export default function Github() {
    const [data,setData] = useState<Record<string,number>>({})
    useEffect(() => {
        fetch('https://api.github.com/users/sukanta-cr7')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    }, [])
    return(
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github Followers : {data.followers}</div>
    )
}