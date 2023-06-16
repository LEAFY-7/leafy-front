import React from "react";
import Calendar from "react-calendar";
import styled from "@emotion/styled";

interface CustomCalenderProps {
  handleCalendarChange: (date: Date | Date[] | any) => void;
  selectedDate: Date | null;
}

const CustomCalender: React.FC<CustomCalenderProps> = ({
  handleCalendarChange,
  selectedDate = null,
}) => {
  return (
    <Wrapper>
      <Calendar onChange={handleCalendarChange} value={selectedDate} />
    </Wrapper>
  );
};

export default CustomCalender;

const Wrapper = styled.div`
  .react-calendar {
    position: absolute;
    z-index: 99;
  }
`;
