import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";

type MobileMenuToggleProps = {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
};

const MobileMenuToggle: React.FC<MobileMenuToggleProps> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => (
  <motion.button
    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    className="text-white"
    aria-label="Mobile Menu"
    whileTap={{ scale: 0.9 }}
  >
    <FaBars size={30} />
  </motion.button>
);

export default MobileMenuToggle;
