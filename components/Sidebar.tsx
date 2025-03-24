'use client'
import Link from "next/link"
import Image from "next/image"
import { sidebarLinks } from "@/constants"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const Sidebar = ({ user }: SiderbarProps) => {
    const pathname = usePathname()
    return (
        <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between border-r border-gray-200 bg-white pt-8 max-md:hidden sm:p-4 xl:p-6 2xl:w-[355px]">
            <nav className="flex flex-col gap-7">
                <Link href='/' className="flex items-center gap-2 mb-12">
                    <Image
                        src='/icons/logo.svg'
                        alt=''
                        width={15}
                        height={15}
                        className='size-9'
                    />
                    <p className="font-semibold text-2xl hidden xl:block">HORIZON</p>
                </Link>

                <div className="">

                    {sidebarLinks.map(item => {
                        const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                        return <Link
                            href={item.route}
                            key={item.label} className={cn('flex items-center gap-3 py-1 md:p-3 2xl:p-4 justify-center xl:justify-start', { 'bg-blue-500 text-white rounded-lg': isActive })} >
                            <Image
                                src={item.imgURL}
                                alt=""
                                width={21} height={21}
                                className={cn({ 'brightness-[3] invert-0': isActive })}
                            />
                            <p className="hidden xl:flex">{item.label}</p>
                        </Link>
                    })}
                </div>
                USER
            </nav>
            FOOTER
        </section >
    )
}

export default Sidebar
