import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Index = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          Anton Osika
        </h1>
        <p className="text-xl mb-8 text-gray-700">
          Solving neglected problems with a science and engineering mindset.
        </p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">About Me</h2>
          <ul className="list-disc list-inside mb-8 text-gray-700">
            <li>Grew up in Stockholm, Sweden</li>
            <li>Role models include Feynman and similar physicists</li>
            <li>Helped build Sana Labs, Depict.ai, Lovable</li>
            <li>Founders Pledge member</li>
          </ul>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowMore(!showMore)}
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
        >
          {showMore ? "Show Less" : "Show More"}
          <ChevronDown className={`ml-2 transform transition-transform duration-300 ${showMore ? "rotate-180" : ""}`} />
        </motion.button>

        {showMore && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Interests</h2>
            <ul className="list-disc list-inside mb-8 text-gray-700">
              <li>Future of humanity</li>
              <li>Best practices for building products</li>
              <li>Science+Engineering-mindset to design mechanisms for a maximally positive-sum society</li>
            </ul>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Index;
