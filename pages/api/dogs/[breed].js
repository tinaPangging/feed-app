export default async function handler(req, res) {
    const response = await fetch(`https://dog.ceo/api/breed/${req.query.breed}/images/random`)
    const dogPic = await response.json();
    res.status(200).json({"image": dogPic.message}); 
  }