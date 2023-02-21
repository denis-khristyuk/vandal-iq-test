import React, {useEffect, useState} from 'react';
import './styles/App.scss';
import './styles/utils/_normalize.scss';
import {Background} from './components/Background/Background';
import {Modal} from './components/Modal/Modal';
import {Countdown} from './components/Countdown/Countdown';
import {Link} from 'react-router-dom';
import {TimedOffModal} from './components/TimedOffModal/TimedOffModal';

function App() {
    const [isPhoneModalActive, setIsPhoneModalActive] = useState(false);
    const [isTimedOff, setIsTimedOff] = useState(false);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [isStarted, setIsStarted] = useState(false);
    const [enteredAnswers, setEnteredAnswers] = useState<any>([]);
    const [seconds, setSeconds] = useState(+window.localStorage.timeLeft || 1800);

    useEffect(() => {
        const cookies = document.cookie.split('=')[1];
        if (cookies === 'true') {
            setIsTimedOff(true);
        }
        setSeconds(+window.localStorage.time || 1800);
    }, []);

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
        e.preventDefault();
        e.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return (
        <div className="App">
            <div className="app_main">
                <div className="header">
                    <div className="header_content">
                        <Link to={'/'}>
                            <img
                                src="https://i.ibb.co/Ht2kc89/header.png"
                                alt="vandal academy"
                                className="header_logo"
                            />
                            <p className="header_title">Академія Vandal Vape</p>
                        </Link>
                    </div>
                </div>

                <div className="main_content">
                    <div className="countdown">
                        <p className="timer">Залишилось часу: {
                            isStarted
                                ? <Countdown setIsTimedOff={setIsTimedOff} seconds={seconds} />
                                : '30.00'}
                        </p>
                    </div>

                    <div className="content_box">
                        <Background
                            setIsStarted={setIsStarted}
                            setQuestionNumber={setQuestionNumber}
                            setEnteredAnswers={setEnteredAnswers}
                            enteredAnswers={enteredAnswers}
                        />
                    </div>

                    {isStarted &&
                        <div className="questions_counter">
                            <p className="questions_counter_text">{`Питання ${questionNumber}/40`}</p>
                        </div>
                    }

                    {isPhoneModalActive && <Modal setActive={setIsPhoneModalActive}/>}
                    {isTimedOff && <TimedOffModal />}
                </div>

                <div className="footer"></div>
            </div>
        </div>
    );
}

export default App;
