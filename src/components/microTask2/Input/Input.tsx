import { ChangeEvent } from "react";

type InputPropsType = {
  title: string;
  setTitle: (title: string) => void;
};

export const Input = ({ title, setTitle }: InputPropsType) => {
  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };
  console.log(title);
  return <input value={title} onChange={onChangeInputHandler} />;
};
