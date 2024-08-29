import React, { useEffect, useRef } from 'react';
import { Chart, CategoryScale, BarController, BarElement, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Register the required components globally
Chart.register(CategoryScale, BarController, BarElement, LinearScale, Title, Tooltip, Legend);

interface ChartWidgetProps {
  type: 'bar';
  data: any;
  options?: any;
}

const ChartWidget: React.FC<ChartWidgetProps> = ({ type, data, options }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      // If a chart instance already exists, destroy it before creating a new one
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      // Create a new chart instance
      chartInstanceRef.current = new Chart(chartRef.current, {
        type,
        data,
        options,
      });
    }

    // Cleanup function to destroy the chart instance when the component unmounts or before re-creating it
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, [type, data, options]);

  return <canvas ref={chartRef} style={{ width: '100%', height: '400px' }} />;
};

export default ChartWidget;
