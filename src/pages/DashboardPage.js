import React from "react"
import { Badge, Button, Col, Nav, NavItem, Row } from "react-bootstrap"
import { useHistory } from "react-router"

import Page, { PageContent, PageHeader } from "../components/Page"

const Dashboard = () => {
  const history = useHistory()

  const handleTasks = () => history.push("/dashboard/tasks")
  const handleAccounts = () => history.push("/dashboard/accounts")
  const handleSettings = () => history.push("/dashboard/settings")

  return (
    <Page>
      <PageHeader noBack>DASHBOARD</PageHeader>
      <PageContent>
        <Col className="mt-3">
          <Row className="d-flex justify-content-center">
            <div style={{ borderBottom: "2px solid black" }}>
              <Nav className="d-flex justify-content-center mb-2">
                <NavItem className="mr-1 mt-1">
                  <Button size="lg" variant="primary" onClick={handleTasks}>
                    Tâches
                  </Button>
                </NavItem>
                <NavItem className="mr-1 mt-1">
                  <Button size="lg" variant="primary" onClick={handleAccounts}>
                    Comptes
                  </Button>
                </NavItem>
                <NavItem className="mt-1">
                  <Button size="lg" variant="primary" onClick={handleSettings}>
                    Paramètres
                  </Button>
                </NavItem>
              </Nav>
            </div>
          </Row>

          <h1
            className="d-flex align-items-center justify-content-center"
            style={{
              minHeight: "60vh",
            }}
          >
            {" "}
            <Badge variant="primary">BIENVENUE</Badge>
          </h1>
        </Col>
      </PageContent>
    </Page>
  )
}

export default Dashboard
