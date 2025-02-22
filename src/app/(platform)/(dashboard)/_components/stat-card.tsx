import React from "react";
import { motion } from "framer-motion";

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  progress: number;
  icon: React.ReactNode;
}

export function StatCard({
  title,
  value,
  description,
  progress,
  icon,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="rounded-lg bg-white p-6 shadow-lg"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <div className="rounded-full bg-purple-100 p-2">{icon}</div>
      </div>
      <div className="mt-2 flex items-baseline">
        <p className="text-3xl font-semibold text-gray-900">{value}</p>
      </div>
      <p className="mt-1 text-sm text-gray-500">{description}</p>
      <div className="mt-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Progress</span>
          <span className="font-medium text-gray-900">{progress}%</span>
        </div>
        <div className="mt-1 h-2 rounded-full bg-gray-200">
          <div
            className="h-2 rounded-full bg-purple-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}
