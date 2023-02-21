import React from 'react';
import '../../styles/utils/_keyframes.scss';
import './TimedOffModal.scss';
import cn from 'classnames';

export const TimedOffModal: React.FC = () => {
    return (
        <div className="modal_timedOut">
            <div className={cn({
                'modal_timedOut_content': true,
            })}>
                <p className="modal_title">
                    Час вийшов!
                </p>

                <a className="link" href="https://academy.vandalvape.com.ua/">
                    <div className="button_wrapper">
                        <button
                            type="submit"
                            className="button"
                        >
                            <p className="button_text">В академію</p>
                        </button>
                    </div>
                </a>
            </div>
        </div>
    );
};
