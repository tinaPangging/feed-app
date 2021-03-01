import Link from "next/link";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Image from "next/image";

function Dogs({ dogs }) {
  return (
    <div
      style={{
        backgroundImage: `url(${"/images/dog.jpg"})`,
        backgroundAttachment: "fixed"
      }}
    >
      <Container maxWidth="sm">
        {Object.keys(dogs).map(dog => (
          <Link
            href={{
              pathname: "/dogs/[breed]",
              query: { breed: dog }
            }}
          >
            <Paper>
              <Card
                style={{
                  marginBottom: 20,
                  color: "white",
                  backgroundColor: "#1b1c1b",
                  fontFamily: "Comic Sans MS",
                  cursor: "pointer",
                  "&:hover": {
                      textDecorationLine: "underline"
                  }
                }}
              >
                <Box display="flex" justifyContent="center">
                  <Box p={4} style={{ fontSize: 20 }}>
                    {dog}
                  </Box>
                  <Box p={4}>
                    <Image src="/images/paw-dog.png" width={20} height={20} />
                  </Box>
                </Box>
              </Card>
            </Paper>
          </Link>
        ))}
      </Container>
    </div>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get dogs
  const res = await fetch("http://localhost:3000/api/dogs");
  const dogs = await res.json();
  return {
    props: {
      dogs: dogs
    }
  };
}

export default Dogs;
