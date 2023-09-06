import React from 'react';
import Chart from 'chart.js/auto';

const monthList = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
const data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 90, 110];
const MixedChart = () => {
    const chartRef = React.useRef(null);

    React.useEffect(() => {
        const canvas = chartRef.current;
        const ctx = canvas.getContext('2d');

        new Chart(ctx, {
            type: 'bar', // "bar" 차트 유형
            data: {
                labels: monthList,
                datasets: [
                    {
                        label: 'Sample Data',
                        data: data,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                    },
                ],
            },
        });
    }, []);

    return <canvas ref={chartRef} style={{ width: '100%', height: '100%' }}></canvas>;
};
export default MixedChart;
