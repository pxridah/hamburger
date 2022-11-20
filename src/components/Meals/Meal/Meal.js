import React from 'react';
import classes from './Meal.module.css'
import Counter from "../../UI/Counter/Counter";

const Meal = () => {
    return (
        <div className={classes.Meal}>
            <div className={classes.ImgBox}>
                <img src="/img/meals/1.png" />
            </div>
            <div>
                <h2 className={classes.Title}>汉堡包</h2>
                <p  className={classes.Desc}>百分百纯牛肉搭配爽脆酸黄瓜洋葱粒与美味番茄酱,经典滋味让你无法抵挡!</p>
                <div className={classes.PriceWrapper}>
                    <span className={classes.Price}>12</span>
                    <Counter amount={2} />
                </div>
            </div>
        </div>
    );
};

export default Meal;