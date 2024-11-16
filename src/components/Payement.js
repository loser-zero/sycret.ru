// Payment.js
import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

function Payment() {
    const navigate = useNavigate();
    const location = useLocation();
    const name = location.state?.name; // Получаем имя из state
    
    return (
        <div className="container">
            <h1>{`${name}`}</h1>
            <p>Вы выбрали {`${name}`}. Пожалуйста, произведите оплату.</p>
            <button onClick={() => alert('Оплата прошла успешно!')}>Оплатить</button>
            <button style={{marginLeft: '15px'}} onClick={() => navigate(-1)}>Назад</button> {/* Кнопка "Назад" */}
        </div>
    );
}

export default Payment;