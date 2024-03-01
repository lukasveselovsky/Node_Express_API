import { v4 as uuidv4 } from 'uuid'; // Importovanie funkcie generovania UUID

let users = []; // Inicializácia prázdneho poľa pre užívateľov

export const getUsers = (req, res) => { // Funkcia na získanie všetkých užívateľov
    console.log(`Users in the database: ${users}`); // Výpis užívateľov v konzole
    res.send(users); // Odpoveď súboru zobraziť užívateľov
};

export const createUser = (req, res) => {   // Funkcia na vytvorenie nového užívateľa
    const user = req.body; // Získanie údajov o užívateľovi z tela požiadavky
    const newUser = { ...user, id: uuidv4() }; // Nový užívateľ s prideleným UUID
    users.push(newUser); // Pridanie nového užívateľa do poľa užívateľov
    console.log(`User ${user.firstName} added to the database.`); // Výpis informácie o pridanom užívateľovi
    res.send(`User ${user.firstName} added to the database.`); // Odpoveď s informáciou o pridanom užívateľovi
};

export const getUser = (req, res) => { // Funkcia na získanie konkrétneho užívateľa
    const userId = req.params.id; // Získanie ID užívateľa z parametrov požiadavky
    const foundUser = users.find(user => user.id === userId); // Vyhľadanie užívateľa podľa ID
    if (foundUser) {
        console.log(`User found: ${foundUser}`); // Výpis nájdeného užívateľa
        res.send(foundUser); // Odpoveď s nájdeným užívateľom
    } else {
        console.log(`User not found with id ${userId}`); // Výpis, ak užívateľ nebol nájdený
        res.status(404).send("User not found"); // Odpoveď s chybou 404, ak užívateľ nebol nájdený
    }
};

export const deleteUser = (req, res) => {  // Funkcia na odstránenie užívateľa
    const userId = req.params.id; // Získanie ID užívateľa z parametrov požiadavky
    users = users.filter(user => user.id !== userId); // Filtrácia poľa užívateľov, odstránenie užívateľa s daným ID
    console.log(`User with id ${userId} has been deleted`); // Výpis informácie o odstránení užívateľa
    res.send(`User with id ${userId} has been deleted`); // Odpoveď s informáciou o odstránení užívateľa
};

export const updateUser = (req, res) => { // Funkcia na aktualizáciu údajov o užívateľovi
    const userId = req.params.id; // Získanie ID užívateľa z parametrov požiadavky
    const { username, age } = req.body; // Získanie nových údajov o užívateľovi z tela požiadavky
    const user = users.find(user => user.id === userId); // Nájdenie užívateľa podľa ID
    if (!user) {
        console.log(`User not found with id ${userId}`); // Výpis, ak užívateľ nebol nájdený
        res.status(404).send("User not found"); // Odpoveď s chybou 404, ak užívateľ nebol nájdený
        return;
    }
    if (username) user.username = username; // Aktualizácia mena užívateľa, ak bolo zadané v požiadavke
    if (age) user.age = age; // Aktualizácia veku užívateľa, ak bol zadaný v požiadavke
    console.log(`User with id ${userId} has been updated`); // Výpis informácie o aktualizovanom užívateľovi
    res.send(`User with id ${userId} has been updated`); // Odpoveď s informáciou o aktualizovanom užívateľovi
};
