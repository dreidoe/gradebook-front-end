import TableBody from "@mui/material/TableBody";
import PropTypes from "prop-types";
import StudentTRow from "./student-trow";

export default function StudentTBody({ grades }) {
  return (
    <TableBody>
      {grades.map((grade) => (
        <StudentTRow key={grade._id} grade={grade} />
      ))}
    </TableBody>
  );
}

StudentTBody.propTypes = {
  grades: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      earned: PropTypes.number.isRequired,
      possible: PropTypes.number.isRequired,
    })
  ).isRequired,
};
