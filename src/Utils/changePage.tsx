import { FormEvent } from 'react'

import { useRouter } from 'next/router'

export default function changePage(page: string) {
    const router = useRouter()

    const handleClick = (e: FormEvent) => {
        e.preventDefault()
        router.push(page)
    }
    return handleClick
}
