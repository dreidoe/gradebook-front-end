import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function Error({ message }) {
    return (
        <motion.p
          className="my-2 text-red-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {message}
        </motion.p>
      );
    }
    
    Error.defaultProps = {