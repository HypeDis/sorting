
// describe('Split Array function', function() {
//     it('is able to split an array into two halves', function() {
//       expect(split([1,2,3,4,5,6])).toEqual([[1,2,3], [4,5,6]]);
//     });
//   });

//   describe('Merge Function', function() {
//       it(' is able to merge two sorted arrays into one sorted array', function(){
//           expect(merge([1,3,5], [2,4,6])).toEqual([1,2,3,4,5,6]);
//       })
//   });

//   describe('MergeSort function', function(){
//     it('should sort an array completely', function(){
//         expect(mergeSort([14,6,8,53,9,0])).toEqual([0,6,8,9,14,53]);
//     })
//   });


  describe('MergeSort', function(){
    describe('Split Array function', function() {
        it('is able to split an array into two halves', function() {
          expect(split([1,2,3,4,5,6])).toEqual([[1,2,3], [4,5,6]]);
        });
      });
    
      describe('Merge Function', function() {
          it(' is able to merge two sorted arrays into one sorted array', function(){
              expect(merge([1,3,5], [2,4,6])).toEqual([1,2,3,4,5,6]);
          })
      });
    
      describe('MergeSort function', function(){
        it('should sort an array completely', function(){
            expect(mergeSort([14,6,8,53,9,0])).toEqual([0,6,8,9,14,53]);
        })
        it('should also handle duplicate elements', function(){
            expect(mergeSort([14,6,8,53,9,9,0])).toEqual([0,6,8,9,9,14,53]);
        })
      });

    
  });