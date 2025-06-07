import {
    CategoryScale,
    Chart as ChartJS, ChartOptions,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip
} from "chart.js";

export const useSemiannualEarnings = (semiannual:number) => {
    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

    let delayed: boolean;
    const options: ChartOptions<'line'> = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Ganancias semestrales'
            }
        },
        animation: {
            onComplete: () => {
                delayed = true;
            },
            delay: (context) => {
                let delay = 0;
                if (context.type === 'data' && context.mode === 'default' && !delayed) {
                    delay = context.dataIndex * 400 + context.datasetIndex * 200;
                }
                return delay;
            }
        }
    };

    let monthLabels : string[] = [];
    
    semiannual == 1 ? monthLabels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio']
        : monthLabels = ['Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']    
    
    const data = {
        labels: [...monthLabels],
        datasets: [
            {
                label: 'Mis ganancias',
                data: [15000, 55000, 34700, 100000, 80000, 250000],
                borderColor: '#00C707',
                backgroundColor: 'rgba(0, 199, 7, 0.3)',
                tension: 0
            }
        ]
    };
    
    return { options, data }
}