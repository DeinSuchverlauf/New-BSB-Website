import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid2,
  IconButton,
  Divider,
  Button,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import { useNavigate } from "react-router-dom";

interface NewsItem {
  title: string;
  description: string;
  image: string;
  time: string;
}

interface NewsComponentProps {
  newsDataList: NewsItem[];
  color: string;
}

const NewsComponent: React.FC<NewsComponentProps> = ({
  newsDataList,
  color,
}) => {
  const navigate = useNavigate();

  return (
    <Box>
      <Box sx={{ mb: 5 }}>
        <Typography
          variant="h3"
          sx={{ color: color === "green" ? "white" : "#729d89" }}
        >
          Was gibt es Neues?
        </Typography>
        <Divider
          sx={{
            width: 420,
            bgcolor: color === "green" ? "white" : "#729d89",
            mt: 2,
            mb: 2,
          }}
        />
        <Typography
          variant="h5"
          sx={{ color: color === "green" ? "white" : "#729d89" }}
        >
          News
        </Typography>
      </Box>

      <Grid2 container direction="column" spacing={3} justifyContent="center">
        {newsDataList.map((news, index) => (
          <Grid2 key={index}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "row",
                borderRadius: 2,
                boxShadow: 3,
                overflow: "hidden",
                "&:hover": {
                  transform: "scale(1.01)",
                  boxShadow: "0px 15px 30px rgba(0, 0, 0, 1)",
                },
                bgcolor: color === "green" ? "white" : "#729d89",
              }}
            >
              <Box
                sx={{
                  width: "20%",
                  height: "auto",
                  alignContent: "center",
                  p: 3,
                }}
              >
                <img
                  src={news.image !== null ? news.image : undefined}
                  alt={news.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    maxHeight: 350,
                    objectFit: "cover",
                    borderRadius: 10,
                  }}
                />
              </Box>

              <CardContent sx={{ flex: 1, padding: 2 }}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    color: color === "green" ? "#729d89" : "white",
                  }}
                >
                  {news.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginTop: 1,
                    color: color === "green" ? "#729d89" : "white",
                  }}
                >
                  {news.description}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 2,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ color: color === "green" ? "#729d89" : "white" }}
                  >
                    {news.time}
                  </Typography>
                  <IconButton
                    sx={{ color: color === "green" ? "#729d89" : "white" }}
                    size="small"
                  >
                    <ShareIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
      {color === "green" ? (
        <Box sx={{ textAlign: "end" }}>
          <Button
            sx={{ p: 2, mt: 2, color: "white" }}
            onClick={() => {
              navigate("/aktuelles");
              window.scrollTo(0, 0);
            }}
          >
            Um weitere Aktuelle Beiträge zu sehen drücke hier...
          </Button>
        </Box>
      ) : undefined}
    </Box>
  );
};

export default NewsComponent;
