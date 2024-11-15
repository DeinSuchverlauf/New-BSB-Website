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
import { ReactNode } from "react";

interface customCardInfo {
  name: string;
  icon: ReactNode;
  color: string;
}

const MainPageBody_second = () => {
  const custonCardInfoList: customCardInfo[] = [
    {
      name: "Gewerbliche Berufsschule",
      icon: (
        <AccountCircleTwoToneIcon
          sx={{ width: 50, height: 50, color: "white" }}
        />
      ),
      color: "#719d88",
    },
    {
      name: "Kaufmännische Berufsschule",
      icon: <SchoolIcon sx={{ width: 50, height: 50, color: "white" }} />,
      color: "#a6c9ba",
    },
    {
      name: "Übergang Schule & Beruf",
      icon: (
        <BusinessCenterIcon sx={{ width: 50, height: 50, color: "white" }} />
      ),
      color: "#719d88",
    },
    {
      name: "Hauswirtschaftlich-sozialwissenschaftliche Schule",
      icon: <SchoolIcon sx={{ width: 50, height: 50, color: "white" }} />,
      color: "#a6c9ba",
    },
    {
      name: "Beruffskolleg",
      icon: (
        <AccountCircleTwoToneIcon
          sx={{ width: 50, height: 50, color: "white" }}
        />
      ),
      color: "#719d88",
    },
    {
      name: "Berufliche Gymnasien",
      icon: (
        <BusinessCenterIcon sx={{ width: 50, height: 50, color: "white" }} />
      ),
      color: "#a6c9ba",
    },
  ];

  return (
    <Box
      sx={{
        p: 10,
        pl: 10,
        pr: 10,
      }}
    >
      <Box>
        <Typography variant="h3">Unsere Themengebiete</Typography>
        <Divider sx={{ width: 500, mt: 2 }} />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          pt: 5,
          gap: 2,
          justifyContent: "space-between",
        }}
      >
        {custonCardInfoList.map((customcardInfo, index) => (
          <Card
            key={index}
            sx={{
              width: "20%",
              height: 300,
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
              <CardContent>
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
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default MainPageBody_second;
