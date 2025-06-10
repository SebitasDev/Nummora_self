import { Line } from 'react-chartjs-2';
import { useSemiannualIncreaseQuotaChart } from "@/app/dashboard/borrower/hooks/";

interface SemiannualIncreaseQuotaChartProps {
    semiannual: number;
}

export const SemiannualIncreaseQuotaChart = ({ semiannual }: SemiannualIncreaseQuotaChartProps) => {
    const { data, options } = useSemiannualIncreaseQuotaChart(semiannual);
    return <Line data={data} options={options} />;
};

