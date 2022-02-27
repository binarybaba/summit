
const countries = [
    'US',
    'CA',
    'MX',
    'MX',

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