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
            <form action="">
            <div>textarea</div>
            <div>
                {countries.map(countryCode => (
                  <div>
                    <label htmlFor={`orderId_${countryCode}`}>{countryCode}</label>
                    <input id={`orderId_${countryCode}`} type="radio" name="orderId" value={countryCode} key={countryCode}/>
                  </div>
                ))}
            </div>
            </form>

        </div>
    )
}
