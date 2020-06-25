const fs = require('fs')
class FileReader {
    constructor() {

    }

    readFile(filename) {
        const data = fs.readFileSync(filename, 
            {encoding:'utf8', flag:'r'});
        return data;  
    }


    // readFile(fileread)  {
    //     try{ if(fs.existsSync(fileread)) {
    //         return true
    //     }
    //         }    
    //     catch(err) {
    //         throw new Error("No such file exists")
    //     }
    // }
    
}

module.exports = FileReader