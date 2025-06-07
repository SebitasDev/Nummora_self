import {ArcElement, Chart as ChartJS, ChartOptions, Legend, Tooltip} from "chart.js";

export const useInvestmentDistributionChart = () => {

    ChartJS.register(ArcElement, Tooltip, Legend);
    const options: ChartOptions<'pie'> = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Distribución de dinero invertido',
            }
        }
    };

    const data = {
        labels: ['Prestado', 'Pagado', 'No Pagado'],
        datasets: [
            {
                label: '% del dinero',
                data: [50, 20, 30],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                ],
                borderColor: '#fff',
                borderWidth: 2,
            },
        ],
    };
    
    return { options, data }
}