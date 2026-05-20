import { useParams } from 'react-router-dom'

export default function User() {
    const {UserId} = useParams()
    return (
        <div className='bg-gray-600 text-white text-3xl p-4'>User : {UserId}</div>
    )
}