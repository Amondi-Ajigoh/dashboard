// src/components/Dashboard.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import './Dashboard.css';

function Dashboard() {
  // Sample data for charts
  const lineData = [
    { name: 'Jan', sales: 30 },
    { name: 'Feb', sales: 20 },
    { name: 'Mar', sales: 50 },
    { name: 'Apr', sales: 80 },
    { name: 'May', sales: 60 },
  ];

  const barData = [
    { name: 'Product A', quantity: 2400 },
    { name: 'Product B', quantity: 1398 },
    { name: 'Product C', quantity: 9800 },
    { name: 'Product D', quantity: 3908 },
  ];

  const tableData = [
    { id: 1, name: 'John Doe', age: 28, role: 'Developer' },
    { id: 2, name: 'Jane Smith', age: 34, role: 'Designer' },
    { id: 3, name: 'Sam Green', age: 22, role: 'Intern' },
  ];

  return (
    <div className="dashboard">
      <h1>Welcome to Your Dashboard</h1>
      
      <div className="charts">
        <div className="chart">
          <h3>Monthly Sales</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart">
          <h3>Product Quantities</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="quantity" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="data-table">
        <h3>Employee Information</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.age}</td>
                <td>{employee.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
