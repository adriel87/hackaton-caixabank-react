import { useState } from "react"
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js"

import { Line } from "react-chartjs-2"

//array whit 100 random number values
const data1 = [1, 2, 4, 5, 6, 4, 3]
const data2 = [11, 2, 4, 15, 16, 14, 3]
const data3 = [3, 20, 4, 15, 13, 4, 13]

import style from "./chart.module.css"

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
)

const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top" as const,
		},
		title: {
			display: true,
			text: "Chart.js Line Chart",
		},
	},
}

const labels = ["January", "February", "March", "April", "May", "June", "July"]
const data = {
	labels,
	datasets: [
		{
			label: "Dataset 1",
			data: data1.map(number => number),
			borderColor: "rgb(255, 99, 132)",
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		},
		{
			label: "Dataset 2",
			data: data2.map(number => number),
			borderColor: "rgb(25, 99, 200)",
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		},
		{
			label: "Dataset 3",
			data: data3.map(number => number),
			borderColor: "rgb(255, 190, 132)",
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		},
	],
}
const Chart = () => {
	const [period, setPeriod] = useState("monthly")

	const handlePeriod = (period: string) => {
		console.log(period)
		setPeriod(period)
	}

	return (
		<div className={style.container}>
			<h2 className={style.header}>Transaction Last Year</h2>
			<div className={style.select_period}>
				<button
					className={
						period === "monthly" ? style.button_selected : style.button
					}
					onClick={() => {
						handlePeriod("monthly")
					}}>
					Monthly
				</button>
				<button
					className={period === "daily" ? style.button_selected : style.button}
					onClick={() => {
						handlePeriod("daily")
					}}>
					Daily
				</button>
			</div>
			<Line data={data} options={options} />
		</div>
	)
}

export default Chart
