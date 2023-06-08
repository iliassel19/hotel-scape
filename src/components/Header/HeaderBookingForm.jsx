import React from "react";
import Cleave from "cleave.js/react";
import FormContainer from "../../UI/FormContainer";
const HeaderBookingForm = () => {
  const getNowTime = new Date();
  const day =
    getNowTime.getDate() < 10
      ? `0${getNowTime.getDate()}`
      : getNowTime.getDate();
  const month =
    getNowTime.getMonth() + 1 < 10
      ? `0${getNowTime.getMonth() + 1}`
      : getNowTime.getMonth();
  const year = getNowTime.getFullYear();
  return (
    <FormContainer button="book a stay" className="py-6">
      <div className="flex flex-col gap-2 relative after:bg-gray-200 after:w-[3px] after:h-3/4 after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2">
        <label
          htmlFor="arrival"
          className="text-green-dark text-lg font-medium"
        >
          Arrival date
        </label>
        <Cleave
          id="arrival"
          name="arrival"
          placeholder={`${day}/${month}/${year}`}
          className="placeholder:text-lg border-b border-white transition-[border-color] focus:border-green-dark text-green-dark focus:outline-none text-lg font-Sans-serif w-3/4"
          options={{
            date: true,
            delimiter: "/",
            datePattern: ["d", "m", "Y"],
          }}
        />
      </div>
      <div className="flex flex-col gap-2 relative after:bg-gray-200 after:w-[3px] after:h-3/4 after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2">
        <label
          htmlFor="departure"
          className="text-green-dark text-lg font-medium"
        >
          Departure date
        </label>
        <Cleave
          id="departure"
          name="departure"
          placeholder={`${day}/${month}/${year}`}
          className="placeholder:text-lg border-b border-white transition-[border-color] focus:border-green-dark text-gray-400 focus:outline-none text-lg font-Sans-serif w-3/4"
          options={{
            date: true,
            delimiter: "/",
            datePattern: ["d", "m", "Y"],
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="people" className="text-green-dark text-lg font-medium">
          Number of people
        </label>
        <Cleave
          id="people"
          name="people"
          placeholder="2"
          className="placeholder:text-lg border-b border-white transition-[border-color] focus:border-green-dark text-green-dark focus:outline-none text-lg font-Sans-serif w-3/4"
          options={{
            numeral: true,
          }}
        />
      </div>
    </FormContainer>
  );
};

export default HeaderBookingForm;
