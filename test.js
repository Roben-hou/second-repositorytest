"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right";
})(Direction || (Direction = {}));
function walk(data) {
    if (data === Direction.up) {
        console.log("向上走");
    }
    else if (data === Direction.down) {
        console.log("向下走");
    }
    else if (data === Direction.left) {
        console.log("向左走");
    }
    else if (data === Direction.right) {
        console.log("向右走");
    }
}
walk(Direction.up);
//# sourceMappingURL=test.js.map