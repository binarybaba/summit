import { Select } from '@rmwc/select';
import { Typography } from '@rmwc/typography';
import { TextField } from '@rmwc/textfield';

const countries = [
    'NA',
    'EU',
    'JP',

]

export const CaseId = () => {
    return (
      <div>
      <Typography use="headline4">Case IDs</Typography>
        <form action="">
          <div style={{ margin: '32px 0' }}>
            <TextField
              textarea
              outlined
              fullwidth /* Junaid switch this to true if y */
              label="Enter search entries in seperate lines"
              rows={12}
              characterCount
              helpText={{
                persistent: true,
                validationMsg: true,
                children: 'The field is required'
              }}
            />
          </div>
        <div>
          <Select
            label="Marketplace"
            options={countries}
          />
        </div>


        </form>

    </div>
    )
}
