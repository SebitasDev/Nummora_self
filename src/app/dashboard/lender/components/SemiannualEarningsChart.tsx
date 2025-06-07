import { Line } from 'react-chartjs-2';
import {useSemiannualEarnings} from "@/app/dashboard/lender/hooks/";

interface SemiannualEarningsChartProps {
    semiannual: number;
}

export const SemiannualEarningsChart =  ({semiannual} : SemiannualEarningsChartProps) => {
    const { data, options } = useSemiannualEarnings(semiannual);
    return <Line data={data} options={options} />;
}