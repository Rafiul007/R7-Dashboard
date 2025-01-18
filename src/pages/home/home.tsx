import React, { FC } from "react";
import RevenueOverviewCard from "../../components/ui/card/RevenueOverviewCard";
import Grid from "@mui/material/Grid";
import QtyBarGraph from "../../components/ui/charts/QtyBarGraph";
import SalesLineGraph from "../../components/ui/charts/SalesLineGraph";

export const Home: FC = () => {
  const quarterlyData = [
    { quarter: "Q1", revenue: 55000, expense: 31000 },
    { quarter: "Q2", revenue: 70000, expense: 40200 },
    { quarter: "Q3", revenue: 80000, expense: 50030 },
    { quarter: "Q4", revenue: 60000, expense: 35001 },
  ];
  const weeklySales = [
    { day: "Monday", sales: 150 },
    { day: "Tuesday", sales: 200 },
    { day: "Wednesday", sales: 250 },
    { day: "Thursday", sales: 300 },
    { day: "Friday", sales: 400 },
    { day: "Saturday", sales: 500 },
    { day: "Sunday", sales: 450 },
  ];

  const monthlySales = [
    { month: "January", sales: 3000 },
    { month: "February", sales: 2800 },
    { month: "March", sales: 3200 },
    { month: "April", sales: 3500 },
    { month: "May", sales: 4000 },
    { month: "June", sales: 4500 },
    { month: "July", sales: 4200 },
    { month: "August", sales: 4600 },
    { month: "September", sales: 4700 },
    { month: "October", sales: 5000 },
    { month: "November", sales: 4800 },
    { month: "December", sales: 5200 },
  ];
  return (
    <Grid
      container
      spacing={2}
      padding={2}
      sx={{ width: "100%", margin: "0 auto", maxWidth: "90vw" }}
    >
      <Grid item xs={12} sm={6} md={4}>
        <RevenueOverviewCard
          day="Today"
          statistics={[
            { type: "Orders", value: 1 },
            { type: "Revenue", value: 2000 },
          ]}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <RevenueOverviewCard
          day="Past 30 days"
          statistics={[
            { type: "Orders", value: 2822 },
            { type: "Revenue", value: 44800 },
          ]}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <RevenueOverviewCard
          day="Past 30 days"
          statistics={[
            { type: "Orders", value: 2822 },
            { type: "Revenue", value: 44800 },
          ]}
        />      </Grid>
      <Grid item md={12}>
        <QtyBarGraph
          data={quarterlyData}
          title="Quarterly Performance"
          subtitle="Revenue vs Expense for Q1-Q4"
        />
      </Grid>
      <Grid item md={12}>
      <SalesLineGraph weeklyData={weeklySales} monthlyData={monthlySales} />

      </Grid>
    </Grid>
  );
};
