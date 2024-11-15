import { Typography, Box, Divider } from "@mui/material";

const MainPageFooter = () => {
  return (
    <Box sx={{ bgcolor: "#bbbbbb", pl: 30, pr: 30 }}>
      <Box
        sx={{
          justifyContent: "space-between",
          display: "flex",
          pt: 10,
        }}
      >
        <img
          src="Images\LogoBSB\bsbretten_logo_white.png"
          width={250}
          height={250}
        />
        <Box>
          <Typography variant="h5" sx={{ mb: 2, color: "white" }}>
            Kontakt
          </Typography>

          <Typography variant="body1" sx={{ mb: 2, color: "white" }}>
            Wilhelmstr.22 <br />
            75015 Bretten <br /> Telefon: 0721 936-61600 <br />
            Fax: 0721 936-61789 <br /> E-Mail: sekretariat@bsb-bretten.de
          </Typography>
        </Box>

        <Box>
          <Typography variant="h5" sx={{ mb: 2, color: "white" }}>
            Ablteitungen
          </Typography>

          <Typography variant="body1" sx={{ mb: 2, color: "white" }}>
            Gewerbliche Schule <br />
            Kaufmännische Berufsschule
            <br />
            Übergang Schule & Beruf
            <br />
            Hauswirtschaftlich-sozialwissenschaftliche Schule
            <br />
            Berufskollegs
            <br />
            Berufliche Gymnasien
          </Typography>
        </Box>

        <Box>
          <Typography variant="h5" sx={{ mb: 2, color: "white" }}>
            Info
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: "white" }}>
            AGB <br />
            Impressum
            <br />
            Datenschutzerklärung
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ bgcolor: "white", mt: 5, mb: 5 }} />

      <Box sx={{ textAlign: "center", pb: 5 }}>
        <Typography variant="body1" sx={{ mb: 2, color: "white" }}>
          © BSB-Bretten 2024
          <br />
          WEBDESIGN Baden-Baden / Karlsruhe
          <br />
          Von Joel Stricker
        </Typography>
      </Box>
    </Box>
  );
};

export default MainPageFooter;
