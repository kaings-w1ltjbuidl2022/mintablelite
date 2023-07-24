import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getConfigs } from "../config";
import { initRepositories } from "../repositories";
import { Container } from "../utils";

const configs = getConfigs();
const dbConfig = initializeApp(configs.firebase);
const db = getFirestore(dbConfig);
const container = new Container().getInstance();

container.set("db", db);

const repositories = initRepositories(container);
