const countries = [
    'US',
    'CA',
    'MX',
    'UK',
    'FR',
    'DE',
    'IT',
    'ES',
    'IN',
    'TR',
    'JP',

]

export const OrderId = () => {
    return (
      <div>
      <Typography use="headline3">Customer IDs / Order IDs</Typography>
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
            label="Orgs"
            options={countries}
          />
        </div>


        </form>

    </div>
    )
}
