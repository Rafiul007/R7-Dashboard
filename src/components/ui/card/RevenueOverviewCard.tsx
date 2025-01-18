import React, { FC } from "react";
import { RevenueOverviewCardProps, STAT_TYPE } from "../../../types/card";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  useTheme,
} from "@mui/material";
import {
  ArrowDropUp,
  MonetizationOn,
} from "@mui/icons-material";

export const RevenueOverviewCard: FC<RevenueOverviewCardProps> = ({
  day,
  statistics,
}) => {
  const theme = useTheme();
  return (
    <Card sx={{ position: "relative", overflow: "hidden" }}>
      <CardHeader title={day} subheader="vs last day" />
      {statistics.map((statistic) => (
        <CardContent key={statistic.type}>
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              {statistic.type === STAT_TYPE.REVENUE
                ? `$${statistic.value}`
                : statistic.value}
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: theme.palette.info.main, fontWeight: 500 }}
            >
              {statistic.type}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="body2" color="text.secondary">
                5% increase from last month
              </Typography>
              <ArrowDropUp sx={{ color: "green" }} />
            </Box>
          </Box>
        </CardContent>
      ))}
      {/* Watermark */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 20,
          fontSize: "4rem",
          fontWeight: 700,
          color: theme.palette.grey[300],
          whiteSpace: "nowrap",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <MonetizationOn sx={{ fontSize: "6rem", color: theme.palette.info.light }} />
      </Box>
    </Card>
  );
};

export default RevenueOverviewCard;
