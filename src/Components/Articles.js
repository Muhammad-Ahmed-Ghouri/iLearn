import articlesList from "../articlesList";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export default function Articles() {
  const theme = createTheme({
    palette: {
      primary: { main: "#1976d2", dark: "rgb(25,118,210,0.5)" },
      secondary: { main: "#222" },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="articles-section">
        <Typography
          sx={{ color: "secondary.main" }}
          variant="h3"
          component="h3"
          gutterBottom
        >
          Web Development Articles
        </Typography>

        <div className="container">
          {articlesList.map((article) => (
            <Box
              key={article.id}
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                width: 300,
                height: 200,
                borderRadius: 1,
                boxShadow: "1px 1px 7px 0px grey",
              }}
            >
              <Typography
                sx={{ color: "secondary.main", fontWeight: "bold" }}
                variant="h5"
                component="h5"
                gutterBottom
              >
                {article.heading}
              </Typography>
              <Typography variant="body1" component="p" sx={{ margin: "10px" }}>
                {article.text}
              </Typography>
              <Button
                className="btn"
                variant="contained"
                sx={{ width: "max-content", margin: "10px auto" }}
                onClick={() => {
                  console.log(article.heading);
                }}
              >
                Learn More
              </Button>
            </Box>
          ))}
        </div>
      </div>
    </ThemeProvider>
  );
}
