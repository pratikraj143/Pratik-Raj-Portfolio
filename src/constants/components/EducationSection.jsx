import { motion } from "framer-motion";
import { educationData } from "../../constants";
import { FaUniversity, FaSchool, FaHome } from "react-icons/fa";

const iconMap = {
  FaUniversity: <FaUniversity className="text-blue-600 text-xl" />,
  FaSchool: <FaSchool className="text-orange-500 text-xl" />,
  FaHome: <FaHome className="text-red-500 text-xl" />,
};

const EducationTimeline = () => {
  return (
    <div className="max-w-3xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Educational Qualification</h2>
      <div className="border-l-4 border-blue-500 pl-6 space-y-10">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="relative group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute -left-8 top-1">
              {iconMap[edu.icon] ?? <FaSchool/>}
            </div>
            <div className="shadow-md rounded-xl p-5 hover:bg-blue-300 transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold">{edu.course}</h3>
              <p className="text-sm text-gray-600">
                <strong>Institution:</strong> {edu.institution}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Board/University:</strong> {edu.board}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Year of Passing:</strong> {edu.year}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Percentage/CGPA:</strong> {edu.cgpa}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EducationTimeline;
