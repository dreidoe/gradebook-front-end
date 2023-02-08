import Table from "@mui/material/Table";
import PropTypes from "prop-types";
import StudentTBody from "./student-tbody";
import StudentTFoot from "./student-tfoot";
import StudentTH from "./student-th";

export default function MUITable({ student }) {
  return (
    <Table aria-label={`${student.name} grades table`}>
      <StudentTH />
      <StudentTBody grades={student.grades} />
      <StudentTFoot grades={student.grades} />
    </Table>
  );
}

MUITable.propTypes = {
  student: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    grades: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        earned: PropTypes.number.isRequired,
        possible: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
