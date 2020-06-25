const fs = require('fs')

class FileReader {

    constructor() {}

    readFile(filename) {
        const data = fs.readFileSync(filename, 
            {encoding:'utf8', flag:'r'});
        return data;  
    }
}

module.exports = FileReader