import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import InputMask from 'react-input-mask';

function ContactForm() {
    const { id } = useParams();
    const location = useLocation();
    const name = location.state?.name;
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/payment/${id}`, { state: { name } });
    };

    return (
        <>
            <div className="container">
                <h1>{`${name}`}</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">ФИО <span style={{color: 'red'}}>*</span></label>
                        <input type="text" id="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Телефон <span style={{color: 'red'}}>*</span></label>
                        <InputMask mask="+7 (999) 999-99-99" id="phone" required>
                            {(inputProps) => <input {...inputProps} />}
                        </InputMask>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Почта <span style={{color: 'red'}}>*</span></label>
                        <input type="email" id="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Сообщение</label>
                        <textarea id="message" rows="4"></textarea>
                    </div>
                    <button type="submit">Отправить</button>
                </form>
            </div>
            <div>
                <button style={{display: 'block', margin: '15px auto'}} onClick={() => navigate(-1)}>Назад</button>
            </div>
        </>
    );
}

export default ContactForm;

