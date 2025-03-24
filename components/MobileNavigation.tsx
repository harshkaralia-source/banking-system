'use client'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const MobileNavigation = ({ user }: MobileNavProps) => {
    const pathname = usePathname()
    return (
        <section className="w-full max-w-[264px]">
            <Sheet>
                <SheetTrigger>
                    <Image
                        src='/icons/hamburger.svg'
                        width={30}
                        height={30}
                        alt=""
                        className="cursor-pointer"
                    />
                </SheetTrigger>
                <SheetContent side="left" className="p-5 bg-white text-black border-0">
                    <Link href='/' className="flex items-center gap-2 mb-12">
                        <Image
                            src='/icons/logo.svg'
                            alt=''
                            width={15}
                            height={15}
                            className='size-9'
                        />
                        <p className="font-semibold text-2xl ">HORIZON</p>
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
                                    width={21}
                                    height={21}
                                    className={cn({ 'brightness-[3] invert-0': isActive })}
                                />
                                <p className="hidden xl:flex">{item.label}</p>
                            </Link>
                        })}
                    </div>

                </SheetContent>
            </Sheet>

        </section>
    )
}

export default MobileNavigation
