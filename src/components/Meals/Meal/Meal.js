import React, {useContext} from 'react';
import classes from './Meal.module.css'
import Counter from "../../UI/Counter/Counter";
import CartContext from "../../../store/cartContext";

const Meal = (props) => {
    const ctx = useContext(CartContext)
    const {title, desc, price, img, amount} = props.meal
    const btnHandler = (tag) =>{
        ctx.updateMealHandler(props.meal, tag)
    }

    return (
        <div className={classes.Meal}>
            <div className={classes.ImgBox}>
                <img src={img} />
            </div>
            <div>
                <h2 className={classes.Title}>{title}</h2>
                <p  className={classes.Desc}>{desc}</p>
                <div className={classes.PriceWrapper}>
                    <span className={classes.Price}>{price}</span>
                    <Counter amount={amount}  onBtnClick={btnHandler} />
                </div>
            </div>
        </div>
    );
};

export default Meal;