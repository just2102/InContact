import { useForm } from "react-hook-form";
import { useState } from "react";

const MyPostsForm = (props) => {
  let placeholderPhrases = ["What's on your mind today?", "Share your thoughts with the world!", "Got something to say? Post it here", "Got an update, a story or a memory to share?", "Tell your friends what you've been up to!"]
  const [placeholder, setPlaceholder] = useState("What's on your mind today?");

  const {register,handleSubmit, formState: { errors, isDirty }, reset} = useForm({defaultValues: {newPostBody:""}});
  const onSubmit = (data) => {
    let newPlaceholder = placeholderPhrases[Math.floor(Math.random()*placeholderPhrases.length)]
    if (data.newPostBody) {
        props.onAddPost(data.newPostBody)
        reset({newPostBody:""})
        setPlaceholder(newPlaceholder)
    }
  } 
  return (
    <form onSubmit={handleSubmit(onSubmit)} id="user-section_form">
        <textarea
        {...register("newPostBody", {required: true, minLength: {value:1, message:"Cannot be blank"}})}
          placeholder={placeholder}
        />
        {(errors.newPostBody) && <span>Cannot be blank...</span> }
        <input type="submit" id="add-post" value={"Post"} />
    </form>
  );
};

export default MyPostsForm;
