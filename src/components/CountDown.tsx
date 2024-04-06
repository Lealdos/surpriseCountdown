import { useEffect, useState } from 'react';
import { calculateCountdown } from '@lib/countDown.ts';
interface Props {
    date: string;
}

export function Countdown({ date }: Props) {
    const [countdown, setCountdown] = useState(calculateCountdown(date));

    useEffect(() => {
        // Update countdown every second
        const interval = setInterval(() => {
            setCountdown(calculateCountdown(date));
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    if (countdown === null) {
        return <p className='text-2xl'>Listo para abrir</p>;
    } else {
        return (
            <p className=' text-balance text-center text-yellow-500 font-semibold italic text-2xl'>
                Faltan <br />
                {countdown?.days}D / {countdown?.hours}H / {countdown?.minutes}M
                /{countdown?.seconds}S <br />
                para poder abrirlo
            </p>
        );
    }
}
