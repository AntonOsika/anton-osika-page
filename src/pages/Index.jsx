import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [showMore, setShowMore] = useState(false);
  const [gradientColors, setGradientColors] = useState({
    from: "blue-200",
    via1: "indigo-200",
    via2: "pink-200",
    to: "purple-200"
  });

  const updateColor = (position, color) => {
    setGradientColors(prev => ({ ...prev, [position]: color }));
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-${gradientColors.from} via-${gradientColors.via1} via-${gradientColors.via2} to-${gradientColors.to} p-8`}>
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowMore(!showMore)}
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
        >
          {showMore ? "Show Less" : "Show More"}
          <ChevronDown className={`ml-2 transform transition-transform duration-300 ${showMore ? "rotate-180" : ""}`} />
        </motion.button>

        <AnimatePresence>
          {showMore && (
            <motion.div
              key="more-content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-8 overflow-hidden"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Interests</h2>
              <ul className="list-disc list-inside mb-8 text-gray-700">
                <li>Future of humanity</li>
                <li>Best practices for building products</li>
                <li>Science+Engineering-mindset to design mechanisms for a maximally positive-sum society</li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Customize Background</h2>
          <div className="flex flex-wrap gap-4">
            {Object.entries(gradientColors).map(([position, color]) => (
              <div key={position} className="flex flex-col items-center">
                <span className="mb-2 text-sm font-medium text-gray-700">{position}</span>
                <div className="flex gap-2">
                  {['blue', 'indigo', 'pink', 'purple'].map(baseColor => (
                    <Button
                      key={baseColor}
                      variant="outline"
                      size="sm"
                      className={`w-8 h-8 rounded-full bg-${baseColor}-200 hover:bg-${baseColor}-300`}
                      onClick={() => updateColor(position, `${baseColor}-200`)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;
