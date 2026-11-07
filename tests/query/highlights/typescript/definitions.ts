type Id = string;
//   ^ @type.definition
enum Color { Red }
//   ^ @type.definition
abstract class Base {}
//             ^ @type.definition
const App = () => 1;
//    ^ @function
const n = Math.max(1, 2);
//             ^ @function.method.call
let y: Id = parse(App);
//     ^ @type
//          ^ @function.call
