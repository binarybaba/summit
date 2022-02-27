
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
    'CN',
    'AU',
]

export const Asin = () => {
    return (
        <div>
            <form action="">
            <div>textarea</div>
            <div>
                {countries.map(countryCode => (
                    <div>
                      <label htmlFor={`asin_${countryCode}`}>{countryCode}</label>
                      <input id={`asin_${countryCode}`} type="radio" name="asin" value={countryCode} key={countryCode}/>
                    </div>
                ))}
            </div>
            </form>

        </div>
    )
}
