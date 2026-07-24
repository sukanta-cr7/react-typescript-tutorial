import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

type GithubUser = {
    followers: number
    avatar_url: string
}

export default function Github() {
    const data = useLoaderData() as GithubUser
    // const [data, setData] = useState<GithubUser | null>(null)

    // useEffect(() => {
    //     fetch('https://api.github.com/users/sukanta-cr7')
    //         .then(response => response.json())
    //         .then((userData: GithubUser) => {
    //             console.log(userData)
    //             setData(userData)
    //         })
    // }, [])

    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
            Github Followers : {data?.followers ?? 0}
            {data?.avatar_url ? <img src={data.avatar_url} alt="git picture" width="300" /> : null}
        </div>
    )
}

export const githubInfoLoader = async (): Promise<GithubUser> => {
    const response = await fetch('https://api.github.com/users/sukanta-cr7')
    const data = await response.json() as GithubUser
    return data
}