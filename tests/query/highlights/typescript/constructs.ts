interface Shape { size: number; }
//        ^ @type.definition
//                ^ @variable.other.member
//                      ^ @type.builtin
class Box {
//    ^ @type.definition
  method(count: number): void {
//^ @function.method
    obj.doThing();
//      ^ @function.method.call
  }
}
