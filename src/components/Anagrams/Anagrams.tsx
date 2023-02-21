import React, {useEffect, useState} from 'react';
import {NavButtons} from '../NavButtons/NavButtons';
import './Anagrams.scss';
import '../Past_word/Past_word.scss';

type Task = 'anagrams' | 'missingLettersOfWord' | 'missingNumber'
    | 'continueNumberRow' | 'missingLetter' | 'missingLetters'
    | 'enterSynonym' | 'missingLetterAndNumber' | 'missingWord';

type Props = {
    taskNo: number;
    setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
    taskType: Task;
    correctAnswer: string;
    enteredAnswers: [];
    setEnteredAnswers: React.Dispatch<React.SetStateAction<any>>
}

export const Anagrams: React.FC<Props> = (Props) => {
    const {
        taskNo,
        setQuestionNumber,
        taskType,
        enteredAnswers,
        setEnteredAnswers
    } = Props;
    const [firstInputValue, setFirstInputValue] = useState('');
    const [secondInputValue, setSecondInputValue] = useState('');
    const [isButtonActive, setIsButtonActive] = useState(false);

    useEffect(() => {
        setQuestionNumber(taskNo);

        if (taskType === 'missingLetters' || taskType === 'missingLetterAndNumber') {
            const input = enteredAnswers[taskNo - 1] || '';

            setFirstInputValue(input[0] || '');
            setSecondInputValue(input[1] || '');
        } else {
            setFirstInputValue(enteredAnswers[taskNo - 1] || '');
            setSecondInputValue(enteredAnswers[taskNo - 1] || '');
        }
    }, [taskNo]);

    useEffect(() => {
        const answers: any[] = [...enteredAnswers];

        if (taskType === 'missingLetters' || taskType === 'missingLetterAndNumber') {
            answers[taskNo - 1] = [firstInputValue, secondInputValue];

            if (firstInputValue !== '' && secondInputValue !== '') {
                setIsButtonActive(true);
            } else {
                setIsButtonActive(false);
            }
        } else {
            answers[taskNo - 1] = firstInputValue;

            if (firstInputValue !== '') {
                setIsButtonActive(true);
            } else {
                setIsButtonActive(false);
            }
        }
        setEnteredAnswers(answers);
    }, [firstInputValue, secondInputValue]);

    const checkType = () => {
        switch (taskType) {
        case 'anagrams': return 'Розв\'яжіть анаграми та виключіть зайве слово.';
        case 'missingLettersOfWord': return 'Вставте слово, яке є закінченням першого слова та початком другого.';
        case 'missingWord': return 'Вставте пропущене слово';
        case 'missingNumber': return 'Вставте пропущене число.';
        case 'continueNumberRow': return 'Продовжить ряд чисел.';
        case 'missingLetter': return 'Вставте пропущену літеру.';
        case 'missingLetters': return 'Вставте пропущені літери.';
        case 'enterSynonym': return 'Вставте слово, яке означало б те ж саме, що і слова, поза дужками.';
        case 'missingLetterAndNumber': return 'Вставте пропущену літеру і пропущене число.';
        default: return 'pizda';
        }
    };

    return (
        <div className="pastWord">
            <div className="anagrams_task">
                <img
                    className="anagrams_task_image"
                    src={require(`../../images/test${taskNo}/conditionImage.jpg`)}
                    alt=""
                />
            </div>

            <div className="condition_wrap">
                <p className="condition">
                    {checkType()}
                </p>
            </div>

            <div className="figures_divider"></div>

            {
                taskType === 'anagrams' &&
                <p className="anagrams_tip">
                    Примітка. Анаграма – слово в якому літери переставлені на інші місця
                </p>
            }

            {taskType === 'missingLetters' || taskType === 'missingLetterAndNumber' ? (
                <div className="pastWord_input">
                    <p className="pre-input-text">Введіть відповіді у поля (порядок символів не важливий)</p>
                    <div className="letter_inputs">
                        <input
                            type="text"
                            value={firstInputValue}
                            onChange={(e) => setFirstInputValue(e.target.value.toLowerCase())}
                            className="answer_input"
                            placeholder="Перша літера..."
                        />
                        <input
                            type="text"
                            value={secondInputValue}
                            onChange={(e) => setSecondInputValue(e.target.value.toLowerCase())}
                            className="answer_input"
                            placeholder="Друга літера..."
                        />
                    </div>
                </div>
            ) : (
                <div className="pastWord_input">
                    <p className="pre-input-text">Введіть відповідь у поле:</p>
                    <input
                        type="text"
                        value={firstInputValue}
                        onChange={(e) => setFirstInputValue(e.target.value.toLowerCase())}
                        className="modal_input"
                        placeholder="Відповідь..."
                    />
                </div>
            )}

            <div className="buttons">
                <NavButtons isActive={isButtonActive} taskNo={taskNo} />
            </div>

        </div>
    );
};
