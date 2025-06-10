import { Line } from 'react-chartjs-2';
import { useQoutaIncreasementPrediction } from "@/app/dashboard/borrower/hooks/";

interface QoutaIncreasementPredictionChartProps {
    semiannual: number;
}

export const QoutaIncreasementPredictionChart = ({ semiannual }: QoutaIncreasementPredictionChartProps) => {
    const { data, options } = useQoutaIncreasementPrediction(semiannual);
    return <Line data={data} options={options} />;
};

