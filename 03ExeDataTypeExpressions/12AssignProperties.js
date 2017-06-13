function propAssign(arr) {
    let object = {};

    object[arr[0]]=arr[1];
    object[arr[2]]=arr[3];
    object[arr[4]]=arr[5];

    return object;
}

console.log(propAssign(['ssid', '90127461', 'status', 'admin', 'expires', '600']
));