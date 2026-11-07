class Point(val x: Int)
//    ^ @type.definition
object Registry
//     ^ @type.definition
fun area(p: Point): Int = helper(p.x)
//  ^ @function
//          ^ @type
//                        ^ @function.call
