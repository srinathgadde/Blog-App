import conf from "../conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(conf.endpoint).setProject(conf.projectId);
  }
}

const authService = new authService();

export default authService;

// const client = new Client()
//   .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
//   .setProject("<PROJECT_ID>"); // Your project ID

// const account = new Account(client);

// const user = await account.create(ID.unique(), "", "");
