type ButtonPropsType = {
  title: string;
  callBack: () => void;
};

export const Button = ({ title, callBack }: ButtonPropsType) => {
  const onClickHandler = () => {
    callBack();
  };

  return (
    <>
      <button onClick={onClickHandler}>{title}</button>
    </>
  );
};
