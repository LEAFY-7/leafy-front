import React from 'react';
import Chart from 'chart.js/auto';
import FeedActivityDto from 'dto/my/feedActivity.dto';
import Typography from 'components/atoms/Typograph/default-typography';
import { theme } from 'configs/ui.config';

interface Props {
    chartList: FeedActivityDto[];
}

const MixedChart = ({ chartList, ...rest }: Props) => {
    const chartRef = React.useRef(null);
    const chartInstanceRef = React.useRef(null);

    React.useEffect(() => {
        const canvas = chartRef.current;
        const ctx = canvas.getContext('2d');

        const defaultList = Array.from({ length: 12 }, (_, i) => ({
            year: new Date().getFullYear(),
            month: i + 1,
            count: 1,
        }));

        const updatedData = defaultList.map((item) => {
            const existingData = chartList.find(
                (chartItem) => chartItem.year === item.year && chartItem.month === item.month,
            );
            if (existingData) {
                item.count = existingData.count;
                return item;
            } else {
                return item;
            }
        });

        const labels = updatedData.map((item) => `${item.month}월`);
        const data = updatedData.map((item) => item.count);
        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }
        const newChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels,
                datasets: [
                    {
                        data,
                        backgroundColor: theme.colors.secondary,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                    },
                    {
                        type: 'line',
                        data,
                    },
                    {
                        type: 'line',
                        data: [calculateAverage(data) + 10],
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false,
                    },
                },
            },
        });

        chartInstanceRef.current = newChart;
    }, [chartList]);

    return (
        <>
            <Typography variant="BODY1" color="primary" textAlign="center" marginTop={8} marginBottom={8}>
                {new Date().getFullYear()}년 나의 활동
            </Typography>
            <canvas ref={chartRef} width={100} height={100} {...rest}></canvas>
        </>
    );
};
export default MixedChart;

function calculateAverage(arr) {
    if (arr.length === 0) {
        return 0;
    }

    const sum = arr.reduce((total, currentValue) => total + currentValue, 0);
    const average = sum / arr.length;
    return average;
}
