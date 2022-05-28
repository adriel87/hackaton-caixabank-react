import { IoMdCompass } from "react-icons/io"
import { BsFillBarChartFill } from "react-icons/bs"
import { FaUser } from "react-icons/fa"

import style from "./menu.module.css"
import { useState } from "react"
const Menu = () => {
	const [selected, setSelected] = useState("none")

	const handlerMenu = (selectedIcon: string) => {
		setSelected(selectedIcon)
	}

	return (
		<div className={style.container}>
			<BsFillBarChartFill
				onClick={() => {
					handlerMenu("chart")
				}}
				className={selected === "chart" ? style.icon : style.unselect}
			/>
			<IoMdCompass
				onClick={() => {
					handlerMenu("compass")
				}}
				className={selected === "compass" ? style.icon : style.unselect}
			/>
			<FaUser
				onClick={() => {
					handlerMenu("user")
				}}
				className={selected === "user" ? style.icon : style.unselect}
			/>
		</div>
	)
}

export default Menu
