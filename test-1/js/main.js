db = connect("localhost:27017/test");

print("Połączenie prawidłowe");

function someFunction(param) {
    // console.log(param);
    // print(a);
    if (typeof param === "function") {
        return param()
    } else {
        return param;
    }
}

const a = "Parametr A";
const b = function() {
    // console.log("Parametr B");
    return "Parametr B";
}

print(someFunction(a));