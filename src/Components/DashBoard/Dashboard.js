import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Scatter, Tooltip, XAxis, YAxis } from 'recharts';
import "./Dashboard.css"

const Dashboard = () => {
  const [datas, setData] = useState([])
  useEffect(() => {
    fetch("fakedata.json")
      .then(res => res.json())
      .then(data => setData(data))
  }, [])
  // console.log(datas);
  return (
    <div className="chart grid grid-cols-2 gap-6 mx-10 my-20">
      <div className="monthWiseSell bg-white rounded-xl">
        <div className="title">
          <h1 className='text-xl text-center text-blue-600'>Investment, Sell & Revinew</h1>
          <ComposedChart
          className='monthWiseSellChrt '
            width={500}
            height={400}
            data={datas}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="month" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="investment" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="investment" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
            <Scatter dataKey="sell" fill="red" />
          </ComposedChart>
        </div>
      </div>

      <div className="investmentVSrevinew bg-white rounded-xl">
      <h1 className='text-xl text-center text-blue-600'>Investment VS Revinew</h1>
        <BarChart
          width={500}
          height={300}
          data={datas}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" stackId="a" fill="#8884d8" />
          <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
        </BarChart>
      </div>

      <div className="sellVSrevinew bg-white rounded-xl">
         <h1 className='text-xl text-center text-blue-600'>Revinew VS Sell</h1>
         <p className='text-blue-800 font-bold'>Revinew</p>
        <AreaChart
          width={500}
          height={200}
          data={datas}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>

        <p className='text-blue-800 font-bold'>Sell</p>
        <AreaChart
          width={500}
          height={200}
          data={datas}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="sell" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      </div>
      <div className="investmentVSsell bg-white rounded-xl">
      <h1 className='text-xl text-center text-blue-600'>Investment VS Sell</h1>
      <ComposedChart
          width={500}
          height={400}
          data={datas}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="month" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="sell" stroke="#ff7300" />
        </ComposedChart>
      </div>
    </div>

  );
};

export default Dashboard;