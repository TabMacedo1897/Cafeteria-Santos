import React from "react";

function InputWithDatalist() {
  const countries = ["USA", "Canada", "UK", "Other"];

  return (
    <div>
      <label htmlFor="countryInput">Select a Country:</label>
      <input
        list="countries"
        id="countryInput"
        name="country"
        placeholder="Start typing..."
      />
      <datalist id="countries">
        {countries.map((country, index) => (
          <option key={index} value={country} />
        ))}
      </datalist>
    </div>
  );
}

export default InputWithDatalist;
