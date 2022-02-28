
export const linkList = [{
    name: 'Paragon NA',
    link: 'https://paragon-na.amazon.com/hz/search'
}, {
    name: 'Paragon EU',
    link: 'https://paragon-eu.amazon.com/hz/search'
}, {
  name: 'Paragon JP',
  link: 'https://paragon-fe.amazon.com/hz/search'
}, {
    name: 'Nautilus NA',
    link: 'https://nautilus-na.amazon-corp.com/'
  }, {
    name: 'Nautilus EU',
    link: 'https://nautilus-eu.amazon-corp.com/'
  }, {
    name: 'Nautilus JP',
    link: 'https://nautilus-fe.amazon-corp.com/'
  }, {
    name: 'SUMMIT Sharepoint',
    link: 'https://share.amazon.com/sites/BADSUMMIT/_layouts/15/start.aspx#/'
  }, {
    name: 'Seller SIM',
    link: 'https://tiny.amazon.com/ay2nln2q'
  }, {
    name: 'Buyer SIM',
    link: 'https://tiny.amazon.com/lcuo7fbl'
  }, {
    name: 'Team SUMMIT (Investigative)',
    link: 'https://quip-amazon.com/6QokOYnHPXPP/Team-SUMMIT-Investigative'
  }, {
    name: 'SUMMIT Watson',
    link: 'https://share.amazon.com/sites/amazonwatson/SUMMIT/SOPs/SUMMIT_Watson_Homepage.aspx'
  }, {
    name: 'SUMMIT #Hashtag Glossary',
    link: 'https://share.amazon.com/sites/BADSUMMIT/_layouts/15/WopiFrame.aspx?sourcedoc={0EF72D72-345B-4790-A050-228F4EB58590}&file=Hashtag_GlossaryDoc.docx&action=default'
  }, {
    name: 'SUMMIT Anonymous Feedback',
    link: 'https://survey.fieldsense.whs.amazon.dev/survey/195143d4-b528-4ae3-af06-12f82f8a3ab2'
  }, {
    name: 'BA SIM (Sangeetha)',
    link: 'https://sim.amazon.com/issues/create?template=b26f32fb-b25c-46ae-949a-d96d02628375'
  }, {
    name: 'Alchemist',
    link: 'https://paragon-na.amazon.com/hz/ptt'
  }, {
    name: 'BAT',
    link: 'https://brandprofile.corp.amazon.com/i/'
  }, {
    name: 'Brand Owner Verification',
    link: 'https://w.amazon.com/bin/view/TRMSCommunityHelp/PQ/PQBrandOwnerVerification/'
  }, {
    name: 'Image Assist',
    link: 'https://image-assist.amazon.com/'
  }, {
    name: 'Alexa Search',
    link: 'https://www.alexa.com/siteinfo'
  }, {
    name: 'AML Insight',
    link: 'https://amlinsight.lexisnexis.com/'
  }, {
    name: 'SOS',
    link: 'XXXXXXXXXXXX'
  }, {
    name: 'GC Explorer NA',
    link: 'https://gchelper-na.amazon.com/gcexplorer/'
  }, {
    name: 'GC Explorer EU',
    link: 'https://gchelper-eu.amazon.com/gcexplorer/'
  }, {
    name: 'GC Explorer JP',
    link: 'https://gchelper-fe.amazon.com/gcexplorer/'
  }, {
    name: 'Camshaft NA',
    link: 'https://camweb-na.amazon.com/'
  }, {
    name: 'Camshaft EU',
    link: 'https://camweb-eu.amazon.com/'
  }, {
    name: 'Camshaft JP',
    link: 'https://camweb-jp.amazon.com/'
  }, {
    name: 'Feedback / Suggestions?',
    link: 'https://quip-amazon.com/IACTALfxUNXO/Untitled#temp:C:JHFc75a90bf4ce1421d9c29468b3'
  }]

export const Links = () => {
    return (
        <div>
            <ul>
                {linkList.map(({ name, link }) => (
                    <li key={name}><a href={link}>{name}</a></li>
                ))}
            </ul>
        </div>
    )
}
