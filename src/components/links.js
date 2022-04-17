import { useState } from "react";
import { TabBar, Tab } from "@rmwc/tabs";
import "@rmwc/tabs/styles";
import "@rmwc/data-table/styles";
import { ImportantLinks } from "./importantLinks";
import { SosLinks } from "./sosLinks";
import { OtherLinks } from "./otherLinks";


export const Links = () => {
  const [linkTable, setLinkTable] = useState("IMPORTANT_LINKS");
  return (
    <div>
      <TabBar>
        <Tab onClick={() => setLinkTable("IMPORTANT_LINKS")} className="tab">
          Important Links
        </Tab>
        <Tab onClick={() => setLinkTable("SOS_LINKS")} className="tab">SOS</Tab>
        
      </TabBar>
      <div>
        {linkTable === 'IMPORTANT_LINKS' && <ImportantLinks />}
        {linkTable === 'SOS_LINKS' && <SosLinks />}
        {linkTable === 'OTHER_IMPORTANT_LINKS' && <OtherLinks />}
      </div>
    </div>
  );
};
