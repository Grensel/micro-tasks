import { ChangeEvent } from "react";

export type FullInputPropsType = {
  title: string;
  setTitle: (title: string) => void;
  callBack: () => void;
};

export const FullInput = ({
  callBack,
  title,
  setTitle,
}: FullInputPropsType) => {
  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };
  console.log(title);
  const onClickButtonHandler = () => {
    callBack();
    setTitle("");
  };

  return (
    <div>
      <input type="text" value={title} onChange={onChangeInputHandler} />
      <button onClick={onClickButtonHandler}>+</button>
    </div>
  );
};
