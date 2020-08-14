import React from 'react';
import styles from './Contact.module.css';
import {
	Grid,
	Typography,
	FormControl,
	TextField,
	FormLabel,
	RadioGroup,
	FormControlLabel,
	Radio
} from '@material-ui/core';
import ReactTypingEffect from 'react-typing-effect';
import callUs2 from '../../images/callUs2.png';
import useWebAnimation from '@wellyshen/use-web-animations';

export const Contact = () => {
	const { ref } = useWebAnimation({
		keyframes: [
			{ transform: 'translateY(30px)' },
			{ transform: 'rotate(0deg)' },
			{ transform: 'rotate(-20deg)' },
			{ transform: 'rotate(20deg)' },
			{ transform: 'rotate(0deg)' }
		],
		timing: {
			duration: 1000,
			iterations: Infinity,
			direction: 'alternate',
			easing: 'ease-in-out'
		}
	});

	return (
		<div className={styles.container}>
			<Grid container spacing={2}>
				<Grid item xs={12} className={styles.heading}>
					<Typography variant="h2">
						<ReactTypingEffect text="Let's Connect" eraseDelay={5000000000000} />
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Grid container spacing={2}>
						<Grid item xs={10} md={5} className={styles.container2}>
							<Typography variant="h4" className={styles.heading2}>
								Contact Us
							</Typography>
							<FormControl>
								<TextField
									required
									id="standard-required"
									label="Full Name"
									placeholder="Name"
									className={styles.textfield}
								/>
								<TextField
									required
									id="standard-required"
									label="Contact Number"
									placeholder="Contact Number"
									type="number"
									className={styles.textfield}
								/>
								<TextField
									required
									id="standard-required"
									label="Email Address"
									placeholder="Email"
									type="email"
									className={styles.textfield}
								/>
								<br />
								<FormLabel className={styles.textfield}>Type of Help</FormLabel>
								<RadioGroup row className={styles.textfield}>
									<FormControlLabel
										value="suggestion"
										control={<Radio color="primary" />}
										label="Suggestion"
										labelPlacement="end"
									/>
									<FormControlLabel
										value="complaint"
										control={<Radio color="primary" />}
										label="Complaint"
										labelPlacement="end"
									/>
									<FormControlLabel
										value="query"
										control={<Radio color="primary" />}
										label="Query"
										labelPlacement="end"
									/>
								</RadioGroup>
								<TextField
									required
									id="standard-required"
									label="Content"
									className={styles.textfield2}
								/>
							</FormControl>
						</Grid>
						<Grid item xs={10} md={5} className={styles.imgcontainer}>
							<img src={callUs2} alt="Call Us" className={styles.img} ref={ref} />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};
