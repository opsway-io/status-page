import { FunctionComponent } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, Filler, BarElement, LinearScale } from "chart.js";
import { alpha, useTheme } from "@mui/material";

ChartJS.register(CategoryScale, LinearScale, BarElement, Filler);

function get24hLabels(): string[] {
    return [
        "00:00",
        "01:00",
        "02:00",
        "03:00",
        "04:00",
        "05:00",
        "06:00",
        "07:00",
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
        "23:00",
        "00:00",
        "01:00",
        "02:00",
        "03:00",
        "04:00",
        "05:00",
        "06:00",
        "07:00",
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
        "23:00",
    ];
}

const ResponseTimeGraph: FunctionComponent = () => {
    const theme = useTheme();

    const data = [];
    for (let i = 0; i < 48; i++) {
        data[i] = Math.floor(Math.random() * (200 - 120) + 120);
    }

    return (
        <Bar
            options={{
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                scales: {
                    y: {
                        ticks: {
                            callback: function (value, index, ticks) {
                                return value + " ms";
                            },
                            stepSize: 10,
                        },
                        min: 0,
                        beginAtZero: true,
                    },
                },
                animation: {
                    duration: theme.transitions.duration.standard,
                },
                responsive: true,
            }}
            height={42}
            data={{
                labels: get24hLabels(),
                datasets: [
                    {
                        data: data,
                        label: "Response time (ms)",
                        backgroundColor: alpha(theme.palette.success.main, 0.75),
                    },
                ],
            }}
        />
    );
};

export default ResponseTimeGraph;
