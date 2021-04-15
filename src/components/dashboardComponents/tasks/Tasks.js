import { Tab } from "bootstrap"
import React, { useState } from "react"
import { Row, Tabs } from "react-bootstrap"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"

import MainBackButton from "../../primaryComponents/MainBackButton"
import MainTitle from "../../primaryComponents/MainTitle"

const Tasks = () => {
  const history = useHistory()
  const handleHistory = () => history.goBack()

  const [key, setKey] = useState("Tâches en cours")

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <Row>
        <MainBackButton onClick={handleHistory} />
        <MainTitle title="Tâches" />
      </Row>
      <div>
        <Link
          className="btn btn-primary btn-lg"
          role="button"
          style={{ width: "167px", marginBottom: "30px" }}
          to="/dashboard/tasks/newtask"
          active
        >
          Nouvelle tâche
        </Link>
      </div>
      <div>
        <Tabs id="tasks-tabs" activeKey={key} onSelect={(k) => setKey(k)}>
          <Tab eventKey="tâches-en-cours" title="Tâches en cours"></Tab>
          <Tab eventKey="tâches-effectuées" title="Tâches effectuées"></Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default Tasks
