import React from "react"
import { Nav, NavItem } from "react-bootstrap"

import DashboardButton from "../components/dashboardComponents/DashboardButton"
import MainTitle from "../components/primaryComponents/MainTitle"

const Dashboard = () => {
  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <div
        style={{
          paddingBottom: "7px",
          borderBottom: "2px solid black",
        }}
      >
        <Nav>
          <NavItem style={{ marginRight: "5px" }}>
            <DashboardButton to="/dashboard/tasks" btnName="Tâches" />
          </NavItem>
          <NavItem style={{ marginRight: "5px" }}>
            <DashboardButton to="/dashboard/accounts" btnName="Comptes" />
          </NavItem>
          <NavItem>
            <DashboardButton to="/dashboard/settings" btnName="Paramètres" />
          </NavItem>
        </Nav>
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
