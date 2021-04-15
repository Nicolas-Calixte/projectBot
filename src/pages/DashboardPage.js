import { Tab } from "bootstrap"
import React, { useState } from "react"
import { Tabs } from "react-bootstrap"

import MainTitle from "../components/primaryComponents/MainTitle"

const Dashboard = () => {
  const [key, setKey] = useState("home")

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Tabs id="dashboard-tabs" activeKey={key} onSelect={(k) => setKey(k)}>
          <Tab variant="info" eventKey="task" title="Tâches"></Tab>
          <Tab variant="info" eventKey="accounts" title="Comptes"></Tab>
          <Tab variant="info" eventKey="settings" title="Paramètres"></Tab>
        </Tabs>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh",
        }}
      >
        <MainTitle title="BIENVENUE" />
      </div>
    </div>
  )
}

export default Dashboard
