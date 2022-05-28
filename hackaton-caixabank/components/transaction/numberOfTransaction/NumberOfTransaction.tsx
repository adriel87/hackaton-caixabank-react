import style from "./numberOfTransaction.module.css"

interface Props {
	transactions: number
	period: Periods
}

type Periods = "Today" | "Last Week" | "Last Month" | "Last Year"

const NumberOfTransaction = ({
	transactions = 20,
	period = "Today",
}: Props) => {
	return (
		<div className={style.container}>
			<h2 className={style.header}>Transaction</h2>
			<p className={style.transaction}>{transactions}</p>
			<p className={style.period}>{period}</p>
		</div>
	)
}

export default NumberOfTransaction
