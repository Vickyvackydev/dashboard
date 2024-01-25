import { addDays, format } from "date-fns";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];

export const getWeekDates = () => {
  const today = new Date();
  const startOfWeek = addDays(today, -today.getDay()); // Get the start of the week
  const weekDates = [];

  for (let i = 0; i < 7; i++) {
    const currentDate = addDays(startOfWeek, i);
    const dayName = daysOfWeek[currentDate.getDay()];
    const dateString = format(currentDate, "yyyy-MM-dd");

    const isActive = i === today.getDay(); // Mark today as active

    weekDates.push({
      dayName,
      date: dateString,
      isActive,
    });
  }

  return weekDates;
};

// export const getDropdownStyles = (index) => {
//   if (index) {
//     return { maxHeight: !index && "-100%" };
//   }
// };
