import { useState } from "react";
import { Select } from "@rmwc/select";
import { TextField } from "@rmwc/textfield";
import { Button } from "@rmwc/button";
import "@rmwc/menu/styles";
import "@rmwc/select/styles";
import "@rmwc/typography/styles";
import "@rmwc/textfield/styles";
import "@rmwc/button/styles";

const countries = [
  { country: "US", encryptedMarketplaceId: "ATVPDKIKX0DER" },
  { country: "CA", encryptedMarketplaceId: "A2EUQ1WTGCTBG2" },
  { country: "MX", encryptedMarketplaceId: "" },
  { country: "UK", encryptedMarketplaceId: "" },
  { country: "FR", encryptedMarketplaceId: "" },
  { country: "DE", encryptedMarketplaceId: "" },
  { country: "IT", encryptedMarketplaceId: "" },
  { country: "ES", encryptedMarketplaceId: "" },
  { country: "IN", encryptedMarketplaceId: "" },
  { country: "TR", encryptedMarketplaceId: "" },
  { country: "JP", encryptedMarketplaceId: "" },
];

export const generateLoadLink = (org, idArray) => {
  let domain = "";
  const encryptedMarketPlace = countries.find(
    (country) => country.country === org
  ).encryptedMarketplaceId;
  switch (org) {
    case "US":
      domain = "https://paragon-na.amazon.com/hz/view-investigation-lookup";
      break;
    case "CA":
      domain = "";
      break;
    case "MX":
      domain = "";
      break;
    case "UK":
      domain = "";
      break;
    case "FR":
      domain = "";
      break;
    case "DE":
      domain = "";
      break;
    case "IT":
      domain = "";
      break;
    case "ES":
      domain = "";
      break;
    case "IN":
      domain = "";
      break;
    case "TR":
      domain = "";
      break;
    case "JP":
      domain = "";
      break;
    default:
      return ''
  }
  return idArray.map((id) => {
    const isOrderId = id.toString().includes("-");
    const lookupType = isOrderId ? "orderId" : "sellerCustomerId";
    return `${domain}?lookupType=${lookupType}&encryptedMarketplaceId=${encryptedMarketPlace}&lookupQuery=${id}`;
  });
};

export const OrderId = () => {
  const [org, setOrg] = useState();
  const [ids, setIds] = useState();

  const handleLoadClick = (e) => {
    e.preventDefault();
    const idArray = ids.split("\n").filter((possibleId) => possibleId.length);
    generateLoadLink(org, idArray).forEach((link) =>
      window.open(link, "_blank")
    );
  };

  return (
    <div>
      <form>
        <div style={{ marginTop: "10px 0", marginBottom: "10px 0" }}>
          <TextField
            value={ids}
            onChange={(e) => setIds(e.currentTarget.value)}
            name="ids"
            textarea
            outlined
            fullwidth /* Junaid switch this to true if y */
            label="Enter Seller Ids/OrderIds in separate lines"
            rows={6}
            characterCount
            
          />
        </div>
        <div>
          <Select
            value={org}
            onChange={(evt) => setOrg(evt.currentTarget.value)}
            label="Marketplace"
            options={countries.map(({ country }) => country)}
          />
        </div>
        <div
          style={{
            margin: "18px 0",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button onClick={handleLoadClick} label="Launch" raised />
        </div>
      </form>
    </div>
  );
};
