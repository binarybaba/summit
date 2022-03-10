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
    { name: "Paragon NA", link: "https://paragon-na.amazon.com/hz/search" },
    { name: "Nautilus NA", link: "https://nautilus-na.amazon-corp.com/" },
    { name: "GC Explorer NA", link: "https://gchelper-na.amazon.com/gcexplorer/" },
    { name: "Camshaft NA", link: "https://camweb-na.amazon.com/" },
    { name: "SUMMIT Sharepoint", link: "https://share.amazon.com/sites/BADSUMMIT/_layouts/15/start.aspx#/" },
    { name: "SUMMIT Anonymous Feedback", link: "https://survey.fieldsense.whs.amazon.dev/survey/195143d4-b528-4ae3-af06-12f82f8a3ab2" },
  ],
  [
    { name: "Paragon EU", link: "https://paragon-eu.amazon.com/hz/search" },
    { name: "Nautilus EU", link: "https://nautilus-eu.amazon-corp.com/" },
    { name: "GC Explorer EU", link: "https://gchelper-eu.amazon.com/gcexplorer/" },
    { name: "Camshaft EU", link: "https://camweb-eu.amazon.com/" },
    { name: "SUMMIT Watson", link: "https://share.amazon.com/sites/amazonwatson/SUMMIT/SOPs/SUMMIT_Watson_Homepage.aspx" },
    { name: "SUMMIT #Hashtag Glossary", link: "https://share.amazon.com/sites/BADSUMMIT/_layouts/15/WopiFrame.aspx?sourcedoc={0EF72D72-345B-4790-A050-228F4EB58590}&file=Hashtag_GlossaryDoc.docx&action=default" },
   ],
   [
    { name: "Paragon JP", link: "https://paragon-fe.amazon.com/hz/search" },
    { name: "Nautilus JP", link: "https://nautilus-fe.amazon-corp.com/" },
    { name: "GC Explorer JP", link: "https://gchelper-fe.amazon.com/gcexplorer/" },
    { name: "Camshaft FE", link: "https://camweb-jp.amazon.com/" },
    { name: "SUMMIT Quip", link: "https://quip-amazon.com/6QokOYnHPXPP/Team-SUMMIT-Investigative" },
    { name: "Brand Owner Verification", link: "https://w.amazon.com/bin/view/TRMSCommunityHelp/PQ/PQBrandOwnerVerification/" },
   ],
   [ 
    { name: "Seller SIM", link: "https://tiny.amazon.com/ay2nln2q" },
    { name: "Buyer SIM", link: "https://tiny.amazon.com/lcuo7fbl" },
    { name: "Alchemist", link: "https://paragon-na.amazon.com/hz/ptt" },
    { name: "Image Assist", link: "https://image-assist.amazon.com/" },
    { name: "BAT", link: "https://brandprofile.corp.amazon.com/i/" },
    { name: "BA SIM (Sangeetha)", link: "https://sim.amazon.com/issues/create?template=b26f32fb-b25c-46ae-949a-d96d02628375" },
  ],
  [
    { name: "AML Insight", link: "https://amlinsight.lexisnexis.com/" },
    { name: "Test Buy", link: "https://share.amazon.com/sites/BADSUMMIT/_layouts/15/WopiFrame2.aspx?sourcedoc=%7b7802A4B7-3C07-44F6-BAB1-1F5752260497%7d&file=SUMMIT%20Test%20Buy%20-%20Council%20Reviewed_CM_Final.docx&action=default" },
    { name: "Alexa Search", link: "https://www.alexa.com/siteinfo" },
    { name: "Bulk Merchant Tool", link: "https://paragon-na.amazon.com/hz/investigation-admin-tools" },
    { name: "Suggestions?", link: "https://survey.fieldsense.whs.amazon.dev/survey/preview/8bac67c5-1f06-4a05-a1cf-c92e69290e1d" }
  ],
];

export const ImportantLinks = () => {
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
