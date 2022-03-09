import { useState } from "react";
import { Select } from '@rmwc/select';
import { TextField } from '@rmwc/textfield';
import { Button } from "@rmwc/button";
import "@rmwc/menu/styles";
import "@rmwc/select/styles";
import "@rmwc/typography/styles";
import "@rmwc/textfield/styles";
import "@rmwc/button/styles";


const countries = [
    'NA',
    'EU',
    'JP',
]

export const generateLoadLink = (org, idArray) => {
  let domain = ''
  switch (org) {
    case 'NA':
      domain = 'https://paragon-na.amazon.com/hz/view-investigation'
      break;
    case 'EU':
      domain = 'https://paragon-eu.amazon.com/hz/view-investigation'
      break;
    case 'JP':
      domain = 'https://paragon-fe.amazon.com/hz/view-investigation'
      break;
    default:
      return ''
  }
  return idArray.map(id => `${domain}?caseId=${id}`)
}

export const CaseId = () => {
  const [org, setOrg] = useState();
  const [ids, setIds] = useState();

  const handleLoadClick = (e) => {
    e.preventDefault();
    const idArray = ids.split("\n").filter((possibleId) => possibleId.length);
    generateLoadLink(org, idArray).forEach(link => window.open(link.trim(), '_blank'))
  };

    return (
      <div>
        <form>
          <div style={{ marginTop: "22px", marginBottom: "10px" }}>
            <TextField
              value={ids}
              onChange={(e) => setIds(e.currentTarget.value)}
              name="ids"
              textarea
              outlined
              fullwidth /* Junaid switch this to true if y */
              label="Enter Case Ids in separate lines"
              rows={6}
              characterCount
             
            />
          </div>
        <div>
          <Select
            value={org}
            enhanced
            onChange={(evt) => setOrg(evt.currentTarget.value)}
            label="Marketplace"
            options={countries}
          />
        </div>
          <div
            style={{
              margin: "18px 0",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button onClick={handleLoadClick} label="Launch" danger raised />
          </div>
        </form>

    </div>
    )
}
