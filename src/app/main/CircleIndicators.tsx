import React from "react";

interface CircleColorsProps {
  circleColors: string[];
  currentBannerIndex: number;
}

const CircleIndicators: React.FC<CircleColorsProps> = ({
  circleColors,
  currentBannerIndex,
}) => {
  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 flex items-center space-x-2">
      {circleColors.map((color, index) => (
        <div
          key={index}
          style={{ backgroundColor: color }}
          className={`w-3 rounded-full ${
            index === currentBannerIndex
              ? "ring-2 ring-blue-500"
              : "ring-2 ring-gray-400"
          }`}
        />
      ))}
    </div>
  );
};

export default CircleIndicators;
