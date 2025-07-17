import { nbLetters } from "./config"; 

function AttemptsWords(){
    const rows = 5;
    const cols = nbLetters;

    return(

        <table>
            <tbody>
                {Array.from({length: rows}, (_, rowIndex) => (
                    <tr key={rowIndex}>
                        {Array.from({length: cols}, (_, colIndex) => (
                            <td key={colIndex}>
                                <button>_</button>

                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>

    );
};


export default AttemptsWords;
