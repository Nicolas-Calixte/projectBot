import React from "react"
import { useHistory } from "react-router-dom"
import { Col, Row, Table } from "react-bootstrap"

import Page, { PageContent, PageHeader } from "../Page"

const Account = () => {
  const history = useHistory()
  const handleHistory = () => history.push("/dashboard")

  return (
    <Page>
      <PageHeader noBack>
        <div>
          <span
            onClick={handleHistory}
            className="d-flex flex-start h2 position-absolute"
            style={{ cursor: "pointer" }}
          >
            ⬅︎
          </span>
          Comptes
        </div>{" "}
      </PageHeader>
      <PageContent className="d-flex align-items-center justify-content-center">
        <Row className="mt-3">
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Identifiant</th>
                  <th>Mot de passe</th>
                  <th>Magasin</th>
                  <th>Adresse de livraison</th>
                </tr>
              </thead>
              <tbody>
                <tr></tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </PageContent>
    </Page>
  )
}

export default Account
