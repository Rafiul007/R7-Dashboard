import React from "react";
import { axisClasses, BarChart } from "@mui/x-charts";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  useTheme,
} from "@mui/material";

interface QuarterlyBarGraphProps {
  data: { quarter: string; revenue: number; expense: number }[];
  title?: string;
  subtitle?: string;
}

const QuarterlyBarGraph: React.FC<QuarterlyBarGraphProps> = ({
  data,
  title = "Quarterly Revenue vs Expense",
  subtitle = "Comparison of revenue and expense for each quarter",
}) => {
  const categories = data.map((item) => item.quarter);
  const revenueData = data.map((item) => item.revenue);
  const expenseData = data.map((item) => item.expense);
  const theme = useTheme();
  const chartSetting = {
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: "translate(-25px, 0)",
      },
      [`.${axisClasses.top} .${axisClasses.label}`]: {
        transform: "translate(25px, 0)",
      },
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
        title={<Typography variant="h6">{title}</Typography>}
        subheader={
          <Typography variant="body2" color="textSecondary">
            {subtitle}
          </Typography>
        }
      />
      <CardContent
        sx={{
          height: "calc(100% - 64px)", // Adjust height to fit within card
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BarChart
          series={[
            {
              data: revenueData,
              label: "Revenue",
              color: theme.palette.info.main,
            },
            {
              data: expenseData,
              label: "Expense",
              color: theme.palette.error.main,
            },
          ]}
          {...chartSetting}
          width={1000} // Use most of the width of the container
          height={450} // Adjust height to ensure axis labels are visible
          xAxis={[{ scaleType: "band", data: categories, label: "Quarter" }]}
          yAxis={[
            {
              scaleType: "linear",
              label: "Amount ($)",
            },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default QuarterlyBarGraph;
