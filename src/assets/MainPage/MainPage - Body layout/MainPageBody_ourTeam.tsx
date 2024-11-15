import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid2,
  Typography,
} from "@mui/material";
import { useState } from "react";

const MainPageBody_ourTeam = () => {
  const outTeamInfoList1 = [
    {
      image: "Images/ourTeamImages/Nicole_Roeder.jpeg",
      name: "Nicole Roeder",
      description: "Schulleiterin",
      color: "#729d89",
      eMail: "Test.Mail@gmail.com",
      tel: "+49 176 7618769",
      raum: "007",
    },
    {
      image: "/Images/ourTeamImages/Klaus_Martin_Foos.jpeg",
      name: "Klaus-Martin Foos",
      description: "Stellvertretender Schulleiter",
      color: "#a6c9ba",
      eMail: "Test.Mail@gmail.com",
      tel: "+49 176 7618769",
      raum: "007",
    },
  ];

  const outTeamInfoList2 = [
    {
      image: "Images/ourTeamImages/Matthias_Kempf.jpeg",
      name: "Matthias Kempf",
      rang: "Abteilungsleiter",
      description: "Gewerbliche Schule",
      color: "#729d89",
      eMail: "Test.Mail@gmail.com",
      tel: "+49 176 7618769",
      raum: "007",
    },
    {
      image: "Images/ourTeamImages/Sven_Hölig.jpeg",
      name: "Sven Hölig",
      rang: "Abteilungsleiter",
      description: "Kaufmännische Schule und Übergang Schule & Beruf",
      color: "#a6c9ba",
      eMail: "Test.Mail@gmail.com",
      tel: "+49 176 7618769",
      raum: "007",
    },
    {
      image: "Images/ourTeamImages/Christian_Odenwald.jpeg",
      name: "Christian Odenwald",
      rang: "Abteilungsleiter",
      description: "Hauswirtschaftliche Schule",
      color: "#729d89",
      eMail: "Test.Mail@gmail.com",
      tel: "+49 176 7618769",
      raum: "007",
    },
    {
      image: "Images/ourTeamImages/Gerd_Heilig.jpeg",
      name: "Gerd Heilig",
      rang: "Abteilungsleiter",
      description: "Berufskolleg ",
      color: "#a6c9ba",
      eMail: "Test.Mail@gmail.com",
      tel: "+49 176 7618769",
      raum: "007",
    },
    {
      image: "Images/ourTeamImages/Andrea_Neumann.jpeg",
      name: "Andrea Neumann",
      rang: "Abteilungsleiter",
      description: "Berufliches Gymnasium",
      color: "#729d89",
      eMail: "Test.Mail@gmail.com",
      tel: "+49 176 7618769",
      raum: "007",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [expandedIndex2, setExpandedIndex2] = useState<number | null>(null);

  const handleExpandClick = (index: number) => {
    setExpandedIndex2(null);
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  const handleExpandClick2 = (index: number) => {
    setExpandedIndex(null);
    setExpandedIndex2(expandedIndex2 === index ? null : index);
  };

  return (
    <Box sx={{ p: 10, pl: 10, pr: 10 }}>
      <Box sx={{ mb: 5 }}>
        <Typography variant="h3">Unser Team</Typography>
        <Divider sx={{ width: 256, mt: 2, mb: 2 }} />
        <Typography variant="h5">Die BSB</Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          Zu den Kontaktinformationen gelangen sie durch Klicken auf die
          jeweilige Karte
        </Typography>
      </Box>

      <Grid2 container spacing={2} sx={{ justifyContent: "center", mb: 5 }}>
        {outTeamInfoList1.map((ourTeam, index) => (
          <Grid2 columns={{ xs: 6, md: 4 }} key={index}>
            <Card
              onClick={() => handleExpandClick(index)}
              sx={{
                height: expandedIndex === index ? 520 : 450,
                width: 335,
                borderRadius: 5,
                textAlign: "center",
                bgcolor: ourTeam.color,
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 15px 30px rgba(0, 0, 0, 1)",
                },
                boxShadow:
                  expandedIndex === index
                    ? "0px 15px 30px rgba(0, 0, 0, 1)"
                    : "0px 10px 20px rgba(0, 0, 0, 0.6)",
                transform: expandedIndex === index ? "scale(1.05)" : "scale(1)",
                transition: "height 0.3s ease, transform 0.3s, box-shadow 0.3s",
                overflow: "hidden",
                userSelect: "none",
              }}
            >
              <CardMedia
                component="img"
                image={ourTeam.image}
                alt={ourTeam.name}
                sx={{
                  borderRadius: "100%",
                  p: 2,
                }}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "bold", color: "white" }}
                >
                  {ourTeam.name}
                </Typography>

                <Divider sx={{ bgcolor: "white", m: 1 }} />
                <Typography variant="body1" color="white">
                  {ourTeam.description}
                </Typography>

                {expandedIndex === index && (
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" color="white">
                      Email: {ourTeam.eMail}
                    </Typography>
                    <Typography variant="body2" color="white">
                      Telefon: {ourTeam.tel}
                    </Typography>
                    <Typography variant="body2" color="white">
                      Raum: {ourTeam.raum}
                    </Typography>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>

      <Grid2 container spacing={2} sx={{ justifyContent: "center" }}>
        {outTeamInfoList2.map((ourTeam, index) => (
          <Grid2 columns={{ xs: 6, md: 4 }} key={index}>
            <Card
              onClick={() => handleExpandClick2(index)}
              sx={{
                height: expandedIndex2 === index ? 560 : 500,
                width: 335,
                borderRadius: 5,
                textAlign: "center",
                bgcolor: ourTeam.color,
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 15px 30px rgba(0, 0, 0, 1)",
                },
                boxShadow:
                  expandedIndex2 === index
                    ? "0px 15px 30px rgba(0, 0, 0, 1)"
                    : "0px 10px 20px rgba(0, 0, 0, 0.6)",
                transform:
                  expandedIndex2 === index ? "scale(1.05)" : "scale(1)",
                transition: "height 0.3s ease, transform 0.3s, box-shadow 0.3s",
                overflow: "hidden",
                userSelect: "none",
              }}
            >
              <CardMedia
                component="img"
                image={ourTeam.image}
                alt={ourTeam.name}
                sx={{
                  borderRadius: "100%",
                  p: 2,
                }}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "bold", color: "white" }}
                >
                  {ourTeam.name}
                </Typography>

                <Divider sx={{ bgcolor: "white", m: 1 }} />
                <Typography
                  variant="body1"
                  component="div"
                  sx={{ fontWeight: "bold", color: "white" }}
                >
                  {ourTeam.rang}
                </Typography>

                <Typography variant="body1" color="white">
                  {ourTeam.description}
                </Typography>

                {expandedIndex2 === index && (
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" color="white">
                      Email: {ourTeam.eMail}
                    </Typography>
                    <Typography variant="body2" color="white">
                      Telefon: {ourTeam.tel}
                    </Typography>
                    <Typography variant="body2" color="white">
                      Raum: {ourTeam.raum}
                    </Typography>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default MainPageBody_ourTeam;
