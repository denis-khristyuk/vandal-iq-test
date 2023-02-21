import React, {useEffect, useState} from 'react';
import './Result.scss';
import {Link} from 'react-router-dom';

type Props = {
    enteredAnswers: [];
}

export const Result: React.FC<Props> = (Props) => {
    const { enteredAnswers } = Props;
    const [result, setResult] = useState(75);

    const correctAnswers = [
        4,
        'чай',
        'валіза',
        '11',
        'жаба',
        '25',
        '3',
        'тісто',
        6,
        5,
        'ї',
        'шок',
        '54',
        '11',
        '27',
        ['р', 'т'],
        2,
        2,
        '18',
        '76',
        'хата',
        'лад',
        'сарай',
        'кисть',
        'п',
        ['с', 'н'],
        2,
        1,
        1,
        'грот',
        'біг',
        '64',
        'опір',
        'вівторок',
        ['є', '7'],
        'губа',
        'нива',
        1,
        6,
        1
    ];

    useEffect(() => {
        calculateResult();
    }, []);

    const getSummary = () => {
        if (result >= 90 && result < 100) {
            return 'Непоганий результат!';
        } else if (result >= 100 && result < 130) {
            return 'Хороший результат';
        } else if (result > 130) {
            return 'Дуже хороший результат! Майже ідеально!';
        } else if (result === 160) {
            return 'Ідеально! Ви дуже розумний)';
        }

        return 'Слабий результат';
    };

    const calculateResult = () => {
        let currentResult = 75;

        console.log(correctAnswers);
        console.log(enteredAnswers);
        console.log(JSON.stringify(enteredAnswers) === JSON.stringify(correctAnswers));

        for (let i = 0; i <= correctAnswers.length; i++) {
            if (Array.isArray(correctAnswers[i])) {
                const enteredAnswer: any = enteredAnswers[i];
                const correctAnswer: any = correctAnswers[i];

                if (correctAnswer.includes(enteredAnswer[0]) && correctAnswer.includes(enteredAnswer[1])) {
                    currentResult += 2.5;
                } else {
                    console.log('incorrect answer on index: ' + i);
                }

            }

            if (correctAnswers[i] === enteredAnswers[i]) {
                currentResult += 2.5;
            } else {
                console.log('incorrect answer on index: ' + i);
            }
        }

        if (currentResult >= 160) {
            setResult(160);
        }

        setResult(currentResult);
    };

    return (
        <div className="result">
            <p className="result_title">Набрано балів:</p>
            <p className="result_points">{Math.round(result)}</p>
            <p className="result_summary">{getSummary()}</p>
            <div className="result_statistic">
                <p className="result_statistic_text">
                    {'Згідно зі статистикою Близько 50 % результатів потрапляє в межі 100 ± 10. За межами двох стандартних відхилень від медіани перебувають близько 4,6 % результатів: 2,3 % з балами < 70 і стільки ж з балами > 130. Менше 70 часто кваліфікується як розумова відсталість.'}
                </p>
            </div>

            <Link to={'/'} className="link">
                <div className="result_button_wrapper">
                    <button className="button">
                        <p className="button_text_next">На головну</p>
                    </button>
                </div>
            </Link>
        </div>
    );
};
