import { useState } from "react";
import { Button } from "./Button";

type FilterType = "All" | "Dollars" | "Rubles";

type MoneyPropsType = {
  setMoneys: Array<MoneyType>;
};

export type MoneyType = {
  banknots: string;
  value: number;
  number: string;
};

export const Money = ({ setMoneys }: MoneyPropsType) => {
  const [money, setMoney] = useState(setMoneys);

  const filterALL = (title: FilterType) => {
    if (title === "Dollars") {
      setMoney(setMoneys.filter((m) => m.banknots === "Dollars"));
      console.log({ money });
    }
    if (title === "Rubles") {
      setMoney(setMoneys.filter((m) => m.banknots === "Rubles"));
      console.log({ money });
    }
    if (title === "All") {
      setMoney(setMoneys);
      console.log({ money });
    }
  };

  return (
    <>
      <ul>
        {money.map((m, index) => {
          return (
            <li key={index}>
              <span>{m.banknots} </span>
              <span>{m.value} </span>
              <span>{m.number}</span>
            </li>
          );
        })}
      </ul>
      <Button title={"Dollars"} callBack={() => filterALL("Dollars")} />
      <Button title={"Rubles"} callBack={() => filterALL("Rubles")} />
      <Button title={"All"} callBack={() => filterALL("All")} />
    </>
  );
};
