import {
  DataTable,
  DataTableContent,
  DataTableBody,
  DataTableRow,
  DataTableCell,
} from "@rmwc/data-table";
import { List, ListItem} from '@rmwc/list'
import { Button } from "@rmwc/button";
import '@rmwc/list/styles';
import {useEffect, useState} from "react";

export const linkTable = [
  [
    { name: "Paragon NA", link: "https://paragon-na.amazon.com/hz/search" },
    { name: "Nautilus NA", link: "https://nautilus-na.amazon-corp.com/" },
    { name: "GC Explorer NA", link: "https://gchelper-na.amazon.com/gcexplorer/" },
    { name: "Camshaft NA", link: "https://camweb-na.amazon.com/" },
    { name: "CamelCamel", link: "https://camelcamelcamel.com/" },
    { name: "Suggestions?", link: "https://survey.fieldsense.whs.amazon.dev/survey/preview/8bac67c5-1f06-4a05-a1cf-c92e69290e1d" },
  ],
  [
    { name: "Paragon EU", link: "https://paragon-eu.amazon.com/hz/search" },
    { name: "Nautilus EU", link: "https://nautilus-eu.amazon-corp.com/" },
    { name: "GC Explorer EU", link: "https://gchelper-eu.amazon.com/gcexplorer/" },
    { name: "Camshaft EU", link: "https://camweb-eu.amazon.com/" },
    { name: "SUMMIT Watson", link: "https://share.amazon.com/sites/amazonwatson/SUMMIT/SOPs/SUMMIT_Watson_Homepage.aspx" },
    { name: "Spider Script", link: "https://w.amazon.com/bin/view/SPIDER-_BRI_(Buyer_Risk_Investigations)" },
   ],
   [
    { name: "Paragon JP", link: "https://paragon-fe.amazon.com/hz/search" },
    { name: "Nautilus JP", link: "https://nautilus-fe.amazon-corp.com/" },
    { name: "GC Explorer JP", link: "https://gchelper-fe.amazon.com/gcexplorer/" },
    { name: "Camshaft FE", link: "https://camweb-jp.amazon.com/" },
    { name: "Global Transfer Guide", link: "https://share.amazon.com/sites/amazonwatson/Multiple_Verticals/SOPs/Global_Transfer_Guide.aspx" },
    { name: "Wallet Viewer NA", link: "https://wallet-viewer-na.amazon.com/" },
   ],
   [
    { name: "Seller SIM", link: "https://tiny.amazon.com/ay2nln2q" },
    { name: "Buyer SIM", link: "https://tiny.amazon.com/lcuo7fbl" },
    { name: "Alchemist", link: "https://paragon-na.amazon.com/hz/ptt" },
    { name: "Image Assist", link: "https://image-assist.amazon.com/" },
    { name: "BAT", link: "https://brandprofile.corp.amazon.com/i/" },
    { name: "Wallet Viewer JP", link: "https://wallet-viewer-fe.amazon.com/" },
  ],
  [
    { name: "AML Insight", link: "https://amlinsight.lexisnexis.com/" },
    { name: "Ajuda", link: "https://ajuda.a2z.com/view.html?stage=Live&repo=GAEGB78MKKYZXAQ8&hierarchy=GBSV4XKBAUMNZ257&hierLayer=Global&hierLocale=en-US&marketplace=US&locale=en-US&node=G9T4C85L3T3VVSMS" },
    { name: "Test Buy", link: "https://share.amazon.com/sites/BADSUMMIT/_layouts/15/WopiFrame2.aspx?sourcedoc=%7b7802A4B7-3C07-44F6-BAB1-1F5752260497%7d&file=SUMMIT%20Test%20Buy%20-%20Council%20Reviewed_CM_Final.docx&action=default" },
    { name: "CSI", link: "https://csi.amazon.com/view" },
    { name: "Hubble", link: "https://hubble.amazon.com/" },
    { name: "Cradle", link: "https://datacentral.a2z.com/cradle?mons_redirect=sign_in&mons_redirect=sign_in#/SellerFinancialDisincentive/home?runPeriod=WEEK&status=All" },
  ],
  [
    { name: "Ramp Console", link: "https://rampconsole-iad.iad.proxy.amazon.com/navigation/multipurposeSearch?requestId=3b350af2-a1d8-4d29-9997-f26517ee6939" },
    { name: "Pipl", link: "https://pipl.com/search/" },
    { name: "Scam Advisor", link: "https://www.scamadviser.com/" },
    { name: "Allsec", link: "https://www.allsechro.com/AmazonSSO" },
    { name: "Amazon Translate", link: "https://azt.internal.translate.aws.dev/" },
    { name: "SUMMIT Anonymous Feedback", link: "https://survey.fieldsense.whs.amazon.dev/survey/195143d4-b528-4ae3-af06-12f82f8a3ab2" },
  ],
  [
    { name: "Guidestar", link: "https://www.guidestar.org/" },
    { name: "Wayback Machine", link: "https://archive.org/web/" },
    { name: "Spokeo", link: "https://www.spokeo.com/" },
    { name: "IP Tracker", link: "https://www.ip-tracker.org/" },
    { name: "What is my IP", link: "https://whatismyipaddress.com/ip-lookup" },
    { name: "Politically Exposed Person", link: "https://www.cm1.se/en/pep-sanktionssokning/" },
  ],
  [
    { name: "EUIPO", link: "https://trademarks.ipo.gov.uk/ipo-tmcase" },
    { name: "WIPO", link: "https://branddb.wipo.int/branddb/en/" },
    { name: "USPTO", link: "https://tmsearch.uspto.gov/bin/gate.exe?f=login&p_lang=english&p_d=trmk" },
    { name: "IP India", link: "https://ipindiaonline.gov.in/tmrpublicsearch/frmmain.aspx" },
    { name: "Alexa Search", link: "https://www.alexa.com/siteinfo" },
    { name: "Amazon Wiki", link: "https://w.amazon.com/bin/view/Main/" },
  ],
  [
    { name: "WhoIs", link: "https://www.whois.com/whois/" },
    { name: "Ekata", link: "https://app.ekata.com/sign_in" },
    { name: "XXXXXXXXX", link: "https://csi.amazon.com/view" },
    { name: "XXXXXXXXX", link: "https://ipindiaonline.gov.in/tmrpublicsearch/frmmain.aspx" },
    { name: "XXXXXXXXX", link: "https://www.alexa.com/siteinfo" },
    { name: "XXXXXXXXX", link: "https://w.amazon.com/bin/view/Main/" },
  ],
];

export const ImportantLinks = () => {

  const [searchKeyword, setSearchKeyword] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    if(searchKeyword.length) {
      setSearchResults([].concat(linkTable).reduce((acc, c) => {
        c.forEach(v => acc.push(v))
        return acc;
      }, []).filter(entry => entry.name.toLowerCase().includes(searchKeyword.toLowerCase())))
    }
    setIsSearching(!!searchKeyword.length)
  }, [searchKeyword])

  return (
    <DataTable style={{ width: 'calc(98vw - 40px)' }}>
      <DataTableContent>
        <input type="text" placeholder="Type to search..." value={searchKeyword} onChange={(e) => setSearchKeyword(e.currentTarget.value || '')}/>
        {isSearching ? (
          <DataTableBody>
            <List>
              {searchResults.map(({ name, link }) => (
                <ListItem onClick={() => window.open(link, "_blank")}>
                  {name}
                </ListItem>
              ))}
            </List>
          </DataTableBody>
        ) : (
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
        )}
      </DataTableContent>
    </DataTable>
  )
};
