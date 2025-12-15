import { useState } from 'react';

export default function LivePreview() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="component live-preview">
      <h2>Управляемый ввод</h2>
      <div className="input-section">
        <input
          type="text"
          placeholder="Введите текст..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="text-input"
        />
      </div>
      <div className="preview-section">
        <p className="preview-text">
          {inputValue ? `Вы ввели: ${inputValue}` : 'Вы ввели: '}
        </p>
      </div>
    </div>
  );
}
