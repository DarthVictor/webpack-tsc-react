declare var module: { hot: any };
export default async function getUser(userId: number){
    const response = await window.fetch(`/api/users/${userId}`) 
    const json = await response.json()
    return json
}
