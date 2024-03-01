import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";

const app = express(); // Inicializácia Express aplikácie
const PORT = 5000; // Definícia portu, na ktorom bude server bežať

app.use(bodyParser.json()); // Middleware na spracovanie JSON dát v požiadavkách

app.use("/people", usersRoutes); // Použitie smerovača pre cesty začínajúce na /people
app.get("/", (req, res) => res.send("Welcome to the Users API!")); // Handler pre GET požiadavky na koreňovú cestu
app.all("*", (req, res) => res.send("You've tried reaching a route that doesn't exist.")); // Handler pre všetky ostatné požiadavky, ktoré neprešli vyššie definovanými cestami

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`)); // Spustenie servera na zadanom porte a výpis správy o spustení
