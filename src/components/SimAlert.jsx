import React from 'react';
import {Alert} from "react-bootstrap";

const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;
export default function SimAlert({simData}) {
	const currentRSRPThreshold = -80.0
	const currentRSRQThreshold = -10.0
	const averageRSRP = average(simData.rsrp_dbm)
	const averageRSRQ = average(simData.rsrq_db)
	  return (
    <>
		<div>
			<p>Average RSRP last 1 hour: {averageRSRP}</p>
			<p>Current RSRP Threshold: {currentRSRPThreshold}</p>
			{averageRSRP > currentRSRPThreshold ?
					<Alert variant={'success'}>
						Good RSRP
			</Alert>
				:
				<Alert variant={'danger'}>
					Bad RSRP
				</Alert>
			}
			</div>

			<div>
			<p>Average RSRQ last 1 hour: {averageRSRQ}</p>
			<p>Current RSRQ Threshold: {currentRSRQThreshold}</p>
			{averageRSRQ > currentRSRQThreshold ?
					<Alert variant={'success'}>
						Good RSRQ
			</Alert>
				:
				<Alert variant={'danger'}>
					Bad RSRQ
				</Alert>
			}
			</div>
    </>
  );
}