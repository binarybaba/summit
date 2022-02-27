const countries = [
    'NA',
    'EU',
    'JP',

]

export const CaseId = () => {
    return (
        <div>
            <form action="">
            <div>textarea</div>
            <div>
                {countries.map(countryCode => (
                  <div>
                    <label htmlFor={`caseId_${countryCode}`}>{countryCode}</label>
                    <input id={`caseId_${countryCode}`} type="radio" name="caseId" value={countryCode} key={countryCode}/>
                  </div>
                ))}
            </div>
            </form>

        </div>
    )
}
