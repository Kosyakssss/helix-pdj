struct Point { x: i32 }
//     ^ @type.definition
enum Shape { Dot }
//   ^ @type.definition
trait Area {}
//    ^ @type.definition
type Id = u32;
//   ^ @type.definition
fn area(p: Point) -> Id {
// ^ @function
//         ^ @type
    helper(p.x).abs()
//  ^ @function.call
//              ^ @function.method.call
}
