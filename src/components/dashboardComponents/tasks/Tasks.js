import React, { useState } from "react"
import { Row, Tabs, Tab, Table, Col, Button } from "react-bootstrap"
import { useHistory } from "react-router-dom"

import Page, { PageContent, PageHeader } from "../../Page"

const Tasks = () => {
  const history = useHistory()
  const handleHistory = () => history.push("/dashboard")
  const handleNewTask = () => history.push("/dashboard/tasks/new-task")

  const [key, setKey] = useState("Tâches en cours")

  return (
    <Page>
      <PageHeader noBack>
        {" "}
        <div>
          <span
            onClick={handleHistory}
            className="d-flex flex-start h2 position-absolute"
            style={{ cursor: "pointer" }}
          >
            ⬅︎
          </span>
          Tâches
        </div>
      </PageHeader>
      <PageContent className="d-flex align-items-center justify-content-center">
        <Row className="mt-4">
          <Col>
            <div className="d-flex justify-content-center mb-5">
              <Button size="md" variant="primary" onClick={handleNewTask}>
                Nouvelle tâche
              </Button>
            </div>
            <Tabs
              className="d-flex justify-content-center"
              id="tasks-tabs"
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              <Tab eventKey="tâches-en-cours" title="Tâches en cours">
                <div className="mt-3">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Nom du produit</th>
                        <th>Quantité</th>
                        <th>Magasin</th>
                        <th>Date</th>
                        <th>Captcha</th>
                        <th>Statut</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr></tr>
                    </tbody>
                  </Table>
                </div>
              </Tab>
              <Tab eventKey="tâches-effectuées" title="Tâches effectuées">
                <div className="mt-3">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Nom du produit</th>
                        <th>Quantité</th>
                        <th>Magasin</th>
                        <th>Date</th>
                        <th>Statut</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr></tr>
                    </tbody>
                  </Table>
                </div>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </PageContent>
    </Page>
  )
}

export default Tasks
