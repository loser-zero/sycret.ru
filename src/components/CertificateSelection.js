import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const data = [
	{
		"ID": "5",
		"TABLENAME": "DICTCERTSALE",
		"PRIMARYKEY": "5_DICTCERTSALE",
		"NAME": "Сертификат на 50000 руб",
		"DESCRIPTION": "",
		"PRICE": "50000.00",
		"SUMMA": "45000.00",
		"DISCOUNT": "10.00",
		"IMAGEURL": "",
		"REC_SNO": "usn_income_outcome",
		"REC_NAME": "Сертификат на 50000 руб",
		"REC_SUM": "45000.00",
		"REC_QUANTITY": "1.00",
		"REC_PAYMENT_METHOD": "full_payment",
		"REC_PAYMENT_OBJECT": "another",
		"REC_TAX": "vatNoData"
	},
	{
		"ID": "4",
		"TABLENAME": "DICTCERTSALE",
		"PRIMARYKEY": "4_DICTCERTSALE",
		"NAME": "Сертификат на 20000 руб",
		"DESCRIPTION": "",
		"PRICE": "20000.00",
		"SUMMA": "18000.00",
		"DISCOUNT": "10.00",
		"IMAGEURL": "",
		"REC_SNO": "usn_income_outcome",
		"REC_NAME": "Сертификат на 20000 руб",
		"REC_SUM": "18000.00",
		"REC_QUANTITY": "1.00",
		"REC_PAYMENT_METHOD": "full_payment",
		"REC_PAYMENT_OBJECT": "another",
		"REC_TAX": "vatNoData"
	},
	{
		"ID": "3",
		"TABLENAME": "DICTCERTSALE",
		"PRIMARYKEY": "3_DICTCERTSALE",
		"NAME": "Сертификат на 10000 руб",
		"DESCRIPTION": "",
		"PRICE": "10000.00",
		"SUMMA": "9000.00",
		"DISCOUNT": "10.00",
		"IMAGEURL": "",
		"REC_SNO": "usn_income_outcome",
		"REC_NAME": "Сертификат на 10000 руб",
		"REC_SUM": "9000.00",
		"REC_QUANTITY": "1.00",
		"REC_PAYMENT_METHOD": "full_payment",
		"REC_PAYMENT_OBJECT": "another",
		"REC_TAX": "vatNoData"
	},
	{
		"ID": "2",
		"TABLENAME": "DICTCERTSALE",
		"PRIMARYKEY": "2_DICTCERTSALE",
		"NAME": "Сертификат на 5000 руб",
		"DESCRIPTION": "",
		"PRICE": "5000.00",
		"SUMMA": "4500.00",
		"DISCOUNT": "10.00",
		"IMAGEURL": "",
		"REC_SNO": "usn_income_outcome",
		"REC_NAME": "Сертификат на 5000 руб",
		"REC_SUM": "4500.00",
		"REC_QUANTITY": "1.00",
		"REC_PAYMENT_METHOD": "full_payment",
		"REC_PAYMENT_OBJECT": "another",
		"REC_TAX": "vatNoData"
	}
]
// "result": 0,
// "resultdescription": "OK"

function CertificateSelection() {
    return (
		<div>
		  {data.map(item => (
			<div key={item.ID} className="item">
			  <h2>{item.NAME}</h2>
			  <p>Price: {item.PRICE} руб</p>
			  <Link to={`/contact/${item.ID}`} state={{name: item.NAME}}>
				  <button>Купить</button>
			  </Link>
			</div>
		  ))}
		</div>
	  );
}

export default CertificateSelection;