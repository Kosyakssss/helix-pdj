struct point { int x; };
//     ^ @type.definition
struct point origin;
//     ^ @type
enum color { RED };
//   ^ @type.definition
int area(struct point p) {
//  ^ @function
    return p.fn(helper(p.x));
//           ^ @function.method.call
//              ^ @function.call
}
