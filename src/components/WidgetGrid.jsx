import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CurrentCellInfo from "components/CurrentCellInfo";
import HistoricalData from "components/HistoricalData";
import { useEffect, useState } from "react";
import SimAlert from "components/SimAlert";

export default function WidgetGrid() {
  const [simData, setSimData] = useState({ ts: [], rsrp_dbm: [], rsrq_db: [] });

  useEffect(() => {
    async function fetchData() {
      await fetch(
        "http://iotltesupervisor-env.eba-qgmwipr2.ap-southeast-1.elasticbeanstalk.com/get_1hr_signals/"
      )
        .then((res) => res.json())
        .then(function (data) {
          setSimData({
            ts: data.ts,
            rsrp_dbm: data.rsrp_dbm,
            rsrq_db: data.rsrq_db,
          });
        });
    }

    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <Row xs={1} md={2} className="g-4">
      <Col>
        <CardSample title="RSRP and RSRQ data">
          <HistoricalData simData={simData} />
        </CardSample>
      </Col>
      <Col>
        <CardSample title="Alert">
          <SimAlert simData={simData} />
        </CardSample>
      </Col>
      <Col>
        <CardSample title="Current Cell Info">
          <CurrentCellInfo />
        </CardSample>
      </Col>
    </Row>
  );
}

function CardSample({ title, children }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {children}
      </Card.Body>
    </Card>
  );
}
