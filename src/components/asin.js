
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
                    <input />
                ))}
            </div>
            </form>
            
        </div>
    )
}