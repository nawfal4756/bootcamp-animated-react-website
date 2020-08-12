import React from 'react';
import styles from './Contact.module.css';
import { Grid } from '@material-ui/core';

export const Contact = () => {
	return (
		<div className={styles.container}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Grid container spacing={2}>
						<Grid item xs={10} md={5}>
							<img src="" alt="" />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};
