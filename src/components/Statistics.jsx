import React, { PureComponent } from "react";
import bgOne from "../assets/All Images/Vector.png";
import bgTwo from "../assets/All Images/Vector-1.png";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Assignment 1", score: 59, netMarks: 60 },
  { name: "Assignment 2", score: 60, netMarks: 60 },
  { name: "Assignment 3", score: 60, netMarks: 60 },
  { name: "Assignment 4", score: 60, netMarks: 60 },
  { name: "Assignment 5", score: 60, netMarks: 60 },
  { name: "Assignment 6", score: 60, netMarks: 60 },
  { name: "Assignment 7", score: 60, netMarks: 60 },
  { name: "Assignment 8", score: 60, netMarks: 60 },
];

class Statistic extends PureComponent {
  render() {
    return (
      <section>
        <style>
          {`.liner-gradient {
          background: linear-gradient(90deg, rgba(126, 144, 254, 0.1) 0%, rgba(152, 115, 255, 0.1) 100%);
        }`}
        </style>
        <div className="jobDetails h-[298px] flex justify-center items-center liner-gradient">
          <img
            className="absolute top-0 right-0 bg-no-repeat"
            src={bgTwo}
            alt=""
          />
          <h1 className="text-[#1A1919] text-3xl font-extrabold">
            Statistics
          </h1>
          <img className="absolute left-0 top-[151px]" src={bgOne} alt="" />
        </div>
        <div className="max-w-7xl mx-auto h-[350px] px-4 mb-12">
          <ResponsiveContainer>
            <ComposedChart
              data={data}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="name" />
              <YAxis
                label={{
                  value: "Assignment Score",
                  angle: -90,
                  position: "insideLeft",
                }}
                tickFormatter={(value) => `${value}%`}
                domain={[0, 100]}
              />
              <Tooltip
                formatter={(value) => `${value}%`}
                labelFormatter={(label) => ` ${label}`}
              />
              <Legend />
              <Bar dataKey="score" name="Score" fill="#8884d8" />
              <Line
                type="monotone"
                dataKey="netMarks"
                name="Net Marks"
                stroke="#82ca9d"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </section>
    );
  }
}

export default Statistic;