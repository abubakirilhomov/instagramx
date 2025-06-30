import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-blue-100 text-gray-700">
      <div className="text-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt="Instagram Logo" className="w-24 h-24 mx-auto mb-4" />
        <h1 className="text-xl font-semibold">Русский</h1>
      </div>
      <div className="w-full max-w-xs mt-8">
        <input
          type="text"
          placeholder="Имя пользователя, эл. адрес или мобильный ..."
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Пароль"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700">
          Войти
        </button>
        <p className="text-center mt-4 text-sm">Забыли пароль?</p>
        <button className="w-full bg-blue-100 text-blue-600 p-3 rounded-lg mt-4 font-semibold hover:bg-blue-200">
          Создать новый аккаунт
        </button>
      </div>
      <div className="mt-8 text-center text-sm">
        <span>∞ Meta</span>
      </div>
    </div>
  );
};

export default LoginPage;