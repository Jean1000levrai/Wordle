import { nbLetters } from "../config";


function InputWord(){
    const nbL = nbLetters;
    return(
        <>
            <br></br>
            <input type="text"></input>
            <button>Submit</button>
        </>
    );
};

export default InputWord;