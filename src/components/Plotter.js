import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as chartJS } from 'chart.js/auto';
import 'chartjs-adapter-date-fns';
import './plotter.css'
const Plotter = () => {
  const [graphP, setgraphP] = useState([]);
  const [graphMC, setgraphMC] = useState([]);
  const [graphTV, setgraphTV] = useState([]);
  // const [fetchD, setFetchD] = useState(true);
  useEffect(() => {

      const fetchC = async () => {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily

            `);
        setgraphP(response.data.prices);
        setgraphMC(response.data.market_caps);
        setgraphTV(response.data.total_volumes);
      };
      fetchC();
      console.log("a1" + graphP);
      console.log("a2" + graphMC);
      console.log("a3" + graphTV);
      // setFetchD(false)
    
  }, [graphP, graphMC, graphTV]);

  const chartData = {
    labels: graphP.map(item => new Date(item[0])), // Convert timestamp to date string
    datasets: [
      {
        label: 'Price',
        data: graphP.map(item => item[1]),
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.2)',
        fill: true,
      }
      // {
      //   label: 'Market Cap',
      //   data: graphMC.map(item => item[1]),
      //   borderColor: 'green',
      //   backgroundColor: 'rgba(0, 255, 0, 0.2)',
      //   fill: true,
      // },
      // {
      //   label: 'Total Volume',
      //   data: graphTV.map(item => item[1]),
      //   borderColor: 'orange',
      //   backgroundColor: 'rgba(255, 165, 0, 0.2)',
      //   fill: true,
      // },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
          tooltipFormat: 'dd/MM/yyyy', // Format for tooltip
        },
      },
      y: {
        beginAtZero: false,
      },
    },
  };


  return (
    // <div>hell</div>
    <>
      <div className='chart'>
      <Line data={chartData} options={chartOptions}></Line>
      </div>
      
    </>

  )
}

export default Plotter