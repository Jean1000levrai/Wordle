import { nbLetters } from "../config"; 
import { attempts } from "../config";

function AttemptsWords(){
    const rows = 5;
    const cols = nbLetters;

    return(

        <table className="grid">
            <tbody>
                {Array.from({length: rows}, (_, rowIndex) => (
                    <tr key={rowIndex}>
                        {Array.from({length: cols}, (_, colIndex) => (
                            <td key={colIndex}>
                                <button className="letterCell">{attempts[rowIndex][colIndex]}</button>

                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>

    );
};


export default AttemptsWords;
