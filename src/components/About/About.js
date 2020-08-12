import React from 'react';
import styles from './About.module.css';
import { Grid, Typography } from '@material-ui/core';
import ReactTypingEffect from 'react-typing-effect';
import workingMan from '../../images/workingMan.gif';
import whyUs from '../../images/whyUs.png';
import useWebAnimation from '@wellyshen/use-web-animations';

export const About = () => {
	const { ref } = useWebAnimation({
		keyframes: [ { transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' } ],
		timing: {
			duration: 7000,
			iterations: Infinity
		}
	});

	return (
		<div className={styles.container}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Grid container spacing={2}>
						<Grid item xs={10} md={5}>
							<Typography variant="h1">
								<ReactTypingEffect text="We work since 2007" eraseDelay={5000000000000} />
							</Typography>
							<Typography>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
								has been the industry's standard dummy text ever since the 1500s, when an unknown
								printer took a galley of type and scrambled it to make a type specimen book. It has
								survived not only five centuries, but also the leap into electronic typesetting,
								remaining essentially unchanged. It was popularised in the 1960s with the release of
								Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
								publishing software like Aldus PageMaker including versions of Lorem Ipsum.
							</Typography>
						</Grid>
						<Grid item xs={10} md={5} className={styles.img1container}>
							<img src={workingMan} alt="Working Man GIF" className={styles.img1} />
						</Grid>
					</Grid>
				</Grid>

				<Grid item xs={12}>
					<Grid container spacing={2}>
						<Grid item xs={10} md={6} className={styles.img2container}>
							<img src={whyUs} alt="Why Us?" ref={ref} className={styles.img2} />
						</Grid>
						<Grid item xs={10} md={6}>
							<Typography variant="h1">
								<ReactTypingEffect text="Why us?" eraseDelay={5000000000000} />
							</Typography>
							<Typography>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
								has been the industry's standard dummy text ever since the 1500s, when an unknown
								printer took a galley of type and scrambled it to make a type specimen book. It has
								survived not only five centuries, but also the leap into electronic typesetting,
								remaining essentially unchanged. It was popularised in the 1960s with the release of
								Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
								publishing software like Aldus PageMaker including versions of Lorem Ipsum.
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};
