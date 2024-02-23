import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

interface CreateFormData {
  title: string;
  description: string;
}

const CreateForm = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    title: yup.string().required("You must provide a title"),
    description: yup
      .string()
      .max(250, `can't be more than 250 characters`)
      .required(`you must provide a description`),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFormData>({
    resolver: yupResolver(schema),
  });
  const postsRef = collection(db, "posts");

  const onCreatePost = async (data: CreateFormData) => {
    await addDoc(postsRef, {
      ...data,
      userName: user?.displayName,
      userId: user?.uid,
      useImg: user?.photoURL,
    });
    navigate("/");
  };
  return (
    <form action="" onSubmit={handleSubmit(onCreatePost)}>
      <input placeholder="Title..." {...register("title")} className="title" />
      {errors.title && <p>error : {errors.title.message}</p>}
      <textarea placeholder="description..." {...register("description")} />
      {errors.description && <p>error: {errors.description.message}</p>}
      <input type="submit" className="submit" />
    </form>
  );
};

export default CreateForm;
