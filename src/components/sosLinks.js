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
    { name: "Alabama", link: "http://arc-sos.state.al.us/CGI/CORPNAME.MBR/INPUT" },
    { name: "Alaska", link: "https://www.commerce.alaska.gov/cbp/main/search/entities" },
    { name: "Arizona", link: "https://azsos.gov/business" },
    { name: "Arkansas", link: "https://www.sos.arkansas.gov/corps/search_all.php" },
    { name: "California", link: "https://businesssearch.sos.ca.gov/" },
    { name: "Colorado", link: "https://www.sos.state.co.us/biz/BusinessEntityCriteriaExt.do" },
  ],
  [
    { name: "Connecticut", link: "https://www.concord-sots.ct.gov/CONCORD/online?sn=PublicInquiry&eid=9740" },
    { name: "Delaware", link: "https://icis.corp.delaware.gov/Ecorp/EntitySearch/NameSearch.aspx" },
    { name: "Florida", link: "http://search.sunbiz.org/Inquiry/CorporationSearch/ByName" },
    { name: "Georgia", link: "https://ecorp.sos.ga.gov/BusinessSearch" },
    { name: "Hawaii", link: "https://hbe.ehawaii.gov/documents/search.html" },
    { name: "Idaho", link: "https://sosbiz.idaho.gov/search/business" },
  ],
  [
    { name: "Illinois", link: "https://apps.ilsos.gov/corporatellc/" },
    { name: "Indiana", link: "https://bsd.sos.in.gov/publicbusinesssearch" },
    { name: "Iowa", link: "https://sos.iowa.gov/search/business/search.aspx" },
    { name: "Kansas", link: "https://www.kansas.gov/bess" },
    { name: "Kentucky[E]", link: "https://web.sos.ky.gov/ftsearch/" },
    { name: "Louisiana", link: "https://coraweb.sos.la.gov/commercialsearch/commercialsearch.aspx" },
  ],
  [
    { name: "Maine", link: "https://icrs.informe.org/nei-sos-icrs/ICRS?MainPage=x" },
    { name: "Maryland", link: "https://egov.maryland.gov/businessexpress/entitysearch" },
    { name: "Massachusetts[E]", link: "https://corp.sec.state.ma.us/corpweb/CorpSearch/CorpSearch.aspx" },
    { name: "Michigan", link: "https://cofs.lara.state.mi.us/SearchApi/Search/Search" },
    { name: "Minnesota", link: "https://www.sos.state.mn.us/business-liens/business-help/how-to-search-business-filings/" },
    { name: "Mississippi", link: "https://corp.sos.ms.gov/corp/portal/c/page/corpBusinessIdSearch/portal.aspx?#clear=1" },
  ],
  [
    { name: "Missouri", link: "https://bsd.sos.mo.gov/BusinessEntity/BESearch.aspx?SearchType=0" },
    { name: "Montana", link: "https://biz.sosmt.gov/search/business" },
    { name: "Nebraska", link: "https://www.nebraska.gov/sos/corp/corpsearch.cgi?nav=search" },
    { name: "Nevada", link: "https://esos.nv.gov/EntitySearch/OnlineEntitySearch" },
    { name: "New Hampshire", link: "https://quickstart.sos.nh.gov/online/BusinessInquire" },
    { name: "New Jersey", link: "https://www.njportal.com/dor/businessnamesearch/" },
  ],
  [
    { name: "New Mexico", link: "https://www.sos.state.nm.us/" },
    { name: "New York", link: "https://appext20.dos.ny.gov/corp_public/CORPSEARCH.ENTITY_SEARCH_ENTRY" },
    { name: "North Carolina", link: "https://www.sosnc.gov/search/index/corp" },
    { name: "North Dakota", link: "https://firststop.sos.nd.gov/search/business" },
    { name: "Ohio", link: "https://businesssearch.ohiosos.gov/" },
    { name: "Oklahoma", link: "https://www.sos.ok.gov/corp/corpInquiryFind.aspx" },
  ],
  [
    { name:  "Oregon", link: "https://sos.oregon.gov/business/Pages/find.aspx" },
    { name: "Pennsylvania[E]", link: "https://www.corporations.pa.gov/search/corpsearch" },
    { name: "Rhode Island[F]", link: "https://business.sos.ri.gov/CorpWeb/CorpSearch/CorpSearch.aspx" },
    { name: "South Carolina", link: "https://businessfilings.sc.gov/BusinessFiling/Entity/Search" },
    { name: "South Dakota", link: "https://sdsos.gov/business-services/default.aspx" },
    { name: "Tennessee", link: "https://tnbear.tn.gov/Ecommerce/FilingSearch.aspx" },
  ],
  [
    { name: "Texas", link: "https://mycpa.cpa.state.tx.us/coa/" },
    { name: "Utah", link: "https://secure.utah.gov/bes/" },
    { name: "Vermont", link: "https://sos.vermont.gov/corporations/" },
    { name: "Virginia[E]", link: "https://cis.scc.virginia.gov/EntitySearch/Index"},
    { name: "Washington", link: "https://ccfs.sos.wa.gov/#/" },
    { name: "West Virginia", link: "https://apps.sos.wv.gov/business/corporations/" },
  ],
  [
    { name: "Wisconsin", link: "https://sos.wi.gov/" },
    { name: "Wyoming", link: "https://sos.wyo.gov/" },
    { name: "XXXXXX", link: "https://www.nebraska.gov/sos/corp/corpsearch.cgi?nav=search" },
    { name: "XXXXXX", link: "https://esos.nv.gov/EntitySearch/OnlineEntitySearch" },
    { name: "XXXXXX", link: "https://quickstart.sos.nh.gov/online/BusinessInquire" },
    { name: "XXXXXX", link: "https://www.njportal.com/dor/businessnamesearch/" },
  ],
];
  
export const SosLinks = () => {
  return (
    <DataTable style={{ width: 'calc(100vw - 40px)' }}>
      <DataTableContent>
        <DataTableBody>
          {linkTable.map(row => (
            <DataTableRow>
              {row.map(({ name, link }) => (
                <DataTableCell>
                  <Button outlined onClick={() => window.open(link, "_blank")}>{name}</Button>
                </DataTableCell>
              ))}
            </DataTableRow>
          ))}
        </DataTableBody>
      </DataTableContent>
    </DataTable>
  )
};
