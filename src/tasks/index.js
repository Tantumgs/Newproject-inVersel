import HelloReact from './HelloReact.jsx';
import Counter from '../components/Counter.jsx';
import CourseInfo from '../components/CourseInfo.jsx';
import LivePreview from '../components/LivePreview.jsx';
import AboutProject from './AboutProject.jsx';
import CourseDetails from './CourseDetails.jsx';

// Экспорт: ключ — имя вкладки, значение — компонент
export default {
  'Practice 5.3 — Hello React': HelloReact,
  'О проекте': AboutProject,
  'Counter': Counter,
  'CourseInfo': CourseInfo,
  'LivePreview': LivePreview,
  'Course Details': CourseDetails,
};