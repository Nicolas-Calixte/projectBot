import React from "react"
import { Row, Table } from "react-bootstrap"
import { useHistory } from "react-router-dom"

import MainBackButton from "../primaryComponents/MainBackButton"
import MainTitle from "../primaryComponents/MainTitle"

const Account = () => {
  const history = useHistory()
  const handleHistory = () => history.push("/dashboard")

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <div>
        <Row>
          <MainBackButton onClick={handleHistory} />
          <MainTitle title="Comptes" />
        </Row>
      </div>
      <div className={{ marginTop: "15px" }}>
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
      </div>
    </div>
  )
}

export default Account
