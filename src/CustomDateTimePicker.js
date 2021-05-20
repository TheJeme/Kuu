import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CustomDateTimePicker() {
  const [value, setValue] = useState(new Date());

  return (
    <div>
      <DatePicker
        selected={value}
        onChange={(date) => setValue(date)}
        showTimeSelect
        timeFormat="p"
        timeIntervals={15}
        dateFormat="Pp"
      />
    </div>
  );
}

export default CustomDateTimePicker;
