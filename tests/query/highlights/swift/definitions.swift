struct Point { var x: Int }
//     ^ @type.definition
protocol Shape {}
//       ^ @type.definition
func area(p: Point) -> Int {
//   ^ @function.method
//           ^ @type
    return helper(p.x)
//         ^ @function.call
}
