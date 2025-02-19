// src/App.jsx
import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (window.Telegram) {
      Telegram.WebApp.BackButton.show();
      Telegram.WebApp.BackButton.onClick(() => {
        window.history.back();
      });
    }
  }, []);

  return (
    <div className="app">
      <h1 className="header">Добро пожаловать в KujiFinance!</h1>
      <div className="content">
        {loading ? (
          <p className="loading">Загрузка данных...</p>
        ) : (
          <pre className="data">{JSON.stringify(data, null, 2)}</pre>
        )}
      </div>
      {/* <button onClick={() => Telegram.WebApp.openLink('https://ton.org/')}>Открыть ссылку</button> */}
    </div>
  );
};

export default App;