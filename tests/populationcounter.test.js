const PopulationCounter = require('../PopulationCounter')

describe('PopulationCounter', ()=> {

    test('count population', ()=> {

        var mockstring = "Country,City,AccentCity,Region,Population,Latitude,Longitude\n" +
            "ad,aixas,Aixàs,6,1,42.4833333,1.4666667\n" + "ad,aixirivali,Aixirivali,6,,42.4666667,1.5\n" +
            "ad,aixirivali,Aixirivali,6,2,42.4666667,1.5\n"

        const mockReadFile = jest.fn().mockReturnValue(mockstring)

        const mockFileReader = { readFile: mockReadFile }

        const mockParserFile = jest.fn().mockReturnValue(["Country,City,AccentCity,Region,Population,Latitude,Longitude",
            "ad,aixas,Aixàs,6,1,42.4833333,1.4666667",  "ad,aixirivali,Aixirivali,6,,42.4666667,1.5",
            "ad,aixirivali,Aixirivali,6,2,42.4666667,1.5"])

        const mockCsvParser = { readLines: mockParserFile }

        const popCounter = new PopulationCounter(mockFileReader, mockCsvParser)
        
        const filename = "filename"
        const total = popCounter.count(filename)

        expect(total).toBe(3)
        expect(mockReadFile).toHaveBeenCalledWith(filename)
        expect(mockParserFile).toHaveBeenCalledWith(mockstring)
    })
})