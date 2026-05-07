import { Client, Account, Avatars, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://fra.cloud.appwrite.io/v1") // your endpoint
  .setProject("69f06c9100073edc037a"); // your project id

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);
export default client;
