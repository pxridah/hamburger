import React from 'react';
import Meal from "./Meal/Meal";

import  classes from './Meals.module.css'

const Meals = () => {
    return (
        <div className={classes.Meals}>
            <Meal />
        </div>
    );
};

export default Meals;