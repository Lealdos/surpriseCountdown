import { useEffect, useState } from 'react';
interface Props {
    date: string;
}

export function Countdown({ date }: Props) {
    const [countdown, setCountdown] = useState(calculateCountdown());

    function calculateCountdown() {
        const targetDate = new Date(date);
        const now = new Date();
        if (targetDate < now) {
            return null;
        }
        const difference = targetDate.getTime() - now.getTime();

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
            (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    }

    useEffect(() => {
        // Function to calculate the time remaining

        // Update countdown every second
        const interval = setInterval(() => {
            setCountdown(calculateCountdown());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <p className='text-base text-balance text-center text-yellow-500 font-semibold italic'>
            {countdown?.days} d / {countdown?.hours} H / {countdown?.minutes} /
            M /{countdown?.seconds} S
        </p>
    );
}
