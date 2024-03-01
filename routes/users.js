import express from 'express'; // Importovanie modulu express pre vytvorenie smerovača

import { getUsers, createUser, getUser, deleteUser, updateUser } from '../controllers/users.js'; // Importovanie funkcií spracovávajúcich požiadavky na užívateľov

const router = express.Router(); // Vytvorenie inštancie smerovača pomocou express.Router()

router.get('/', getUsers); // Definovanie smerovača pre GET požiadavky na koreňovú cestu, ktoré spracuje funkcia getUsers

router.post('/', createUser); // Definovanie smerovača pre POST požiadavky na koreňovú cestu, ktoré spracuje funkcia createUser

router.get('/:id', getUser); // Definovanie smerovača pre GET požiadavky na konkrétny užívateľa pomocou ID, ktoré spracuje funkcia getUser

router.delete('/:id', deleteUser); // Definovanie smerovača pre DELETE požiadavky na konkrétny užívateľa pomocou ID, ktoré spracuje funkcia deleteUser

router.patch('/:id', updateUser); // Definovanie smerovača pre PATCH požiadavky na konkrétny užívateľa pomocou ID, ktoré spracuje funkcia updateUser

export default router; // Exportovanie smerovača pre použitie v hlavnom súbore aplikácie
