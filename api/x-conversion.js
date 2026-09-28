export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const token = process.env.X_PIXEL_TOKEN;

  if (!token) {
    return res.status(500).json({ error: "Missing X Pixel token" });
  }

  try {
    const { event_id, conversion_time, conversion_id, event_source_url, identifiers } = req.body;

    const response = await fetch(
      "https://ads-api.x.com/12/measurement/conversions/rcew3",
      {
        method: "POST",
        headers: {
          "X-Pixel-Token": token,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          conversions: [
            {
              event_id,
              conversion_time,
              conversion_id,
              event_source_url,
              identifiers
            }
          ]
        })
      }
    );

    const data = await response.text();

    return res.status(response.status).send(data);
  } catch (error) {
    return res.status(500).json({ error: "Conversion request failed" });
  }
}
