
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Box, Grid, Typography, } from '@mui/material';
import './style.scss';
import backgroundvideo from '../../assets/backgroundvideo.mp4';
import frstslidericon from "../../assets/frstslidericon.svg";
import signinlogo from "../../assets/singinlogo.svg";
import CommonForm from '../../CCD/Form/Form';
interface CarouselItem {
    name: string;
    description: string;
    imgSrc: string;
    subheading?: string;
}

interface ItemProps {
    item: CarouselItem;
}
interface LoginError {
    message: string;
}
interface LoginProps {
    loginError?: LoginError;
    schemamodal: any;
    handleSubmit: (values: any) => void;
}


const carouselItems: CarouselItem[] = [

    {
        name: "Venkata Sai",
        description: "Eagle Yard has completely transformed the way our team approaches materials. The sheer range of automation and the seamless integration of the wireless system into our workflow have been game-changers.",
        imgSrc: frstslidericon,
        subheading: "Visual Designer, Lotus"
    },

    {
        name: "Hariteja",
        description: "Eagle Yard has completely transformed the way our team approaches materials. The sheer range of automation and the seamless integration of the wireless system into our workflow have been game-changers.",
        imgSrc: frstslidericon,
        subheading: "Developer, Lotus"
    },

    {
        name: "Divya",
        description: "Eagle Yard has completely transformed the way our team approaches materials. The sheer range of automation and the seamless integration of the wireless system into our workflow have been game-changers.",
        imgSrc: frstslidericon,
        subheading: "Frontend, Lotus"
    }

];


const Login: React.FC<LoginProps> = ({ loginError, schemamodal, handleSubmit }) => {

    const handleCarouselChange = (now?: number, previous?: number) => {
        console.log(`Slide changed from ${previous} to ${now}`);
    };


    return (
        <div className='main_container_signin'>


            <div className="loading">


                <video className="bgvideo" autoPlay muted loop>
                    <source src={backgroundvideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>



                <div className='card_container'>



                    <div className="smallcard">



                        <div className="carousel-container">
                            <Carousel
                                className='carousel'
                                onChange={handleCarouselChange}
                                indicatorContainerProps={{
                                    className: 'indicator-container',
                                }}
                                activeIndicatorIconButtonProps={{
                                    className: 'active-indicator',
                                }}
                            >
                                {carouselItems.map((item, index) => (
                                    <Item key={index} item={item} />
                                ))}
                            </Carousel>
                        </div>
                    </div>



                    <div className='bigcard'>
                        <div className='top_container_signin'>
                            <div className='loginheading_signin'>
                                <h1 className='mainheading_singin'>Login With</h1>
                                <img src={signinlogo} alt="signin logo" className='signin_logo' />
                            </div>
                            <div>
                                <h1 className='logindiscription_signin'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </h1>
                            </div>
                            <div className='secondinput_container_signin'>
                                <Box>
                                    <Grid container spacing={2} className='unsernamegrid' >
                                        <Grid item xs={12}>
                                            {loginError && (
                                                <Typography color="error" variant="body2" sx={{ mb: 2, textAlign: 'center' }}>
                                                    {loginError?.message}
                                                </Typography>
                                            )}
                                            <CommonForm schema={schemamodal} onSubmit={handleSubmit} autoSubmitOnChange={false} />

                                        </Grid>

                                    </Grid>
                                </Box>

                            </div>
                        </div>
                    </div>


                </div>


            </div>
        </div>
    );
};

function Item(props: ItemProps) {
    return (
        <Paper className="carousel-item">
            <img
                src={props.item.imgSrc}
                alt={props.item.name}
            />
            <div>
                <p className='decriptionforcarousel'>{props.item.description}</p>
                <h2 className='heading_name'>{props.item.name}</h2>
                {props.item.subheading && <h3 className="subheading">{props.item.subheading}</h3>}
            </div>
        </Paper>
    );
}

export default Login;
