import React, { useEffect, useState } from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, LineChart, ResponsiveContainer, Scatter, Tooltip, XAxis, YAxis } from 'recharts';


const Dashboard = () => {
    const [datas, setData] = useState([])
    useEffect(() => {
        fetch("fakedata.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    // console.log(datas);
    return (
        <div className="investment">
            <div className="title">
                <h1 className='text-4xl text-center'>Investment</h1>
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
          <Area type="monotone" dataKey="investment" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="investment" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
          <Scatter dataKey="sell" fill="red" />
        </ComposedChart>
            </div>
        </div>

    );
};

export default Dashboard;