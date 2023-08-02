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
      let newPeople = oldPeople.filter((person) => person.id !== id); // DUDE
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

/*
  I did some woodoo magic here, wow. Okay, let's examine. 

  l2 Alright, I'm getting an array from data.js

  const [people, setPeople] = useState(data);
  Same as before, const people, change function and default state of function 
  Which is data from data.js

  Declare a boolean const 
  const [namesChanged, setNamesChanged] = useState(false);
  boolean default state being false (names are not changed)
  Line 9 to 11 seems so stupid. if(default) like my man, it is already like that. 
  What you thinking?

*/
