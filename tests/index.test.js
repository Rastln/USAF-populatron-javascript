describe('The populatron', () => {
  it('should print the world population', () => {
    
    const mockCount = jest.fn()
    const mockPopulationCounter = { count: mockCount }

    const filename = "filename"
    mockPopulationCounter.count(filename)

    expect(mockCount).toHaveBeenCalledWith(filename);
  })
});