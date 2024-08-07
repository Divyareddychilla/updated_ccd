import React from 'react';
import "./Card.scss";
import Loader from '../Loaders/Loader';
import { LinearProgressProps } from '@mui/material/LinearProgress';

const Card: React.FC = () => {
    const useArrowDirection = true; //pass this as true whenever you use it

    const loaderDetailsLinear = {
        color: 'success' as LinearProgressProps['color'],
        showProgress: true,
        progress: 70,
        disableShrink: true,
        showText: false,
    };

    const loaderDetailsLineartwo = {
        color: 'info' as LinearProgressProps['color'],
        showProgress: true,
        progress: 70,
        disableShrink: true,
        showText: false,
    };

    const loaderDetailsLinearthree = {
        color: 'error' as LinearProgressProps['color'],
        showProgress: true,
        progress: 70,
        disableShrink: true,
        showText: false,
    };

    const loaderDetailsLinearfour = {
        color: 'primary' as LinearProgressProps['color'],
        showProgress: true,
        progress: 70,
        disableShrink: true,
        showText: false,
    };


    return (
        <div className='main_container'>


            <div className='inner_card'>
                <h1 className='main_heading'>TOTAL STOCK IN YARDS</h1>

                
                <div className='second_container'>
                    <div>
                        <h1 className='number_count'>12,505</h1>
                        <h1 className='text_count'>[Tons]</h1>
                    </div>


                    <div className='box_container_one'>
                        <div className='inner_box_container'>
                            <svg className={useArrowDirection ? "arrow_direction" : ""} width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="icon_image_one" d="M16.9694 9.47366L16.9694 24.4658" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path className="icon_image_one" d="M10.0937 16.3784L16.9697 9.47307L23.8457 16.3784" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>



                    
                </div>


                <div className='linear_loaders'>
                    <Loader
                        type="linear"
                        color={loaderDetailsLinear.color}
                        showProgress={loaderDetailsLinear.showProgress}
                        progress={loaderDetailsLinear.progress}
                        showText={loaderDetailsLinear.showText}
                    />
                </div>
            </div>



            
            <div className='inner_card'>
                <h1 className='main_heading_two'>CURRENT SHIFT STACKING</h1>
                <div className='second_container'>
                    <div>
                        <h1 className='number_count'>1000/2:40</h1>
                        <h1 className='text_count'>[Tons/hr:Mm]</h1>
                    </div>
                    <div className='box_container_two'>
                        <div className='inner_box_container'>
                            <svg className={useArrowDirection ? "arrow_direction" : ""} width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="icon_image_two" d="M16.9694 9.47366L16.9694 24.4658" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path className="icon_image_two" d="M10.0937 16.3784L16.9697 9.47307L23.8457 16.3784" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='linear_loaders'>
                    <Loader
                        type="linear"
                        color={loaderDetailsLineartwo.color}
                        showProgress={loaderDetailsLineartwo.showProgress}
                        progress={loaderDetailsLineartwo.progress}
                        showText={loaderDetailsLineartwo.showText}
                    />
                </div>
            </div>
            <div className='inner_card'>
                <h1 className='main_heading_three'>CURRENT SHIFT RECLAIMING</h1>
                <div className='second_container'>
                    <div>
                        <h1 className='number_count'>
                            2000/2.40
                        </h1>
                        <h1 className='text_count'>
                            [Tons/hr:Mm]
                        </h1>
                    </div>
                    <div className='box_container_three'>
                        <div className='inner_box_container'>
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="icon_image_three" d="M16.9694 9.47366L16.9694 24.4658" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path className="icon_image_three" d="M10.0937 16.3784L16.9697 9.47307L23.8457 16.3784" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className='linear_loaders'>
                    <Loader
                        type="linear"
                        color={loaderDetailsLinearthree.color}
                        showProgress={loaderDetailsLinear.showProgress}
                        progress={loaderDetailsLinear.progress}
                        showText={loaderDetailsLinear.showText}
                    />
                </div>
            </div>
            <div className='inner_card'>
                <h1 className='main_heading_four'>CURRENT SHIFT BYPASS</h1>
                <div className='second_container'>
                    <div>
                        <h1 className='number_count'>
                            2000/2.40
                        </h1>
                        <h1 className='text_count'>
                            [Tons/hr:Mm]
                        </h1>
                    </div>
                    <div className='box_container_four'>
                        <div className='inner_box_container'>
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="icon_image_four" d="M16.9694 9.47366L16.9694 24.4658" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path className="icon_image_four" d="M10.0937 16.3784L16.9697 9.47307L23.8457 16.3784" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>


                        </div>
                    </div>
                </div>

                <div className='linear_loaders'>
                    <Loader
                        type="linear"
                        color={loaderDetailsLinearfour.color}
                        showProgress={loaderDetailsLinear.showProgress}
                        progress={loaderDetailsLinear.progress}
                        showText={loaderDetailsLinear.showText}
                    />
                </div>
            </div>


        </div>
    );
};

export default Card;