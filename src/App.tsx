import { useState } from "react";
import "./App.css";
import { CarsType, NewComponent, StudentType } from "./NewComponent";
import { Button } from "./components/Button";
import { Money, MoneyType } from "./components/Money";

const studentsList: Array<StudentType> = [
  { id: 1, name: "James", age: 8 },
  { id: 2, name: "Robert", age: 18 },
  { id: 3, name: "John", age: 28 },
  { id: 4, name: "Michael", age: 38 },
  { id: 5, name: "William", age: 48 },
  { id: 6, name: "David", age: 58 },
  { id: 7, name: "Richard", age: 68 },
  { id: 8, name: "Joseph", age: 78 },
  { id: 9, name: "Thomas", age: 88 },
  { id: 10, name: "Charles", age: 98 },
  { id: 11, name: "Christopher", age: 100 },
];

const topCars: Array<CarsType> = [
  { manufacturer: "BMW", model: "m5cs" },
  { manufacturer: "Mercedes", model: "e63s" },
  { manufacturer: "Audi", model: "rs6" },
];

const setMoneys: Array<MoneyType> = [
  { banknots: "Dollars", value: 100, number: " a1234567890" },
  { banknots: "Dollars", value: 50, number: " z1234567890" },
  { banknots: "Rubles", value: 100, number: " w1234567890" },
  { banknots: "Dollars", value: 100, number: " e1234567890" },
  { banknots: "Dollars", value: 50, number: " c1234567890" },
  { banknots: "Rubles", value: 100, number: " r1234567890" },
  { banknots: "Dollars", value: 50, number: " x1234567890" },
  { banknots: "Rubles", value: 50, number: " v1234567890" },
];

function App() {
  const ButtonFu = (subscriber: string, age: number, adress: string) => {
    console.log(subscriber, age, adress);
  };
  const ButtonFu2 = (text: string) => {
    console.log(text);
  };

  let [a, setA] = useState(1);

  const aChancge = () => {
    setA(++a);
    console.log(a);
  };
  const reSet = () => {
    setA(0);
    console.log(a);
  };

  return (
    <>
      <NewComponent students={studentsList} cars={topCars} />
      <Button
        title={"Main button"}
        callBack={() => ButtonFu("Im Vasya", 21, "Live in Minsk")}
      />
      <Button title={"Stupid"} callBack={() => ButtonFu2("Im stupid Button")} />
      <>
        <h1>{a}</h1>
        <Button title={"change"} callBack={() => aChancge()} />
        <Button title={"0"} callBack={() => reSet()} />
      </>
      <Money setMoneys={setMoneys} />
    </>
  );
}

export default App;
