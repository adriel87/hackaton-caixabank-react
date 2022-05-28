import style from "./transactionContainer.module.css"

const TransactionContainer = ({ children }: any) => {
	return <div className={style.container}>{children}</div>
}

export default TransactionContainer
