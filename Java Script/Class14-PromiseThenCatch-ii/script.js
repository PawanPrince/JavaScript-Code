let p1 = fetch("https:/dummyjson.com/users");
console.log(p1);
p1.then((response) =>{
    console.log(response);

    let p2 = response.json()
    
});

p1.catch(err => console.log(err))


async function getUser(){
    let p3= fetch("https:/dummyjson.com/users")

}
getUser()

// 1000