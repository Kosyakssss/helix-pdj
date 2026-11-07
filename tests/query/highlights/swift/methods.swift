func f() {
    invokeit()
//  ^ @function.call
    obj.doThing()
//      ^ @function.method.call
    _ = obj.field
//          ^ @variable.other.member
}
