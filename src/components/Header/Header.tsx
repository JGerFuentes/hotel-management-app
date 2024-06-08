import Link from 'next/link'

const Header = () => {
    return (
        <header className="py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between">
            <div className="flex items-center w-full md:w-2/3">
                <Link href="/" className='font-black text-[#F27405]'>
                    HotelApp
                </Link>
                <ul className='flex items-center ml-5'>
                    <li></li>
                </ul>
            </div>
        </header>
    )
}

export default Header