function userInfo(){
    console.log (
    this.registred ?
    `Дата регистрации: ${this.data}` :
    `Незарегистрированный пользователь: ${this.name}`
    );
}

var pedro = {
    name: "Pedro",
    registred: true,
    data: new Date().toLocaleString(),
    getInfo: userInfo,
}

var alesha = {
    name: "Aleksey",
    registred: false,
    data: new Date().toLocaleString(),
    getInfo: userInfo,
}
pedro['getInfo']();
alesha['getInfo']();