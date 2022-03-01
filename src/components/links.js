
export const linkList = [{
    name: 'Alabama',
    link: 'http://arc-sos.state.al.us/CGI/CORPNAME.MBR/INPUT'
}, {
    name: 'Alaska',
    link: 'https://www.commerce.alaska.gov/cbp/main/search/entities'
}, {
  name: 'dwdwdw',
  link: 'swdwdwdw'
}]

export const Links = () => {
    return (
        <div>
          <div>Important links</div>
            <ul>
                {linkList.map(({ name, link }) => (
                    <li key={name}><a href={link}>{name}</a></li>
                ))}
            </ul>
        </div>
    )
}
