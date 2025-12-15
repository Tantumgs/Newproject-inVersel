import Counter from '../components/Counter.jsx';
import CourseInfo from '../components/CourseInfo.jsx';
import LivePreview from '../components/LivePreview.jsx';

export default function AboutProject() {
  return (
    <div className="about-project-page">
      <h1>О проекте</h1>
      <p className="project-intro">
        Этот проект демонстрирует работу основных React компонентов и хуков.
        Ниже представлены три интерактивных компонента, которые показывают
        различные способы управления состоянием в React приложениях.
      </p>

      <div className="components-grid">
        <Counter />
        <CourseInfo />
        <LivePreview />
      </div>
    </div>
  );
}
