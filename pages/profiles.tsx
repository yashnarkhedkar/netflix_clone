import React from 'react'
import { NextPageContext } from 'next'
import { useRouter } from 'next/router'
import { getSession } from 'next-auth/react'
import useCurrentUser from '@/hooks/useCurrentUser';

const images = [
    '/images/default-blue.png',
    '/images/default-red.png',
    '/images/default-slate.png',
    '/images/default-green.png'
]

export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context);
    if (!session) {
        return {
            redirect: {
                destination: '/auth',
                permanent: false,
            }
        }
    }
    return {
        props: {}
    }
}

const profiles = () => {
    const router = useRouter();
    const { data: user } = useCurrentUser();
    const imgSrc = images[Math.floor(Math.random() * 4)];

    return (
        <div className='flex items-center justify-center h-full'>
            <div className='flex flex-col'>
                <h1 className='text-3xl md:text-6xl text-white text-center'>Who&#39;s watching?</h1>
                <div className="flex items-center justify-center gap-8 mt-10">
                    <div onClick={() => { router.push('/') }}>
                        <div className="group flex-row w-44 mx-auto">
                            <div
                                className='w-44
                                        h-44
                                        rounded-md 
                                        flex 
                                        items-center 
                                        justify-center
                                        border-2 
                                        border-transparent 
                                        group-hover:cursor-pointer 
                                        group-hover:border-white 
                                        overflow-hidden'
                            >
                                <img src={imgSrc} alt="Profile" />
                            </div>

                            <div className='mt-4 text-gray-400 text-2xl text-center group-hover:text-white'>
                                {user?.name}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default profiles