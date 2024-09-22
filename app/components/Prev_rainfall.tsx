import { Line } from 'react-chartjs-2';

export default function RainfallChart() {
    // Define the data type for the chart
    const data: ChartData<'line'> = {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
        datasets: [
            {
                label: 'Siachen Glacier Rainfall (mm)',
                data: [12, 19, 30, 5, 2],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            },
            {
                label: 'Gangotri Glacier Rainfall (mm)',
                data: [10, 25, 15, 7, 5],
                fill: false,
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
            },
            {
                label: 'Pindari Glacier Rainfall (mm)',
                data: [5, 10, 20, 2, 1],
                fill: false,
                borderColor: 'rgb(54, 162, 235)',
                tension: 0.1,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
            },
        ],
    };

    // Define the options type for the chart
    const options: ChartOptions<'line'> = {
        scales: {
            y: {
                type: 'linear',
                beginAtZero: true,
            },
        },
        plugins: {
            customAlert: {
                alertRanges: [
                    { min: 20, max: 25, color: 'rgba(255, 0, 0, 0.3)' }, // Red alert range
                ],
            },
        },
    };

    // Define the plugin type to avoid 'any' type issues
    const plugins: Plugin<'line'>[] = [{
        id: 'customAlert',
        beforeDraw: (chart: Chart<'line'>) => {
            const ctx = chart.ctx;
            const yScale = chart.scales.y;
            const xScale = chart.scales.x;
            const { alertRanges } = chart.config.options.plugins?.customAlert || {};

            alertRanges?.forEach((range: { min: number, max: number, color: string }) => {
                const yRangeStart = yScale.getPixelForValue(range.min);
                const yRangeEnd = yScale.getPixelForValue(range.max);

                ctx.fillStyle = range.color;
                ctx.fillRect(
                    xScale.left, 
                    yRangeEnd, 
                    xScale.width, 
                    yRangeStart - yRangeEnd
                );
            });
        }
    }];

    return <Line data={data} options={options} plugins={plugins} />;
}