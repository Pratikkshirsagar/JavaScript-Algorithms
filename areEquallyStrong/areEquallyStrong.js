function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight){
    let yourWeaker = yourLeft <= yourRight ? yourLeft : yourRight
    let yourStronger = yourLeft >= yourRight ? yourLeft : yourRight
    let friendsWeaker = friendsLeft <= friendsRight ? friendsLeft : friendsRight
    let friendStronger =  friendsLeft >= friendsRight ? friendsLeft : friendsRight

    return yourStronger === friendStronger && yourWeaker === friendsWeaker
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
