export default async function handler(req, res) {
    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    const dogs = await response.json();
    res.status(200).json(dogs.message)
}