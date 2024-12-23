import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import SchoolIcon from "@mui/icons-material/School";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { useState } from "react";

const OurSchool_SchoolTypes = () => {
  const schoolTypesList = [
    {
      name: "Gewerbliche Berufsschule",
      types: ["Einjährige Berufsfachschule Metall", "Fachschule für Technik"],
      icon: (
        <AccountCircleTwoToneIcon
          sx={{ width: 50, height: 50, color: "white" }}
        />
      ),
      color: "#719d88",
    },
    {
      name: "Übergang Schule & Beruf",
      types: ["AVdual (Hauptschulabschluss)", "VABO"],
      icon: (
        <BusinessCenterIcon sx={{ width: 50, height: 50, color: "white" }} />
      ),
      color: "#a6c9ba",
    },
    {
      name: "Hauswirtschaftlich-sozialwissenschaftliche Schule",
      types: [
        "Zweijährigen Berufsfachschulen (Mittlerer Bildungsabschluss)",
        "Berufsfachschulen zur beruflichen Aus- und Weiterbildung",
        "Sozialpädagogische Assistenz (ehem. “Kinderpflege”)",
        "Sozialpädagogischen Assistenz (PIA)",
        "Altenpflegehilfe für Migrant*innen",
        "Vorbereitung Erzieher*innenabschluss",
      ],
      icon: <SchoolIcon sx={{ width: 50, height: 50, color: "white" }} />,
      color: "#719d88",
    },
    {
      name: "Beruffskolleg",
      secondName: "(Fachhochschulreife)",
      types: [
        "BK-Wirtschaft",
        "BK-Technik",
        "BK-Pflege",
        "BK-Fremdsprachen",
        "BKFH",
      ],
      icon: (
        <AccountCircleTwoToneIcon
          sx={{ width: 50, height: 50, color: "white" }}
        />
      ),
      color: "#a6c9ba",
    },
    {
      name: "Berufliche Gymnasien",
      secondName: "(allgemeine Hochschulreife)",
      types: [
        "Profil Technik und Management",
        "Profil Informationstechnik",
        "Profil Gestaltung und Medientechnik",
        "Sozial- und gesundheitswissenschaftliches Gymnasium",
      ],
      icon: (
        <BusinessCenterIcon sx={{ width: 50, height: 50, color: "white" }} />
      ),
      color: "#719d88",
    },
  ];

  const [expandCard, setExpandCard] = useState(false);

  return (
    <Box sx={{ pl: 10, pr: 10, pb: 5 }}>
      <Box>
        <Divider
          sx={{
            width: 100,
            bgcolor: "black",
            mt: 2,
            mb: 2,
          }}
        />
        <Typography variant="h5">Schularten an der BSB</Typography>
      </Box>

      <Box
        sx={{
          flexWrap: "nowrap",
          gap: 2,
          justifyContent: "space-between",
        }}
      >
        {schoolTypesList.map((customcardInfo, index) => (
          <Card
            key={index}
            sx={{
              height: { xs: "auto", md: 300 },
              mt: 5,
              bgcolor: customcardInfo.color,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.6)",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 15px 30px rgba(0, 0, 0, 1)",
              },
            }}
          >
            <CardActionArea
              sx={{
                height: "100%",
                width: "100%",
                textAlign: "center",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    width: { xs: "100%", md: "20%" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    mb: { xs: 2, md: 0 },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    {customcardInfo.icon}
                  </Box>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      color: "white",
                      fontSize: { xs: "1.2rem", md: "1.5rem" },
                    }}
                  >
                    {customcardInfo.name}
                  </Typography>
                </Box>

                <Divider
                  orientation="vertical"
                  sx={{
                    bgcolor: "white",
                    height: { xs: "2px", md: "100%" },
                    width: { xs: "80%", md: "2px" },
                    mx: { xs: "auto", sm: 3 },
                    my: { xs: 2, sm: 0 },
                  }}
                />

                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    color: "white",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  <Box
                    component="ul"
                    sx={{
                      pl: { xs: 0, md: 2 },
                      listStyleType: "disc",
                    }}
                  >
                    {customcardInfo.types.map((type, index) => (
                      <Typography
                        key={index}
                        variant="body1"
                        component="li"
                        sx={{
                          mb: 0.5,
                          textAlign: { xs: "center", sm: "left" },
                          fontSize: { xs: "0.9rem", md: "1rem" },
                        }}
                      >
                        {type}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>

      <Card
        sx={{
          mt: 5,
          bgcolor: "#a6c9ba",
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.6)",
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0px 15px 30px rgba(0, 0, 0, 1)",
          },
          textAlign: "center",
          height: expandCard ? "100%" : "350px",
        }}
      >
        <CardActionArea
          sx={{ p: 5 }}
          onClick={() => setExpandCard(!expandCard)}
        >
          <Box>
            <Typography variant="h4" sx={{ color: "white" }}>
              Bildungswege an der BSB
            </Typography>
            <Divider sx={{ bgcolor: "white", m: 2, height: 2 }} />
            <Typography variant="h6" sx={{ color: "white", mb: 3 }}>
              Klicke um mehr zu erfahren
            </Typography>
            <img
              src="/Images/Bildungswege_13.09.2022.jpg"
              width={"80%"}
              style={{ borderRadius: 10 }}
            />
          </Box>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default OurSchool_SchoolTypes;
