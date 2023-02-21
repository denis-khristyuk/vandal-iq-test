import React from 'react';
import {Link} from 'react-router-dom';
import './NotFoundPage.scss';

export const NotFoundPage: React.FC = () => {
    return (
        <>
            <p className="notFound_text">
                Дружок пирожок, ты попутал :-(
                <br/>
                Такую страницу я еще не придумал
            </p>

            <Link to={'/'} className="link">
                <div className="button_wrapper">
                    <button className="button">
                        <p className="button_text_prev">На гоавную</p>
                    </button>
                </div>
            </Link>
        </>
    );
};
