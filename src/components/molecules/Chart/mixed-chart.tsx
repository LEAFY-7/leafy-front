import React from 'react';
import Chart from 'chart.js/auto';
import FeedActivityDto from 'dto/my/feedActivity.dto';

interface Props {
    chartList: FeedActivityDto[];
}

const MixedChart = ({ chartList, ...rest }: Props) => {
    const chartRef = React.useRef(null);
    const chartInstanceRef = React.useRef(null);

    console.log('프롭', chartList);
    React.useEffect(() => {
        const year = new Date().getFullYear();
        const canvas = chartRef.current;
        const ctx = canvas.getContext('2d');

        const labels = chartList.map((item) => `${item.month}월`);
        const data = chartList.map((item) => item.count);

        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }
        console.log(labels, data);

        const newChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels,
                datasets: [
                    {
                        label: `${year}년 나의 활동`,
                        data,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                    },
                ],
            },
        });

        chartInstanceRef.current = newChart;
    }, [, chartList]);

    return <canvas ref={chartRef} width={100} height={100} {...rest}></canvas>;
};
export default MixedChart;
