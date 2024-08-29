// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChartWidget from './ChartWidget'

function App() {
  // const [count, setCount] = useState(0)

  // Data for the stacked bar chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Product A',
        data: [10, 20, 30, 40, 50],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Product B',
        data: [20, 10, 40, 30, 50],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: 'Product C',
        data: [30, 40, 10, 50, 20],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  };
  
  const options = {
    responsive: true, // Ensures the chart adjusts to the container size
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };  

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* Add the ChartWidget below */}
      <div>
        <h2>Stacked Bar Chart</h2>
        <ChartWidget type="bar" data={data} options={options} />
      </div>
    </>
  );
}

export default App;
