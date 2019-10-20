import React, { Component } from 'react';

export default class Evaluation extends Component {
    render() {
        const {question, a, b, c, correct, id} = this.props;
        const options = [a,b,c];
        const letters = ["a", "b", "c"];
        const evalState = this.props.evalState;
        const op = options.map((o, index)=>
                <li key={index}>
                    <label>
                        <input type="radio" value={letters[index]} name={id}
                            defaultChecked={(evalState && letters[index] === correct) ? true : false}/>
                            <i className={letters[index] === correct ? "correct" : "wrong"}>
                                {o}
                            {letters[index] === correct ? <i> &#10003;</i> : <i> &#10007;</i>}
                            </i>     
                    </label>
                </li>
        )
        return (
            <>
                <ul className="p-0 text-left">
                    <li className="eval-title">
                        <p>{question}</p>
                        <ol className="pl-0 pl-md-2">
                            {op}
                        </ol>
                    </li>
                </ul>
            </>
        )
    }
}
