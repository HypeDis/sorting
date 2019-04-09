describe('Bubble Sort', () => {
  let testArray;
  beforeEach(() => {
    testArray = [2, 1, 3];
    spyOn(window, 'swap').and.callThrough();
    spyOn(window, 'compare').and.callThrough();
  });
  it('should handle an empty array', () => {
    expect(bubbleSort([])).toEqual([]);
  });
  it('should sort an array', () => {
    expect(bubbleSort(testArray)).toEqual([1, 2, 3]);
  });
  it('should compare 4 times', () => {
    bubbleSort(testArray);
    expect(compare.calls.count()).toEqual(4);
  });
  it('should swap 1 time', () => {
    bubbleSort(testArray);
    expect(swap.calls.count()).toEqual(1);
  });
});
