import React from 'react';
import classes from'./FilterSearch.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const FilterMeals = (props) => {

    const inputChangeHandler = e =>{
        props.onFilter(e.currentTarget.value.trim())
    }
    return (
        <div className={classes.FilterMeals}>
            <div className={classes.InputOuter}>
                <input  placeholder="请输入关键字" className={classes.SearchInput}  onChange={inputChangeHandler} />
                <FontAwesomeIcon className={classes.SearchIcon} icon={faSearch} />
            </div>

        </div>
    );
};

export default FilterMeals;