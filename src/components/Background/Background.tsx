import React from 'react';
import './Background.scss';
import '../NavButtons/NavButtons.scss';
import {Route, Routes} from 'react-router';
import {Figures} from '../Figures/Figures';
import {Instruction} from '../Instruction/Instruction';
import {NotFoundPage} from '../NotFoundPage/NotFoundPage';
import {Anagrams} from '../Anagrams/Anagrams';
import {Result} from '../Result/Result';

type Props = {
    setIsStarted: React.Dispatch<React.SetStateAction<boolean>>;
    setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
    setEnteredAnswers: React.Dispatch<React.SetStateAction<any>>;
    enteredAnswers: [];
}

export const Background: React.FC<Props> = (Props) => {
    const {setIsStarted, setQuestionNumber, setEnteredAnswers, enteredAnswers} = Props;

    return (
        <div className="background">
            <Routes>
                <Route path="/" element={<Instruction setIsStarted={setIsStarted}  />} />
                <Route path="*" element={<NotFoundPage />} />
                <Route path="0" element={<Instruction setIsStarted={setIsStarted}  />} />
                <Route path="1" element={
                    <Figures
                        taskNo={1}
                        figuresCount={4}
                        setQuestionNumber={setQuestionNumber}
                        correctAnswer={4}
                        enteredAnswers={enteredAnswers}
                        setEnteredAnswers={setEnteredAnswers}
                    />
                }/>

                <Route path="2" element={
                    <Anagrams
                        taskType={'missingLettersOfWord'}
                        taskNo={2}
                        setQuestionNumber={setQuestionNumber}
                        correctAnswer={'чай'}
                        enteredAnswers={enteredAnswers}
                        setEnteredAnswers={setEnteredAnswers}
                    />
                }/>

                <Route path="3" element={
                    <Anagrams
                        taskType={'anagrams'}
                        taskNo={3}
                        setQuestionNumber={setQuestionNumber}
                        correctAnswer={'валіза'}
                        enteredAnswers={enteredAnswers}
                        setEnteredAnswers={setEnteredAnswers}
                    />
                }/>

                <Route path="4" element={
                    <Anagrams
                        taskType={'missingNumber'}
                        taskNo={4}
                        setQuestionNumber={setQuestionNumber}
                        correctAnswer={'11'}
                        enteredAnswers={enteredAnswers}
                        setEnteredAnswers={setEnteredAnswers}
                    />
                }/>

                <Route path="5" element={
                    <Anagrams
                        taskType={'missingWord'}
                        taskNo={5}
                        setQuestionNumber={setQuestionNumber}
                        correctAnswer={'жаба'}
                        enteredAnswers={enteredAnswers}
                        setEnteredAnswers={setEnteredAnswers}
                    />
                }/>

                <Route path="6" element={
                    <Anagrams
                        taskType={'missingNumber'}
                        taskNo={6}
                        setQuestionNumber={setQuestionNumber}
                        correctAnswer={'25'}
                        enteredAnswers={enteredAnswers}
                        setEnteredAnswers={setEnteredAnswers}
                    />
                }/>

                <Route path="7" element={
                    <Anagrams
                        taskType={'continueNumberRow'}
                        taskNo={7}
                        setQuestionNumber={setQuestionNumber}
                        correctAnswer={'3'}
                        enteredAnswers={enteredAnswers}
                        setEnteredAnswers={setEnteredAnswers}
                    />
                }/>

                <Route path="8" element={
                    <Anagrams
                        taskType={'anagrams'}
                        taskNo={8}
                        setQuestionNumber={setQuestionNumber}
                        correctAnswer={'тісто'}
                        enteredAnswers={enteredAnswers}
                        setEnteredAnswers={setEnteredAnswers}
                    />
                }/>

                <Route path="9" element={
                    <Figures
                        figuresCount={6}
                        taskNo={9}
                        setQuestionNumber={setQuestionNumber}
                        correctAnswer={6}
                        enteredAnswers={enteredAnswers}
                        setEnteredAnswers={setEnteredAnswers}
                    />
                }/>

                <Route path="10" element={
                    <Figures
                        taskNo={10}
                        figuresCount={6}
                        setQuestionNumber={setQuestionNumber}
                        correctAnswer={5}
                        enteredAnswers={enteredAnswers}
                        setEnteredAnswers={setEnteredAnswers}
                    />
                }/>

                <Route path="11" element={
                    <Anagrams
                        taskType={'missingLetter'}
                        taskNo={11}
                        setQuestionNumber={setQuestionNumber}
                        correctAnswer={'ї'}
                        enteredAnswers={enteredAnswers}
                        setEnteredAnswers={setEnteredAnswers}
                    />
                }/>

                <Route path="12" element={
                    <Anagrams
                        taskType={'missingLettersOfWord'}
                        taskNo={12}
                        setQuestionNumber={setQuestionNumber}
                        correctAnswer={'шок'}
                        enteredAnswers={enteredAnswers}
                        setEnteredAnswers={setEnteredAnswers}
                    />
                }/>

                <Route path="13" element={
                    <Anagrams
                        taskType={'missingNumber'}
                        taskNo={13}
                        setQuestionNumber={setQuestionNumber}
                        correctAnswer={'54'}
                        enteredAnswers={enteredAnswers}
                        setEnteredAnswers={setEnteredAnswers}
                    />
                }/>

                <Route path="14" element={
                    <Anagrams
                        taskType={'missingNumber'}
                        taskNo={14}
                        setQuestionNumber={setQuestionNumber}
                        correctAnswer={'11'}
                        enteredAnswers={enteredAnswers}
                        setEnteredAnswers={setEnteredAnswers}
                    />
                }/>

                <Route path="15" element={
                    <Anagrams
                        taskType={'missingNumber'}
                        taskNo={15}
                        setQuestionNumber={setQuestionNumber}
                        correctAnswer={'27'}
                        enteredAnswers={enteredAnswers}
                        setEnteredAnswers={setEnteredAnswers}
                    />
                }/>

                <Route path="16" element={
                    <Anagrams
                        taskType={'missingLetters'}
                        taskNo={16}
                        setQuestionNumber={setQuestionNumber}
                        correctAnswer={'рт'}
                        enteredAnswers={enteredAnswers}
                        setEnteredAnswers={setEnteredAnswers}
                    />
                }/>

                <Route path="17" element={
                    <Figures
                        figuresCount={6}
                        taskNo={17}
                        setQuestionNumber={setQuestionNumber}
                        correctAnswer={2}
                        enteredAnswers={enteredAnswers}
                        setEnteredAnswers={setEnteredAnswers}
                    />
                }/>

                <Route path="18" element={
                    <Figures
                        figuresCount={6}
                        taskNo={18}
                        setQuestionNumber={setQuestionNumber}
                        correctAnswer={2}
                        enteredAnswers={enteredAnswers}
                        setEnteredAnswers={setEnteredAnswers}
                    />
                }/>

                <Route path="19" element={
                    <Anagrams
                        taskType={'missingNumber'}
                        taskNo={19}
                        setQuestionNumber={setQuestionNumber}
                        correctAnswer={'18'}
                        enteredAnswers={enteredAnswers}
                        setEnteredAnswers={setEnteredAnswers}
                    />
                }/>

                <Route path="20" element={
                    <Anagrams
                        taskType={'missingNumber'}
                        taskNo={20}
                        setQuestionNumber={setQuestionNumber}
                        correctAnswer={'76'}
                        enteredAnswers={enteredAnswers}
                        setEnteredAnswers={setEnteredAnswers}
                    />
                }/>

                <Route path="21" element={
                    <Anagrams
                        taskType={'missingWord'}
                        taskNo={21}
                        setQuestionNumber={setQuestionNumber}
                        correctAnswer={'хата'}
                        enteredAnswers={enteredAnswers}
                        setEnteredAnswers={setEnteredAnswers}
                    />
                }/>

                <Route path="22" element={
                    <Anagrams
                        taskType={'missingLettersOfWord'}
                        taskNo={22}
                        setQuestionNumber={setQuestionNumber}
                        correctAnswer={'лад'}
                        enteredAnswers={enteredAnswers}
                        setEnteredAnswers={setEnteredAnswers}
                    />
                }/>

                <Route path="23" element={
                    <Anagrams
                        taskType={'anagrams'}
                        taskNo={23}
                        setQuestionNumber={setQuestionNumber}
                        correctAnswer={'сарай'}
                        enteredAnswers={enteredAnswers}
                        setEnteredAnswers={setEnteredAnswers}
                    />
                }/>

                <Route path="24" element={
                    <Anagrams
                        taskType={'enterSynonym'}
                        taskNo={24}
                        setQuestionNumber={setQuestionNumber}
                        correctAnswer={'кисть'}
                        enteredAnswers={enteredAnswers}
                        setEnteredAnswers={setEnteredAnswers}
                    />
                }/>

                <Route path="25" element={
                    <Anagrams
                        taskType={'missingLetter'}
                        taskNo={25}
                        setQuestionNumber={setQuestionNumber}
                        correctAnswer={'п'}
                        enteredAnswers={enteredAnswers}
                        setEnteredAnswers={setEnteredAnswers}
                    />
                }/>

                <Route path="26" element={
                    <Anagrams
                        taskType={'missingLetters'}
                        taskNo={26}
                        setQuestionNumber={setQuestionNumber}
                        correctAnswer={'сн'}
                        enteredAnswers={enteredAnswers}
                        setEnteredAnswers={setEnteredAnswers}
                    />
                }/>

                <Route path="27" element={
                    <Figures
                        figuresCount={6}
                        taskNo={27}
                        setQuestionNumber={setQuestionNumber}
                        correctAnswer={2}
                        enteredAnswers={enteredAnswers}
                        setEnteredAnswers={setEnteredAnswers}
                    />
                }/>

                <Route path="28" element={
                    <Figures
                        figuresCount={6}
                        taskNo={28}
                        setQuestionNumber={setQuestionNumber}
                        correctAnswer={1}
                        enteredAnswers={enteredAnswers}
                        setEnteredAnswers={setEnteredAnswers}
                    />
                }/>

                <Route path="29" element={
                    <Figures
                        figuresCount={6}
                        taskNo={29}
                        setQuestionNumber={setQuestionNumber}
                        correctAnswer={1}
                        enteredAnswers={enteredAnswers}
                        setEnteredAnswers={setEnteredAnswers}
                    />
                }/>

                <Route path="30" element={
                    <Anagrams
                        taskType={'missingWord'}
                        taskNo={30}
                        setQuestionNumber={setQuestionNumber}
                        correctAnswer={'грот'}
                        enteredAnswers={enteredAnswers}
                        setEnteredAnswers={setEnteredAnswers}
                    />
                }/>

                <Route path="31" element={
                    <Anagrams
                        taskType={'enterSynonym'}
                        taskNo={31}
                        setQuestionNumber={setQuestionNumber}
                        correctAnswer={'біг'}
                        enteredAnswers={enteredAnswers}
                        setEnteredAnswers={setEnteredAnswers}
                    />
                }/>

                <Route path="32" element={
                    <Anagrams
                        taskType={'missingNumber'}
                        taskNo={32}
                        setQuestionNumber={setQuestionNumber}
                        correctAnswer={'64'}
                        enteredAnswers={enteredAnswers}
                        setEnteredAnswers={setEnteredAnswers}
                    />
                }/>

                <Route path="33" element={
                    <Anagrams
                        taskType={'missingWord'}
                        taskNo={33}
                        setQuestionNumber={setQuestionNumber}
                        correctAnswer={'опір'}
                        enteredAnswers={enteredAnswers}
                        setEnteredAnswers={setEnteredAnswers}
                    />
                }/>

                <Route path="34" element={
                    <Anagrams
                        taskType={'anagrams'}
                        taskNo={34}
                        setQuestionNumber={setQuestionNumber}
                        correctAnswer={'вівторок'}
                        enteredAnswers={enteredAnswers}
                        setEnteredAnswers={setEnteredAnswers}
                    />
                }/>

                <Route path="35" element={
                    <Anagrams
                        taskType={'missingLetterAndNumber'}
                        taskNo={35}
                        setQuestionNumber={setQuestionNumber}
                        correctAnswer={'є7'}
                        enteredAnswers={enteredAnswers}
                        setEnteredAnswers={setEnteredAnswers}
                    />
                }/>

                <Route path="36" element={
                    <Anagrams
                        taskType={'enterSynonym'}
                        taskNo={36}
                        setQuestionNumber={setQuestionNumber}
                        correctAnswer={'губа'}
                        enteredAnswers={enteredAnswers}
                        setEnteredAnswers={setEnteredAnswers}
                    />
                }/>

                <Route path="37" element={
                    <Anagrams
                        taskType={'missingWord'}
                        taskNo={37}
                        setQuestionNumber={setQuestionNumber}
                        correctAnswer={'нива'}
                        enteredAnswers={enteredAnswers}
                        setEnteredAnswers={setEnteredAnswers}
                    />
                }/>

                <Route path="38" element={
                    <Figures
                        figuresCount={6}
                        taskNo={38}
                        setQuestionNumber={setQuestionNumber}
                        correctAnswer={1}
                        enteredAnswers={enteredAnswers}
                        setEnteredAnswers={setEnteredAnswers}
                    />
                }/>

                <Route path="39" element={
                    <Figures
                        figuresCount={6}
                        taskNo={39}
                        setQuestionNumber={setQuestionNumber}
                        correctAnswer={6}
                        enteredAnswers={enteredAnswers}
                        setEnteredAnswers={setEnteredAnswers}
                    />
                }/>

                <Route path="40" element={
                    <Figures
                        figuresCount={4}
                        taskNo={40}
                        setQuestionNumber={setQuestionNumber}
                        correctAnswer={1}
                        enteredAnswers={enteredAnswers}
                        setEnteredAnswers={setEnteredAnswers}
                    />
                }/>

                <Route path="41" element={
                    <Result
                        enteredAnswers={enteredAnswers}
                    />} />
            </Routes>
        </div>
    );
};
