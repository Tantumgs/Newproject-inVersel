import React, { useState } from 'react';
import tasks from './tasks';
import './styles.css';

function Home() {
  const year = new Date().getFullYear();
  return (
    <div className="container page">
      <h1>Introduction to React</h1>
      <p>
        React — это библиотека для создания пользовательских интерфейсов. Она
        позволяет строить интерфейс из компонентов, повторно использовать их и
        эффективно обновлять только изменяющиеся части страницы.
      </p>
      <footer className="site-footer">© {year} — Все права защищены</footer>
    </div>
  );
}

export default function App() {
  const pages = { Home, ...tasks };
  const [active, setActive] = useState('Home');
  const ActiveComponent = pages[active] || Home;

  return (
    <div className="app-root">
      <header className="site-header">
        <div className="container nav-bar">
          <div className="logo">Nurlan Agai</div>
          <nav className="tabs">
            {Object.keys(pages).map((key) => (
              <button
                key={key}
                className={`tab ${key === active ? 'active' : ''}`}
                onClick={() => setActive(key)}
              >
                {key}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="main-area">
        <ActiveComponent />
      </main>
    </div>
  );
}