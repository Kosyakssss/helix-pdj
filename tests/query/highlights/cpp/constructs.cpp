class Widget {
//    ^ @type.definition
    int field;
//      ^ @variable.other.member
    bool method(int count) {
//       ^ @function
//                  ^ @variable.parameter
        return helper(count);
//             ^ @function.call
    }
};
