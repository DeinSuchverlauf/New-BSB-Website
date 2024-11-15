import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid2,
  Typography,
} from "@mui/material";

interface Food {
  foodName: string;
  foodImage: string;
  price: string;
  day: string;
  ingredients: string[];
  cardColor: string;
}

const FoodPlanLayout = () => {
  const foodList = [
    {
      foodName: "Pizza Margherita",
      foodImage: "/Images/Food/Pizza Margherita.jpg",
      day: "Jeden Tag",
      price: "6.50 €",
      ingredients: ["Tomatensauce", "Mozzarella", "Basilikum"],
      cardColor: "#729d89",
    },
    {
      foodName: "Pizza Salami",
      foodImage: "/Images/Food/Pizza Salami.jpg",
      day: "Jeden Tag",
      price: "7.50 €",
      ingredients: ["Tomatensauce", "Mozzarella", "Salami"],
      cardColor: "#a6c9ba",
    },
    {
      foodName: "Pizza Funghi (Champignons)",
      foodImage: "/Images/Food/Pizza Funghi (Champignons).jpg",
      day: "Jeden Tag",
      price: "7.00 €",
      ingredients: ["Tomatensauce", "Mozzarella", "Champignons"],
      cardColor: "#729d89",
    },
    {
      foodName: "Cheeseburger",
      foodImage: "/Images/Food/Cheeseburger.jpg",
      day: "Jeden Tag",
      price: "6.00 €",
      ingredients: [
        "Rindfleischpatty",
        "Käse",
        "Salat",
        "Tomate",
        "Ketchup",
        "Senf",
      ],
      cardColor: "#a6c9ba",
    },

    {
      foodName: "Chicken Burger",
      foodImage: "/Images/Food/Chicken Burger.jpg",
      day: "Montag",
      price: "6.50 €",
      ingredients: ["Hähnchenbrust", "Salat", "Tomate", "Mayonnaise"],
      cardColor: "#729d89",
    },
    {
      foodName: "Caesar Salad",
      foodImage: "/Images/Food/Caesar Salad.jpg",
      day: "Montag",
      price: "5.00 €",
      ingredients: [
        "Römersalat",
        "Hähnchenbrust",
        "Croutons",
        "Parmesan",
        "Caesar-Dressing",
      ],
      cardColor: "#a6c9ba",
    },
    {
      foodName: "Fresh Caprese Sandwich",
      foodImage: "/Images/Food/Fresh Caprese Sandwich.jpg",
      day: "Montag",
      price: "4.50 €",
      ingredients: ["Tomaten", "Motzarella", "Brot", "Aufstrich"],
      cardColor: "#729d89",
    },

    {
      foodName: "Pizza Hawaii",
      foodImage: "/Images/Food/Pizza Hawaii.png",
      day: "Dienstag",
      price: "8.00 €",
      ingredients: ["Tomatensauce", "Mozzarella", "Schinken", "Ananas"],
      cardColor: "#a6c9ba",
    },
    {
      foodName: "Greek Salad",
      foodImage: "/Images/Food/Greek Salad.jpg",
      day: "Dienstag",
      price: "5.50 €",
      ingredients: [
        "Gurke",
        "Tomaten",
        "Oliven",
        "Feta",
        "Oregano",
        "Olivenöl",
      ],
      cardColor: "#729d89",
    },

    {
      foodName: "Pizza Quattro Stagioni",
      foodImage: "/Images/Food/Pizza Quattro Stagioni.jpg",
      day: "Mittwoch",
      price: "8.50 €",
      ingredients: [
        "Tomatensauce",
        "Mozzarella",
        "Artischocken",
        "Schinken",
        "Pilze",
        "Oliven",
      ],
      cardColor: "#a6c9ba",
    },
    {
      foodName: "Spaghetti Bolognese",
      foodImage: "/Images/Food/Spaghetti Bolognese.jpg",
      day: "Mittwoch",
      price: "7.50 €",
      ingredients: ["Spaghetti", "Hackfleischsauce", "Parmesan"],
      cardColor: "#729d89",
    },

    {
      foodName: "Pizza Tonno (Thunfisch)",
      foodImage: "/Images/Food/Pizza Tonno.jpg",
      day: "Donnerstag",
      price: "8.00 €",
      ingredients: ["Tomatensauce", "Mozzarella", "Thunfisch", "Zwiebeln"],
      cardColor: "#a6c9ba",
    },

    {
      foodName: "Veggie Burger",
      foodImage: "/Images/Food/Veggie Burger.jpg",
      day: "Freitag",
      price: "6.00 €",
      ingredients: ["Veggie Patty", "Salat", "Tomate", "Avocado", "Ketchup"],
      cardColor: "#729d89",
    },

    {
      foodName: "Penne Arrabbiata",
      foodImage: "/Images/Food/Penne Arrabbiata.jpg",
      day: "Freitag",
      price: "7.00 €",
      ingredients: [
        "Penne",
        "Tomatensauce",
        "Knoblauch",
        "Chili",
        "Petersilie",
      ],
      cardColor: "#a6c9ba",
    },
  ];

  const groupedFoods = foodList.reduce<Record<string, Food[]>>((acc, food) => {
    if (food.day === "Jeden Tag") {
      if (!acc["Jeden Tag"]) acc["Jeden Tag"] = [];
      acc["Jeden Tag"].push(food);
    } else {
      if (!acc[food.day]) acc[food.day] = [];
      acc[food.day].push(food);
    }
    return acc;
  }, {});

  return (
    <Box sx={{ p: 10, pl: 10, pr: 10 }}>
      <Box sx={{ mb: 5 }}>
        <Typography variant="h3" sx={{ color: "#729d89" }}>
          Was gibt es zu Essen?
        </Typography>
        <Divider
          sx={{
            width: 480,
            bgcolor: "#729d89",
            mt: 2,
            mb: 2,
          }}
        />
        <Typography variant="h5" sx={{ color: "#729d89" }}>
          Speiseplan
        </Typography>
      </Box>

      <Box>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
          Jeden Tag verfügbar
        </Typography>
        <Divider sx={{ mb: 5 }} />
        <Grid2 container spacing={4}>
          {groupedFoods["Jeden Tag"]?.map((food, index) => (
            <Grid2 key={index}>
              <Card
                sx={{
                  height: "100%",
                  width: 345,
                  boxShadow: 3,
                  borderRadius: 2,
                  overflow: "hidden",
                  backgroundColor: food.cardColor,
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={food.foodImage}
                  alt={food.foodName}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: "bold", color: "white" }}
                  >
                    {food.foodName}
                  </Typography>

                  <Divider sx={{ my: 1 }} />

                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "medium", color: "white" }}
                  >
                    Preis: {food.price}
                  </Typography>

                  <Divider sx={{ my: 1 }} />

                  <Typography variant="body2" sx={{ color: "white" }}>
                    Zutaten:
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 0.5, color: "white" }}>
                    {food.ingredients.join(", ")}
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>

        {Object.keys(groupedFoods).map(
          (day) =>
            day !== "Jeden Tag" && (
              <Box key={day} sx={{ mt: 5 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    mb: 1,
                  }}
                >
                  {day} Spezial
                </Typography>
                <Divider sx={{ mb: 5 }} />

                <Grid2 container spacing={4}>
                  {groupedFoods[day]?.map((food, index) => (
                    <Grid2 key={index}>
                      <Card
                        sx={{
                          height: "100%",
                          width: 345,
                          boxShadow: 3,
                          borderRadius: 2,
                          overflow: "hidden",
                          backgroundColor: food.cardColor,
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="250"
                          image={food.foodImage}
                          alt={food.foodName}
                        />
                        <CardContent>
                          <Typography
                            variant="h6"
                            component="div"
                            sx={{ fontWeight: "bold", color: "white" }}
                          >
                            {food.foodName}
                          </Typography>

                          <Divider sx={{ my: 1 }} />

                          <Typography
                            variant="body1"
                            sx={{ fontWeight: "medium", color: "white" }}
                          >
                            Preis: {food.price}
                          </Typography>

                          <Divider sx={{ my: 1 }} />

                          <Typography variant="body2" sx={{ color: "white" }}>
                            Zutaten:
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ mt: 0.5, color: "white" }}
                          >
                            {food.ingredients.join(", ")}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid2>
                  ))}
                </Grid2>
              </Box>
            )
        )}
      </Box>

      {/* <Box>
        <Grid2 container sx={{ gap: 2, justifyContent: "center" }}>
          {foodList.map((food, index) => (
            <Card
              sx={{
                width: 345,
                boxShadow: 3,
                borderRadius: 2,
                overflow: "hidden",
                backgroundColor: "#ffffff",
              }}
            >
              <CardMedia
                component="img"
                height="250"
                image={food.foodImage}
                alt={food.foodName}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  {food.foodName}
                </Typography>

                <Divider sx={{ my: 1 }} />

                <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                  Preis: {food.price}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mt: 1 }}
                >
                  Tag: {food.day}
                </Typography>

                <Divider sx={{ my: 1 }} />

                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Zutaten:
                </Typography>
                <Typography variant="body2" sx={{ mt: 0.5 }}>
                  {food.ingredients.join(", ")}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Grid2>
      </Box> */}
    </Box>
  );
};

export default FoodPlanLayout;
