import MobileNavigation from "@/components/MobileNavigation";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const loggedIn = { firstName: 'Harsh', lastName: 'Karalia' }
    return (
        <main className="flex h-screen w-full">
            <Sidebar user={loggedIn} />
            <div className="flex size-full flex-col ">
                <div className="flex h-16 items-center justify-between p-5 sm:p-8 md:hidden">
                    <Image
                        src='/icons/logo.svg'
                        alt=''
                        width={15}
                        height={15}
                        className='size-9'
                    />

                    <div className="">
                        <MobileNavigation user={loggedIn} />
                    </div>
                </div>
                {children}
            </div>
        </main>
    );
}
