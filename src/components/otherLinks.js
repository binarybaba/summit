import {
  DataTable,
  DataTableContent,
  DataTableBody,
  DataTableRow,
  DataTableCell,
} from "@rmwc/data-table";
import { Button } from "@rmwc/button";

const linkTable = [
  [
    { name: "Wayback Machine", link: "https://archive.org/web/" },
    { name: "IP India", link: "https://ipindiaonline.gov.in/tmrpublicsearch/frmmain.aspx" },
    { name: "WhoIS", link: "https://www.whois.com/" },
    { name: "To be updated", link: "XXXXXXXXXXX" },
    { name: "To be updated", link: "XXXXXXXXXXX" },
    { name: "Global Transfer Guide", link: "https://share.amazon.com/sites/amazonwatson/Multiple_Verticals/SOPs/Global_Transfer_Guide.aspx" },
  ],
  [
    { name: "Alexa Search", link: "https://www.alexa.com/siteinfo" },
    { name: "TM India", link: "https://ipindiaonline.gov.in/eregister/eregister.aspx" },
    { name: "To be updated", link: "XXXXXXXXXXX" },
    { name: "To be updated", link: "XXXXXXXXXXX" },
    { name: "To be updated", link: "XXXXXXXXXXX" },
    { name: "Brand Owner Verification", link: "https://w.amazon.com/bin/view/TRMSCommunityHelp/PQ/PQBrandOwnerVerification/" },
  ],
  [
    { name: "Amazon Wiki", link: "https://w.amazon.com/bin/view/Main/" },
    { name: "EUIPO", link: "https://euipo.europa.eu/eSearch/" },
    { name: "To be updated", link: "XXXXXXXXXXX" },
    { name: "To be updated", link: "XXXXXXXXXXX" },
    { name: "To be updated", link: "XXXXXXXXXXX" },
    { name: "To be updated", link: "XXXXXXXXXXX" },
  ],
  [
    { name: "USPTO", link: "https://tmsearch.uspto.gov/bin/gate.exe?f=login&p_lang=english&p_d=trmk" },
    { name: "WIPO", link: "https://www3.wipo.int/branddb/en/index.jsp" },
    { name: "To be updated", link: "XXXXXXXXXXX" },
    { name: "To be updated", link: "XXXXXXXXXXX" },
    { name: "To be updated", link: "XXXXXXXXXXX" },
    { name: "To be updated", link: "XXXXXXXXXXX" },
  ],
];

export const OtherLinks = () => {
  return (
    <DataTable style={{ width: 'calc(100vw - 40px)' }}>
      <DataTableContent>
        <DataTableBody>
          {linkTable.map(row => (
            <DataTableRow>
              {row.map(({ name, link }) => (
                <DataTableCell>
                  <Button outlined onClick={() => window.open(link, "_blank")} className="link-button">{name}</Button>
                </DataTableCell>
              ))}
            </DataTableRow>
          ))}
        </DataTableBody>
      </DataTableContent>
    </DataTable>
  )
};
