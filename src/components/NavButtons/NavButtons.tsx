import React, {useEffect} from 'react';
import './NavButtons.scss';
import {Link} from 'react-router-dom';
import cn from 'classnames';

type Props = {
    taskNo: number;
    isActive: boolean
}

export const NavButtons: React.FC<Props> = ({ taskNo, isActive }) => {
    return (
        <div className="navButtons">
            <Link to={`/${taskNo - 1}`} className="link">
                <div className="button_wrapper">
                    <button className="button">
                        <p className="button_text_prev">Назад</p>
                    </button>
                </div>
            </Link>

            {isActive ? (
                <Link to={`/${taskNo + 1}`} className="link">
                    <div className="button_wrapper">
                        <button className="button">
                            <p className="button_text_next"> Далі</p>
                        </button>
                    </div>
                </Link>
            ) : (
                <div className="button_wrapper_disabled">
                    <button className="button_disabled">
                        <p className="button_text_next"> Далі</p>
                    </button>
                </div>
            )}
        </div>
    );
};
