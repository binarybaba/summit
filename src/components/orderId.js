import { useState } from "react";
import { Select } from "@rmwc/select";
import { Typography } from "@rmwc/typography";
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
      domain = "https://www.amazon.ca/";
      break;
    case "MX":
      domain = "https://www.amazon.com.mx/";
      break;
    case "UK":
      domain = "https://www.amazon.co.uk/";
      break;
    case "FR":
      domain = "https://www.amazon.fr/";
      break;
    case "DE":
      domain = "https://www.amazon.de/";
      break;
    case "IT":
      domain = "https://www.amazon.it/";
      break;
    case "ES":
      domain = "https://www.amazon.es/";
      break;
    case "IN":
      domain = "https://www.amazon.in/";
      break;
    case "TR":
      domain = "https://www.amazon.com.tr/";
      break;
    case "JP":
      domain = "https://www.amazon.co.jp/";
      break;
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
      <Typography use="headline4">Seller IDs / Order IDs</Typography>
      <form>
        <div style={{ margin: "32px 0" }}>
          <TextField
            value={ids}
            onChange={(e) => setIds(e.currentTarget.value)}
            name="ids"
            textarea
            outlined
            fullwidth /* Junaid switch this to true if y */
            label="Enter search entries in seperate lines"
            rows={12}
            characterCount
            helpText={{
              persistent: true,
              validationMsg: true,
              children: "The field is required",
            }}
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
            margin: "32px 0",
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
