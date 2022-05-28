import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import ShortInfo from "../components/shortInfo/ShortInfo"
import Title from "../components/title/Title"
import Chart from "../components/transaction/chart/Chart"
import NumberOfTransaction from "../components/transaction/numberOfTransaction/NumberOfTransaction"
import TransactionContainer from "../components/transaction/TransactionContainer.tsx/TransactionContainer"
import Menu from "../components/menu/Menu"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>NeoBANKS</title>
				<meta name='description' content='Reto de programacion de CaixaBank' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<Title />
				<ShortInfo />
				<TransactionContainer>
					<NumberOfTransaction key={"Today"} period='Today' transactions={4} />
					<NumberOfTransaction
						key={"Monthly"}
						period='Last Month'
						transactions={37}
					/>
				</TransactionContainer>
				<Chart />
				<Menu />
			</main>
		</div>
	)
}

export default Home
