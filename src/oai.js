// ✅ Simple OAI-PMH XML Export (Europeana-Compatible)
// Bu dosya Venice Water Memory verisini OAI-PMH endpoint biçiminde dışa aktarır.

import { waterStories } from "./data/waterStories";

// 🧱 XML formatına dönüştür
export const generateOaiXml = () => {
  const records = waterStories
    .map(
      (story) => `
  <record>
    <header>
      <identifier>oai:watermemory:${story.identifier}</identifier>
      <datestamp>${new Date().toISOString()}</datestamp>
    </header>
    <metadata>
      <oai_dc:dc 
        xmlns:oai_dc="http://www.openarchives.org/OAI/2.0/oai_dc/" 
        xmlns:dc="http://purl.org/dc/elements/1.1/" 
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
        xsi:schemaLocation="http://www.openarchives.org/OAI/2.0/oai_dc/ 
        http://www.openarchives.org/OAI/2.0/oai_dc.xsd">
        <dc:title>${story.name}</dc:title>
        <dc:creator>${story.metadata?.creator || "Unknown"}</dc:creator>
        <dc:subject>${story.type}</dc:subject>
        <dc:description>${story.story}</dc:description>
        <dc:publisher>${story.metadata?.repository || "Unknown"}</dc:publisher>
        <dc:date>${story.metadata?.dateCreated || "Unknown"}</dc:date>
        <dc:type>${story.metadata?.format || "Unknown"}</dc:type>
        <dc:identifier>${story.identifier}</dc:identifier>
        <dc:language>${story.metadata?.language || "Unknown"}</dc:language>
        <dc:coverage>${story.metadata?.coverage || "Unknown"}</dc:coverage>
        <dc:rights>${story.metadata?.rights || "Unknown"}</dc:rights>
      </oai_dc:dc>
    </metadata>
  </record>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<OAI-PMH xmlns="http://www.openarchives.org/OAI/2.0/"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://www.openarchives.org/OAI/2.0/
         http://www.openarchives.org/OAI/2.0/OAI-PMH.xsd">
  <responseDate>${new Date().toISOString()}</responseDate>
  <request verb="ListRecords">https://watermemory.oai</request>
  <ListRecords>
    ${records}
  </ListRecords>
</OAI-PMH>`;
};

// 💾 XML dosyasını indir
export const downloadOaiXml = () => {
  const xml = generateOaiXml();
  const blob = new Blob([xml], { type: "application/xml" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "WaterMemory_OAI_PMH.xml";
  link.click();
};
