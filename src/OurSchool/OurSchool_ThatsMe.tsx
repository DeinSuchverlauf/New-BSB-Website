import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

const OurSchool_ThatsMe = () => {
  return (
    <Box sx={{ bgcolor: "#729d89", pl: 10, pr: 10, pt: 5, pb: 5 }}>
      <Box sx={{ mb: 5 }}>
        <Typography variant="h3" sx={{ color: "white" }}>
          Mein Steckbrief
        </Typography>
        <Divider
          sx={{
            width: 420,
            bgcolor: "white",
            mt: 2,
            mb: 2,
          }}
        />
        <Typography variant="h5" sx={{ color: "white" }}>
          Das bin ich!
        </Typography>
      </Box>

      <Box>
        <Card
          sx={{
            mx: "auto",
            mt: 5,
            bgcolor: "white",
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
            borderRadius: 3,
            p: 3,
            color: "white",
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 3,
                justifyContent: "center",
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "#4caf50",
                  width: 64,
                  height: 64,
                  mr: 2,
                }}
              >
                <SchoolIcon fontSize="large" />
              </Avatar>
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", color: "#729d89", fontSize: "2rem" }}
              >
                Berufliche Schulen Bretten
              </Typography>
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontStyle: "italic",
                mb: 2,
                textAlign: "center",
                color: "#729d89",
                fontSize: "1.2rem",
              }}
            >
              „Es gibt nur eins, was auf Dauer teurer ist als Bildung, keine
              Bildung“
            </Typography>
            <Divider sx={{ mb: 3, bgcolor: "#729d89" }} />

            <Box sx={{ lineHeight: 2 }}>
              <Typography
                variant="body1"
                sx={{ fontSize: "1.1rem", color: "black", mb: 1 }}
              >
                <strong style={{ color: "#729d89" }}>Geburtsort:</strong>{" "}
                Bretten
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "1.1rem", color: "black", mb: 1 }}
              >
                <strong style={{ color: "#729d89" }}>Geburtsjahr:</strong> 1828
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "1.1rem", color: "black", mb: 1 }}
              >
                <strong style={{ color: "#729d89" }}>Alter:</strong> 194 Jahre
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "1.1rem", color: "black", mb: 1 }}
              >
                <strong style={{ color: "#729d89" }}>Telefon:</strong> 0721
                936-61600
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "1.1rem", color: "black", mb: 1 }}
              >
                <strong style={{ color: "#729d89" }}>Muttersprache:</strong>{" "}
                vielsprachig aufgewachsen 🙂
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "1.1rem", color: "black", mb: 1 }}
              >
                <strong style={{ color: "#729d89" }}>Geschwister:</strong>{" "}
                Gewerbliche Schule, Kaufmännische Schule, Übergang Schule und
                Beruf, Hauswirtschaftliche/Sozialwissenschaftliche Schule,
                Berufskollegs, Berufliches Gymnasium
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "1.1rem", color: "black", mb: 1 }}
              >
                <strong style={{ color: "#729d89" }}>Hobbies:</strong> Industrie
                4.0, Übungsfirma, AZAV, Skilandheime, Haus der kleinen Forscher
                und und und…
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "1.1rem", color: "black", mb: 1 }}
              >
                <strong style={{ color: "#729d89" }}>
                  Charakteristische Eigenschaften:
                </strong>{" "}
                menschlich, vielfältig, verantwortungsbewusst, respektvoll,
                zielgerichtet, wertschätzend…
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "1.1rem", color: "black", mb: 1 }}
              >
                <strong style={{ color: "#729d89" }}>
                  So komme ich zur Schule:
                </strong>{" "}
                mit dem Fahrrad, dem Bus/Bahn, dem Auto, zu Fuß
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "1.1rem", color: "black", mb: 1 }}
              >
                <strong style={{ color: "#729d89" }}>
                  Das kann ich besonders gut:
                </strong>{" "}
                nie vergessen, dass der Mensch im Mittelpunkt steht
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "1.1rem", color: "black", mb: 1 }}
              >
                <strong style={{ color: "#729d89" }}>Lieblingsessen:</strong>{" "}
                siehe Mensaplan
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "1.1rem", color: "black", mb: 1 }}
              >
                <strong style={{ color: "#729d89" }}>Lieblingsfach:</strong>{" "}
                alle natürlich 😉
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "1.1rem", color: "black", mb: 1 }}
              >
                <strong style={{ color: "#729d89" }}>
                  Was ich noch loswerden wollte:
                </strong>{" "}
                Ich freue mich, dich hoffentlich bald kennen lernen zu dürfen
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default OurSchool_ThatsMe;
