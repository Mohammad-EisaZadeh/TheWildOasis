import {
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineChartBar,
} from "react-icons/hi";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  const numBookings = bookings.length;
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);
  const checkins = confirmedStays.length;
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);
  return (
    <>
      <Stat
        value={numBookings}
        title="bookings"
        icon={<HiOutlineBriefcase />}
        color="blue"
      />{" "}
      <Stat
        value={formatCurrency(sales)}
        title="sales"
        icon={<HiOutlineBanknotes />}
        color="green"
      />{" "}
      <Stat
        value={checkins}
        title="Checkins"
        icon={<HiOutlineCalendarDays />}
        color="indigo"
      />{" "}
      <Stat
        value={`${Math.round(occupation * 100)}%`}
        title="bookings"
        icon={<HiOutlineChartBar />}
        color="yellow"
      />
    </>
  );
}

export default Stats;
