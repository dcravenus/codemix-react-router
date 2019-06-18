import React from "react";
import { Prompt } from "react-router-dom";
import ImportantVideo from "./ImportantVideo";

const ImportantPage = () => {
  return (
    <div>
      <ImportantVideo />
      <Prompt
        when={true}
        message={() => {
          return "Are you sure you are done hanging out on this important page?";
        }}
      />
    </div>
  );
};

export default ImportantPage;
