import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uniqid from "uniqid";
import { commentCreate } from "./redux/actions";
import SingleComment from "./SingleComment";

const Comments = (props) => {
  const [textComment, setTextComment] = useState("");
  const dispatch = useDispatch();
	const comments = useSelector(state => {
		const { commentsReducer} = state;
		return commentsReducer.comments;
	})

  const handleInput = (e) => {
    setTextComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit >>", textComment);
    const id = uniqid();
    dispatch(commentCreate(textComment, id));
  };

	console.log('comments >>', comments)

  return (
    <div className='card-comments'>
      <form className='comments-item-create' onSubmit={handleSubmit}>
        <input type='text' value={textComment} onChange={handleInput} />
        <input type='submit' hidden />
      </form>
			{!!comments.length && comments.map(res => {
				return <SingleComment key={res.id} data={res} />
			})}
    </div>
  );
};

export default Comments;
