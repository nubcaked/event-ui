import React, { useState } from 'react';
import MultiSelect from "react-multi-select-component";

function CategorySelector(props) {

  // const [selected, setSelected] = useState([]);

  // const options = [
  //   { label: "Grapes 🍇", value: "grapes" },
  //   { label: "Mango 🥭", value: "mango" },
  //   { label: "Strawberry 🍓", value: "strawberry", disabled: true },
  //   { label: "Watermelon 🍉", value: "watermelon" },
  //   { label: "Pear 🍐", value: "pear" },
  //   { label: "Apple 🍎", value: "apple" },
  //   { label: "Tangerine 🍊", value: "tangerine" },
  //   { label: "Pineapple 🍍", value: "pineapple" },
  //   { label: "Peach 🍑", value: "peach" },
  // ];

  const options = [
    { label: "Animals, Pets", value: "animals" },
    { label: "Art, Antiques, Crafts", value: "art" },
    { label: "Books, Poetry, Literature", value: "books" },
    { label: "Business, Finance, Investing", value: "business" }
  ];
  
  return (
    <div className="form__selector">
      <h2>Select Categories:</h2>
      {/* <pre>{JSON.stringify(selected)}</pre> */}
      <MultiSelect
        options={options}
        value={props.categories}
        onChange={props.onChange}
        labelledBy={"Select"}
      />
    </div>
  );
}

export default CategorySelector;
