import ArrayIndexAndLength from './array-index-and-length.js';
import AddingAndRemovingDataToFromArrays from './adding-and-removing-data-to-from-arrays.js';
import ForLoops from './for-loops.js';
import MapFunction from './map-function.js';
import JsonStringify from './json-stringify.js';
import FindFunction from './find-function.js';
import FindIndex from './find-index.js';
import FilterFunction from './filter-function.js';
function WorkingWithArrays(){
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  let numberArray1 = [1, 2, 3, 4, 5];
  let stringArray1 = ['string1', 'string2'];

  let variableArray1 = [
    functionScoped,   blockScoped,
    constant1,        numberArray1,   stringArray1
  ];
return(
    <>
    <div>

      <h3>Working with Arrays</h3>
      numberArray1 = {numberArray1} <br />
      stringArray1 = {stringArray1} <br />
      variableArray1 = {variableArray1} <br />
      <ArrayIndexAndLength/>
      <AddingAndRemovingDataToFromArrays/>
      <ForLoops/>
      <MapFunction/>
      <JsonStringify/>
      <FindFunction/>
      <FindIndex/>
      <FilterFunction/>
    </div>



    </>)
}
export default WorkingWithArrays