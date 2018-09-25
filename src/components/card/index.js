import style from './style.css';

export default function Card({
	hiddenValue,
	flipStatus,
	onClick
}) {

	return (
		<div class={style.card} data-flip-status={flipStatus}>
			<button class={style.front} onClick={onClick}>
					?
			</button>
			<div class={style.back}>{hiddenValue}</div>
		</div>
	);
}
