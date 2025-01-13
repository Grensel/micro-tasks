import { useState } from "react";
import { FullInput } from "./FullInput/FullInput";
import { Button } from "./Button/Button";
import { Input } from "./Input/Input";

export const MicroTask2 = () => {
  const [message, setMessage] = useState([
    { message: "message1" },
    { message: "message2" },
    { message: "message3" },
  ]);

  const addMessage = (title: string) => {
    console.log(title);
    const newMessage = { message: title };
    setMessage([newMessage, ...message]);
  };

  const [title, setTitle] = useState("");

  const callBackButtonHandler = () => {
    addMessage(title);
    setTitle("");
  };

  return (
    <div>
      <FullInput
        callBack={callBackButtonHandler}
        title={title}
        setTitle={setTitle}
      />
      <div>
        <Input title={title} setTitle={setTitle} />
        <Button name={"+"} callBack={callBackButtonHandler} />
      </div>
      {message.map((el: { message: string }, index: number) => {
        return <div key={index}>{el.message}</div>;
      })}
    </div>
  );
};
