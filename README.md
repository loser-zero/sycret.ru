Описываю проблему: Пытаюсь получить данные с localhost и получаю ошибку CORS.
![5b3fcfca-fb8d-47ec-ab1f-497ff7995e0e](https://github.com/user-attachments/assets/5070effc-9af7-4391-b2a5-c87f0df92f96)
Нашёл выход в использовании программы Insomnia, и там без проблем получил данные.
![72d6d7a6-f92c-49b0-9be0-9559c3996116](https://github.com/user-attachments/assets/18326e70-8a8f-4fad-9fee-a2ac5218e0f0)
Поэтому я скопировал данные от туда и просто вставил в проект. Надеюсь на ваше понимание, обычным способом я не могу их получить 0_o.

На всякий случай покажу как я их получал:

const API_URL = 'https://sycret.ru/service/api/api/OSGetGoodList';
const API_KEY = '011ba11bdcad4fa396660c2ec447ef14';

function CertificateSelection() {
    const [certificates, setCertificates] = useState([]);

    useEffect(() => {
        const fetchCertificates = async () => {
            try {
                const response = await axios.get(API_URL, {
                    headers: {
                        'APIKey': API_KEY
                    }
                });
                setCertificates(response.data); // Предполагается, что данные приходят в нужном формате
            } catch (error) {
                console.error('Ошибка при получении сертификатов:', error);
            }
        };

        fetchCertificates();
    }, []);

    return (
        <div>
            <h1>Выбор сертификата</h1>
            {certificates.map(item => (
                <div key={item.ID} className="item">
                    <h2>{item.NAME}</h2>
                    <p>Цена: {item.PRICE} руб</p>
                    <Link to={`/contact/${item.ID}`} state={{ name: item.NAME }}>
                        <button>Оформить</button>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default CertificateSelection;

Как-то так. Соответсвенно при выборе товара, я так же не отправляю данные через OSSale, я просто не могу это сделать. Если вы мне поможете решить эту проблему, я с радостью перепишу код на работу с сервером. Впринипе всё остальное я сделал.

Если вы решите мне отказать, пожалуйста скажите что вам не понравилось, мне это очень важно.
