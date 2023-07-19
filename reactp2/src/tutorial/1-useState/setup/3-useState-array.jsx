import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const [namesChanged, setNamesChanged] = useState(false);

  const changeNames = () => {
    if (namesChanged) {
      setPeople(data);
      setNamesChanged(false);
    } else {
      const newArray = [
        { name: "Arthur Morgan" },
        { name: "John Marston" },
        { name: "Hosea Matthews" },
        { name: "Charles Smith" },
      ];
      setPeople(newArray);
      setNamesChanged(true);
    }
  };
  const removeItem = (id) => {
    setPeople((oldPeople) => {
      let newPeople = oldPeople.filter((person) => person.id !== id);
      return newPeople;
    });
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={changeNames}>
        {namesChanged ? "Restore names" : "Change me?"}
      </button>
      <button className="btn" onClick={() => setPeople([])}>
        Clear names
      </button>
    </>
  );
};

export default UseStateArray;
