import React from "react";
import env from "utils/env";
import MainHeader from "components/MainHeader";
import WidgetGrid from "components/WidgetGrid";

const Home = () => {
  return (
    <>
      <title>IoT LTE Supervisor</title>
      <meta
        http-equiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />
      <div className="h-screen flex flex-col overflow-hidden">
        <MainHeader />
        <div className="flex-1 text-center mb-4">
          <h1>IoT LTE Supervisor</h1>
        </div>
        <WidgetGrid />
      </div>
    </>
  );
};

export default Home;
