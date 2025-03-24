import { formatAmount } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BankCard = ({ account, userName, showBalance = true }: CreditCardProps) => {
    return (
        <div className='flex flex-col'>
            <Link href='/' className='relative flex h-[190px] w-full max-w-[320px] justify-between rounded-[20px] border border-white bg-blue-500'>
                <div className="relative z-10 flex size-full max-w-[228px] flex-col justify-between rounded-l-[20px]  px-5 pb-4 pt-5">
                    <div className="">
                        <h1 className="text-white font-semibold">
                            {account.name || userName}
                        </h1>
                        <p className="font-serif font-black text-white">
                            {formatAmount(account.currentBalance)}
                        </p>
                    </div>

                    <article className='flex flex-col gap-2'>
                        <div className="flex justify-between">
                            <h1 className="text-xs font-semibold text-white">
                                {userName}
                            </h1>
                            <h2 className="text-xs font-semibold text-white">
                            ●● / ●●
                            </h2>
                        </div>

                        <p className="text-sm font-semibold tracking-[1.1px] text-white">
                        ●●●● ●●●● ●●●● <span className='text-base'>
                                1234
                            </span>
                        </p>
                    </article>
                </div>

                <div className="flex size-full flex-1 flex-col items-end justify-between rounded-r-[20px] bg-cover bg-center bg-no-repeat py-5 pr-5">
                    <Image
                        src='/icons/Paypass.svg'
                        alt=''
                        width={20}
                        height={24}
                        className=''
                    />
                    <Image
                        src='/icons/mastercard.svg'
                        alt=''
                        width={45}
                        height={32}
                        className='ml-5'
                    />
                </div>
                <Image
                    src='/icons/lines.png'
                    alt=''
                    width={316}
                    height={190}
                    className='absolute top-0 left-0'
                />
            </Link>
        </div>
    )
}

export default BankCard
