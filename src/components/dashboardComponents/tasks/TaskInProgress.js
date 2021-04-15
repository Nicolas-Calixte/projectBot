import React from "react"
import { Table } from "react-bootstrap"

const TaskInProgress = () => {
  return (
    <div style={{ marginTop: "20px" }}>
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
  )
}

export default TaskInProgress
