import React from "react";
import { FOREGROUND, PURPLE } from "../helpers/colors";

const SearchContact = () => {
  return (
    <div className="input-group mx-2 w-75" dir="ltr">
      <span
        className="input-group-text"
        id="basic-addon1"
        style={{ backgroundColor: PURPLE }}
      >
        <i className="fas fa-search" />
      </span>
      <input
        dir="rtl"
        type="text"
        className="form-control"
        style={{ placeholder: FOREGROUND }}
        placeholder="جستوجوی مخاطب"
        aria-label="search"
        aria-describedby="basic-addon1"
      />
    </div>
  );
};

export default SearchContact;
