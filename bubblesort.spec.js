describe('Bubble Sort', () => {
  let testArray;
  beforeEach(() => {
    // testArray = [2, 1, 3];
    spyOn(window, 'swap').and.callThrough();
    spyOn(window, 'compare').and.callThrough();
  });
  describe('sorting arrays', () => {
    it('should handle an empty array', () => {
      expect(bubbleSort([])).toEqual([]);
    });
    it('should sort an array', () => {
      expect(bubbleSort([2, 1, 3])).toEqual([1, 2, 3]);
      expect(bubbleSort([5, 2, 65, 48, 13])).toEqual([2, 5, 13, 48, 65]);
    });
  });
  it('should compare 4 times', () => {
    bubbleSort([2, 1, 3]);
    expect(compare.calls.count()).toEqual(4);
  });
  it('should swap 1 time', () => {
    bubbleSort([2, 1, 3]);
    expect(swap.calls.count()).toEqual(1);
  });
});
