type NewComponentPropsType = {
  students: Array<StudentType>; //StudentType[] - тоже самое
  cars: Array<CarsType>;
};

export type CarsType = {
  manufacturer: string;
  model: string;
};
export type StudentType = {
  id: number;
  name: string;
  age: number;
};

export const NewComponent = ({ cars, students }: NewComponentPropsType) => {
  const arr = (
    <ul>
      {students.map(({ id, name, age }: StudentType) => {
        return (
          <li key={id}>
            <span>Name: {name} </span>
            <span>Age: {age}</span>
          </li>
        );
      })}
    </ul>
  );
  const carArr = (
    <table>
      {cars.map(({ manufacturer, model }: CarsType, index) => {
        return (
          <tr key={index}>
            <th>{index + 1} </th>
            <td>{manufacturer} </td>
            <td>{model} </td>
          </tr>
        );
      })}
    </table>
  );

  return (
    <>
      <>
        <b>Main task</b>
        {arr}
      </>
      <>
        <b>Second task</b>
        {carArr}
      </>
    </>
  );
};
