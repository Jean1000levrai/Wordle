
let date1;
date1 = new Date().toISOString().split('T')[0].split('-');
date1 = date1[0] + "/" + date1[1] + "/" + date1[2]


function History({date = date1, word = "???", bool = false}){
    let name;
    if (bool){
        name = "historyModuleTrue"
    }else{
        name = "historyModuleFalse"
    }

    return(
        <div className={name}>
            <p className="date">{date}; {word}</p>
            
        </div>
    )
}

export default History;