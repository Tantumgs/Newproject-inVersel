import { useState } from 'react';

export default function CourseInfo() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="component course-info">
      <h2>Информация о курсе</h2>
      <div className="course-header">
        <h3>React: от основ к продвинутым техникам</h3>
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="btn btn-toggle"
        >
          {showDetails ? 'Скрыть подробности' : 'Показать подробности'}
        </button>
      </div>
      {showDetails && (
        <div className="course-details">
          <p>
            Это полный курс по React, охватывающий все основные концепции и
            продвинутые техники разработки. Вы изучите компоненты, hooks, управление
            состоянием и многое другое. Курс включает практические задачи и реальные
            проекты для закрепления знаний.
          </p>
        </div>
      )}
    </div>
  );
}
