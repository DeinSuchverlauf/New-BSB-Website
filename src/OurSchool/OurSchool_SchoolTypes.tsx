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
    <Box>
      <Box>
        <Divider
          sx={{
            width: 420,
            bgcolor: "#729d89",
            mt: 2,
            mb: 2,
          }}
        />
        <Typography variant="h5" sx={{ color: "#729d89" }}>
          Schularten an der BSB
        </Typography>
      </Box>

      <Box
        sx={{
          flexWrap: "nowrap",
          pt: 5,
          gap: 2,
          justifyContent: "space-between",
        }}
      >
        {schoolTypesList.map((customcardInfo, index) => (
          <Card
            key={index}
            sx={{
              height: 300,
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
              sx={{ height: "100%", width: "100%", textAlign: "center" }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  height: "100%",
                }}
              >
                {/* Linker Bereich */}
                <Box
                  sx={{
                    width: "20%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
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
                    sx={{ color: "white" }}
                  >
                    {customcardInfo.name}
                  </Typography>
                </Box>

                <Divider
                  orientation="vertical"
                  sx={{
                    bgcolor: "white",
                    height: "100%",
                    width: "2px",
                    mx: 3,
                  }}
                />

                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  <Box component="ul" sx={{ pl: 2, listStyleType: "disc" }}>
                    {schoolTypesList.map((schoolInfo, index) => (
                      <Typography
                        key={index}
                        variant="body1"
                        component="li"
                        sx={{ mb: 0.5, textAlign: "left" }}
                      >
                        {schoolInfo.types}
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
