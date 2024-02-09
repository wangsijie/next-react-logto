"use client";

import { LogtoProvider } from "@logto/react";
import { config } from "../logto";
import Callback from "./callback";

const CallbackPage = () => {
  return (
    <LogtoProvider config={config}>
      <Callback />
    </LogtoProvider>
  );
};

export default CallbackPage;
