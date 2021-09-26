import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import './Main.css';


const Main = (props) => {
    const { name, age, gpa, family_income, given_amount, picture } = props.data;
    const element = <FontAwesomeIcon icon={faDollarSign} />
    return (
        <div>
            <div className="borderIssue com">
                <div className="rowThis ">
                    <div>
                        <img className="photo" src={picture} alt="" />
                    </div>

                    <div className="flo">
                        <h6 className="flo allin">Name : {name}</h6>
                        <h6 className="allin">Age : {age}</h6>
                        <h6 className="allin">GPA : {gpa}</h6>
                        <h6 className="allin">Family-Income : {family_income}</h6>
                        <h6 className="allin">Given-amount : ${given_amount}</h6>
                        <button name={name} onClick={() => props.handleCart(props.data)} className="btn">{element} Give the money</button>
                    </div>

                </div>

            </div>
        </div >
    );
};

export default Main;