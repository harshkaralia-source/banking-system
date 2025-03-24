'use client'
import CountUp from "react-countup"

const AnimatedCounter = ({ amount }: { amount: number }) => {
    return (
        <div>
            <CountUp
                prefix="$"
                decimals={2}
                decimal="."
                end={amount}
            />
        </div>
    )
}

export default AnimatedCounter
