declare var module: { hot: any };
module.hot.accept() 
export default async function getUser(userId: number){
    const response = await window.fetch(`https://jsonplaceholder.typicode.com/users/${userId}`) 
    const json = await response.json()
    return json
}
