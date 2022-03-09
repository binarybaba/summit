import { useState } from "react";
import { Select } from '@rmwc/select';
import { Typography } from '@rmwc/typography';
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
      domain = 'paragon-na.amazon.com/hz/view-investigation?caseId='
      break;
    case 'EU':
      domain = 'paragon-eu.amazon.com/hz/view-investigation?caseId='
      break;
    case 'JP':
      domain = 'paragon-fe.amazon.com/hz/view-investigation?caseId='
      break;
  }
  return idArray.map(id => `${domain}?caseId=${id}`)
}

export const CaseId = () => {
  const [org, setOrg] = useState();
  const [ids, setIds] = useState();

  const handleLoadClick = (e) => {
    e.preventDefault();
    const idArray = ids.split("\n").filter((possibleId) => possibleId.length);
    generateLoadLink(org, idArray).forEach(link => window.open(link, '_blank'))
  };

    return (
      <div>
        <form>
          <div style={{ margin: '32px 0' }}>
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
              helpText={{
                persistent: true,
                validationMsg: true,
                children: "The field is required",
              }}
            />
          </div>
        <div>
          <Select
            value={org}
            onChange={(evt) => setOrg(evt.currentTarget.value)}
            label="Marketplace"
            options={countries}
          />
        </div>
          <div
            style={{
              margin: "32px 0",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button onClick={handleLoadClick} label="Launch" raised />
          </div>
        </form>

    </div>
    )
}
