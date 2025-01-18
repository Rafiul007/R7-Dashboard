import React, { useState } from "react";
import { axisClasses, LineChart } from "@mui/x-charts";
import { Card, CardContent, CardHeader, Typography, ToggleButton, ToggleButtonGroup } from "@mui/material";

interface SalesLineGraphProps {
  weeklyData: { day: string; sales: number }[]; // Data for weekly sales
  monthlyData: { month: string; sales: number }[]; // Data for monthly sales
}

const SalesLineGraph: React.FC<SalesLineGraphProps> = ({ weeklyData, monthlyData }) => {
  const [view, setView] = useState<"weekly" | "monthly">("weekly");

  // Determine the data to display based on selected view
  const currentData = view === "weekly" ? weeklyData : monthlyData;

  // Extract x-axis labels and sales data
  const xAxisLabels =
    view === "weekly"
      ? weeklyData.map((item) => item.day) // Access 'day' only for weekly data
      : monthlyData.map((item) => item.month); // Access 'month' only for monthly data

  const salesData = currentData.map((item) => item.sales);
const chartSetting = {
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: "translate(-25px, 0)",
      }
    },
  };
  return (
    <Card
      elevation={3}
      sx={{
        width: "100%",
        height: "100%",
        padding: 2,
        boxSizing: "border-box",
      }}
    >
      <CardHeader
        title={<Typography variant="h6">Sales Overview</Typography>}
        subheader={
          <Typography variant="body2" color="textSecondary">
            {view === "weekly" ? "Weekly Sales Data" : "Monthly Sales Data"}
          </Typography>
        }
        action={
          <ToggleButtonGroup
            value={view}
            exclusive
            onChange={(e, newView) => setView(newView)}
            size="small"
          >
            <ToggleButton value="weekly">Weekly</ToggleButton>
            <ToggleButton value="monthly">Monthly</ToggleButton>
          </ToggleButtonGroup>
        }
      />
      <CardContent
        sx={{
          height: "calc(100% - 64px)", // Adjust height to fit within the card
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LineChart
        {...chartSetting}
          series={[
            {
              data: salesData,
              label: "Sales",
              color: "royalblue",
            },
          ]}
          width={1000} // Dynamically use width based on container
          height={400} // Adjust height for better visibility
          xAxis={[
            {
              scaleType: "band",
              data: xAxisLabels,
              label: view === "weekly" ? "Day of Week" : "Month",
            },
          ]}
          yAxis={[
            {
              scaleType: "linear",
              label: "Sales Amount ($)",
              position: "left",
              min: 0,
              max: Math.max(...salesData) + 100, // Add padding to the max value
            },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default SalesLineGraph;
