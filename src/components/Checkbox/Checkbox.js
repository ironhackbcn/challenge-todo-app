import React, { Fragment } from "react";

const Checkbox = (props) => {
  const {
    onChange,
    isDone,
  } = props;
  return (
    <Fragment>
      <label>
        <input
          type="checkbox"
          defaultChecked={isDone}
          onChange={onChange}
        />
      </label>
    </Fragment>
  );
};

export default Checkbox;
