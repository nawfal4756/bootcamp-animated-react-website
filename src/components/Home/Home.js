import React from 'react';
import styles from "./Home.module.css";
import { Grid, Typography } from '@material-ui/core';
import ComputerTable from '../../images/Computer Table.png';
import ManWorking from '../../images/Man Working(1).png';
import whatWeDo from '../../images/whatWeDo.png';
import useWebAnimation from '@wellyshen/use-web-animations';
import Typewriter from 'typewriter-effect';

export const Home = () => {   

    const {ref} = useWebAnimation({
        keyframes: [
            {transform: "translateX(20px)"},
            {transform: "translateX(-20px)"}
        ],
        timing: {
            duration: 2000,
            iterations: Infinity,
            direction: "alternate",
            easing: "ease-in-out"
        }
    })

    const {ref: ref2} = useWebAnimation({
        keyframes: [
            {transform: "translateY(30px)"},
            {transform: "translateY(-30px)"}
        ],
        timing: {
            duration: 2000,
            iterations: Infinity,
            direction: "alternate"
        }
    })

    return (
        <div className={styles.container}>
            <Grid container spacing={2}>
                <Grid item xs={10} md={5}>
                    <Typography variant="h1">
                        <Typewriter 
                            options={{
                                strings: ['Welcome to WebDev'],
                                autoStart: true,
                                loop: true
                            }}
                        />
                    </Typography>
                    <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
                </Grid>
                <Grid item xs={10} md={5} className={styles.img1grid}>
                    <img src={ComputerTable} alt="Computer Table" className={styles.table} />
                    <img src={ManWorking} alt="Man Working" className={styles.man} ref={ref} />
                </Grid>
                <Grid item xs={10} md={5} className={styles.img2grid}>
                    <img src={whatWeDo} alt="What We Do?" className={styles.img2} ref={ref2} />
                </Grid>
                <Grid item xs={10} md={5}>
                    <Typography variant="h1">What We Do?</Typography>
                    <Typography variant="h4">We provide the following services:</Typography>
                    <ul>
                        <li>Front End Development</li>
                        <li>Back End Development</li>
                        <li>Website Deployment</li>
                    </ul>
                </Grid>
            </Grid>
        </div>
    )
}
