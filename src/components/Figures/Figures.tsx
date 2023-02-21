import React, {useEffect, useState} from 'react';
import './Figures.scss';
import {NavButtons} from '../NavButtons/NavButtons';

const checked = require('../../images/checkbox-checked.png');
const empty = require('../../images/checkbox-empty.png');

type Props = {
    taskNo: number,
    figuresCount: number,
    setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
    correctAnswer: number;
    enteredAnswers: [];
    setEnteredAnswers: React.Dispatch<React.SetStateAction<any>>;
}

export const Figures: React.FC<Props> = (Props) => {
    const {
        taskNo,
        figuresCount,
        setQuestionNumber,
        enteredAnswers,
        setEnteredAnswers
    } = Props;
    const [selectedVariant, setSelectedVariant] = useState(0);

    useEffect(() => {
        setQuestionNumber(+window.location.pathname.slice(1));
        setSelectedVariant(enteredAnswers[taskNo - 1] || 0);
    }, [taskNo]);

    useEffect(() => {
        const answers: number[] = [...enteredAnswers];

        answers[taskNo - 1] = selectedVariant;

        setEnteredAnswers(answers);
    }, [selectedVariant]);

    return (
        <div className="figures">
            <img src={require(`../../images/test${taskNo}/figures.jpg`)} alt="" className="figures_img"/>
            <p className="condition">Оберіть правильну фігуру</p>
            <div className="figures_divider"></div>
            <div className="answer_options">
                <div
                    className="answer_option"
                    onClick={() => setSelectedVariant(1)}
                >
                    <img className="answer_option_img" src={require(`../../images/test${taskNo}/figure1.jpg`)} />
                    <img className="answer_option_checkmark" src={selectedVariant === 1 ? checked : empty} />
                </div>

                <div
                    className="answer_option"
                    onClick={() => setSelectedVariant(2)}
                >
                    <img className="answer_option_img" src={require(`../../images/test${taskNo}/figure2.jpg`)} />
                    <img className="answer_option_checkmark" src={selectedVariant === 2 ? checked : empty} />
                </div>

                <div
                    className="answer_option"
                    onClick={() => setSelectedVariant(3)}
                >
                    <img className="answer_option_img" src={require(`../../images/test${taskNo}/figure3.jpg`)} />
                    <img className="answer_option_checkmark" src={selectedVariant === 3 ? checked : empty} />
                </div>

                <div
                    className="answer_option"
                    onClick={() => setSelectedVariant(4)}
                >
                    <img className="answer_option_img" src={require(`../../images/test${taskNo}/figure4.jpg`)} />
                    <img className="answer_option_checkmark" src={selectedVariant === 4 ? checked : empty} />
                </div>

                {figuresCount === 6 &&
                    <>
                        <div
                            className="answer_option"
                            onClick={() => setSelectedVariant(5)}
                        >
                            <img className="answer_option_img" src={require(`../../images/test${taskNo}/figure5.jpg`)} />
                            <img className="answer_option_checkmark" src={selectedVariant === 5 ? checked : empty} />
                        </div>

                        <div
                            className="answer_option"
                            onClick={() => setSelectedVariant(6)}
                        >
                            <img className="answer_option_img" src={require(`../../images/test${taskNo}/figure6.jpg`)} />
                            <img className="answer_option_checkmark" src={selectedVariant === 6 ? checked : empty} />
                        </div>
                    </>
                }
            </div>

            <div className="buttons">
                <NavButtons taskNo={taskNo} isActive={selectedVariant !== 0 ? true : false} />
            </div>
        </div>
    );
};
