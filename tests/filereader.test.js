const FileReader = require('../filereader')

describe('FileReader', ()=> {

    test('Read file contents', ()=> {
        const filename = 'filename'

        const mockReadFile = jest.fn()
        const mockFileReader = { readFile: mockReadFile }
        
        mockFileReader.readFile(filename)

        // assert
        expect(mockReadFile).toHaveBeenCalledWith(filename)
    })
})