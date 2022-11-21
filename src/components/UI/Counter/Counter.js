import React from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faMinus} from "@fortawesome/free-solid-svg-icons";


import classes from "./Counter.module.css";

const Counter = (props) => {
    return (
        <div className={classes.Counter}>
            {
                (props.amount && props.amount !== 0) ?
                    <>
                        <button className={classes.Sub}
                        onClick={()=>props.onBtnClick(-1)}
                        >
                            <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <span className={classes.Count}>{props.amount}</span>
                    </>
                    : null
            }
            <button className={classes.Add} onClick={()=>props.onBtnClick(1)}>

                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    );
};

export default Counter;
