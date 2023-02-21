import React, {useState} from 'react';
import './Modal.scss';
import '../../styles/utils/_keyframes.scss';
import cn from 'classnames';

type Props = {
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal: React.FC<Props> = ({ setActive }) => {
    const [isError, setIsError] = useState(false);
    const [errorText, setErrorText] = useState('');
    const [phoneInput, setPhoneInput] = useState('');

    const submitNumberHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsError(false);

        if (phoneInput.trim().slice(0, 4) !== '+380') {
            setErrorText('*Номер телефону повинен починатися з +380');
            setIsError(true);
            return;
        }

        if (phoneInput.length !== 13) {
            setErrorText('*Неправильний номер телефону');
            setIsError(true);
            return;
        }

        setActive(false);
    };

    return (
        <div className="modal">
            <div className={cn({
                'modal_content': true,
                'error': isError,
            })}>
                <p className="modal_title">
                    Для продовження введіть
                    <br/>
                    Ваш номер телефону
                </p>

                {isError &&
                    <p className="modal_error">{errorText}</p>
                }

                <form className="modal_form" onSubmit={e => submitNumberHandler(e)}>
                    <input
                        type="text"
                        value={phoneInput}
                        onChange={(e) => setPhoneInput(e.target.value)}
                        placeholder="+380..."
                        className="modal_input"
                    />

                    <div className="button_wrapper">
                        <button
                            type="submit"
                            className="button"
                            disabled={phoneInput === ''}
                        >
                            <p className="button_text">Підтвердити</p>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
