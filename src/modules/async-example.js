export default async function asyncFetch(){
    const response = await window.fetch('https://jsonplaceholder.typicode.com/posts/1') 
    const json = await response.json()
    return json
}
