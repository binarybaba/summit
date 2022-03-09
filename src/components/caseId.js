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
      domain = 'https://paragon-na.amazon.com/hz/view-investigation'
      break;
    case 'EU':
      domain = ''
      break;
    case 'JP':
      domain = ''
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
      <Typography use="headline4">Case IDs</Typography>
        <form>
          <div style={{ margin: '32px 0' }}>
            <TextField
              value={ids}
              onChange={(e) => setIds(e.currentTarget.value)}
              name="ids"
              textarea
              outlined
              fullwidth /* Junaid switch this to true if y */
              label="Enter search entries in seperate lines"
              rows={12}
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
