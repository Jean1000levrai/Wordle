import { nbLetters } from "./config";


function InputWord(){
    const nbL = nbLetters;
    return(
        <>
            <br></br>
            {Array.from({length: nbL}, (_, i) => (
                <button>_</button>
            ))}
        </>
    );
};

export default InputWord;