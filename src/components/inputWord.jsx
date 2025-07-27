import { nbLetters } from "../config";


function InputWord(){
    const nbL = nbLetters;
    return(
        <div className="input">
            <br></br>
            <input type="text" className="inputWord"></input>
            <button className="submitBtnWord">Submit</button>

        </div>
    );
};

export default InputWord;