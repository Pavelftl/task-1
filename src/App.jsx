import styles from './App.module.css';
import data from './assets/data.json';
import { useState } from 'react';

export const App = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const isFirstStep = activeIndex === 0;
	const isLastStep = activeIndex === data.length - 1;

	const onClickBack = () => {
		if (!isFirstStep) {
			setActiveIndex((prev) => prev - 1);
		}
	};

	const onClickForward = () => {
		if (!isLastStep) {
			setActiveIndex((prev) => prev + 1);
		}
	};

	const onClickRestart = () => {
		setActiveIndex(0);
	};
	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>{data[activeIndex].content}</div>
					<ul className={styles['steps-list']}>
						{data.map((step, index) => (
							<li
								key={step.id}
								onClick={() => setActiveIndex(index)}
								className={`${styles['steps-item']} ${index <= activeIndex ? styles.done : ''} ${index === activeIndex ? styles.active : ''}`}
							>
								<button className={styles['steps-item-button']}>{index + 1}</button>
								{step.title}
							</li>
						))}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							onClick={onClickBack}
							className={styles.button}
							disabled={isFirstStep}
						>
							Назад
						</button>

						{isLastStep ? (
							<button onClick={onClickRestart} className={styles.button}>
								Начать сначала
							</button>
						) : (
							<button onClick={onClickForward} className={styles.button}>
								Далее
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
