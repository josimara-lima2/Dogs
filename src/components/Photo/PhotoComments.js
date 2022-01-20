import React from "react";
import UserContext from "../../UserContext";
import PhotCommentsForm from "./PhotCommentsForm";
import styles from "./PhotoComments.module.css";

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSection = React.useRef(null);
  const { login } = React.useContext(UserContext);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);
  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${props.single ? styles.single : ""}`}
      >
        {comments.map((comment) => (
          <li key={`${comment.id ? comment.id : Math.random()}`}>
            <b>
              {comment.comment_author}:<span>{comment.comment_content}</span>
            </b>
          </li>
        ))}
      </ul>
      {login && (
        <PhotCommentsForm
          single={props.single}
          setComments={setComments}
          id={props.id}
        />
      )}
    </>
  );
};

export default PhotoComments;
