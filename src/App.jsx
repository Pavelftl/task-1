import { useState } from 'react';
import styles from './App.module.css';

export const App = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');
	const [isValueVaild, setisValueVaild] = useState(null);

	const onInputButtonClick = () => {
		const promptValue = prompt('Введите значение');

		if (promptValue.length < 3) {
			setError('Введенное значение должно содержать минимум 3 символа');
			setisValueVaild(false);
		} else {
			setValue(promptValue);
			setError('');
			setisValueVaild(true);
		}
	};

	const onAddButtonClick = () => {
		if (value) {
			const id = Date.now();
			setList((prev) => [...prev, { id, value }]);
		}
	};
	return (
		<div className={styles.app}>
			<h1 className={styles.pageHeading}>Ввод значения</h1>
			<p className={styles.noMarginText}>
				Текущее значение <code>value</code>:
				<output className={styles.currentValue}> &quot;{value}&quot;</output>
			</p>
			{error !== '' && <div className={styles.error}>{error}</div>}
			<div className={styles.buttonsContainer}>
				<button onClick={onInputButtonClick} className={styles.button}>
					Ввести новое
				</button>
				<button
					onClick={onAddButtonClick}
					className={styles.button}
					disabled={!isValueVaild}
				>
					Добавить в список
				</button>
			</div>
			<div className={styles.listContainer}>
				<h2 className={styles.listHeading}>Список:</h2>
				{list.length > 0 ? (
					<ul className={styles.list}>
						{list.map((item) => (
							<li key={item.id} className={styles.listItem}>
								{item.value}
							</li>
						))}
					</ul>
				) : (
					<p className={styles.noMarginText}>Нет добавленных элементов</p>
				)}
			</div>
		</div>
	);
};
