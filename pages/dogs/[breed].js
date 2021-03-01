import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import Head from 'next/head'

function Dog({ image, breed }) {
  return (
    <>
    <Head>
        <title>Breed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="sm" style={{ marginTop: "100px" }}>
        
        <Paper style={{ display: "inline-block" }}>
          <Card style={{ backgroundColor: "#1b1c1b" }}>
            <h1
              style={{
                fontFamily: "Comic Sans MS",
                marginLeft: "200px",
                color: "white"
              }}
            >
              {breed}
            </h1>
            <img src={image} style={{ width: "500px", height: "500px" }} />
          </Card>
        </Paper>
      </Container>
    </>
     
    
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get dogs
  const res = await fetch("http://localhost:3000/api/dogs");
  const dogs = await res.json();
  // Get the paths we want to pre-render based on dogs
  const paths = Object.keys(dogs).map(dog => `/dogs/${dog}`);
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

//This function gets called at build time
export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/dogs/${params.breed}`);
  const dogPic = await res.json();
  return {
    props: {
      image: dogPic.image,
      breed: params.breed
    }
  };
}

export default Dog;
