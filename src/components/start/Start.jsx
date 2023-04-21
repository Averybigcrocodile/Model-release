import { AiTwotoneFileText } from "react-icons/ai";
import styles from "./Start.module.css";
import cn from "classnames";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <Link to="/photosession" className={cn(styles.start)}>
      <AiTwotoneFileText className={cn(styles.start_btn)} />
      <span className={cn(styles.start_text)}>Створити</span>
    </Link>
  );
};

export default Start;
