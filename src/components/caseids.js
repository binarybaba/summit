const countries = [
    'NA',
    'EU',
    'FE',

]

export const caseids = () => {
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