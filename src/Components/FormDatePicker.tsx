import React from "react";
import DatePicker from "react-datepicker";

export default function FormDatePicker({ onChange, ...rest }: any) {
  return (
    <>
      <DatePicker
        {...rest}
        showTimeSelect
        timeFormat="HH:mm"
        onChange={onChange}
        timeIntervals={15}
        dateFormat="MMM d, yyyy h:mm aa"
        className="border p-2 cursor-pointer w-full"
      />
    </>
  );
}
