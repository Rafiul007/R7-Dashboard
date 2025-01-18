export interface RevenueOverviewCardProps {
    day: string;
    statistics: {
        type: string;
        value: number;
    }[];
}

export enum STAT_TYPE{
    REVENUE = "Revenue",
    ORDERS = "Orders"
}