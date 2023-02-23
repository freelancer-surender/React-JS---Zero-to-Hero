import Student from './Student';
import myStyles from './MyStyles.module.css';

const MyStylesComponent = () => {
  return (
    <div className={myStyles.students}>
      <Student firstName="Harry" age="25" country="India" />
      <Student firstName="Ron" age="24" country="UK" />
      <Student firstName="Hermione" age="23" country="USA" />
      <div className={myStyles.student}>Test</div>
    </div>
  );
};

export default MyStylesComponent;
