"use client";

import { LogtoProvider } from "@logto/react";
import Profile from "./profile";
import { config } from "./logto";

const Home = () => (
  <LogtoProvider config={config}>
    <Profile />
  </LogtoProvider>
);

export default Home;
