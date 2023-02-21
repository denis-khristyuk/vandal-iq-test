import React, {useEffect, useRef, useState} from 'react';
import './Countdown.scss';

type Props = {
    seconds: number;
    setIsTimedOff: React.Dispatch<React.SetStateAction<boolean>>;
}

const formatTime = (time: number) => {
    let minutes: number | string = Math.floor(time / 60);
    let seconds: number | string = Math.floor(time - minutes * 60);

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    return `${minutes}:${seconds}`;
};

export const Countdown: React.FC<Props> = ({ seconds, setIsTimedOff }) => {
    const [countdown, setCountdown] = useState(seconds);
    const timerId: any = useRef();

    useEffect(() => {
        timerId.current = setInterval(() => {
            setCountdown(prev => prev - 1);
        }, 1000);
        return () => clearInterval(timerId.current);
    }, []);

    useEffect(() => {
        window.localStorage.timeLeft = countdown;

        if (countdown <= 0) {
            clearInterval(timerId.current);
            setIsTimedOff(true);
            const today = new Date();
            const tomorrow = new Date();
            tomorrow.setDate(today.getDate() + 1);

            document.cookie = `isTimedOff=true; expires=${tomorrow}`;

        }
    }, [countdown]);

    return (
        <p className="timer">{formatTime(countdown)}</p>
    );
};
