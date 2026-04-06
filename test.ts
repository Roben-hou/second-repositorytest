enum Direction {
    up,
    down,
    left,
    right
}
function walk(data: Direction) {
    if (data === Direction.up) {
        console.log("向上走")
    }
    else if (data === Direction.down) {
        console.log("向下走")
    }
    else if (data === Direction.left) {
        console.log("向左走")
    }
    else if (data === Direction.right) {
        console.log("向右走")
    }
    else {
        console.log("方向错误")
    }
}
walk(Direction.up)