import LegacyES5 from './es5-functions';
import ArrowFunctions from "./arrow-functions";
import ImpliedReturn from "./implied-return";
import FunctionParenthesisAndParameters from "./function-parenthesis-and-parameters";
function WorkingWithFunctions(){
  return(
      <div>
      <LegacyES5/>
      <ArrowFunctions/>
      <ImpliedReturn/>
      <FunctionParenthesisAndParameters/>
      </div>
  )
}
export default WorkingWithFunctions;