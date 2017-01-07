export default async function getPost(postId){
    const response = await window.fetch(`/api/posts/${postId}`) 
    const json = await response.json()
    return json
}
