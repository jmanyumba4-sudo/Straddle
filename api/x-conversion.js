POST https://ads-api.x.com/12/measurement/conversions/rcew3
X-Pixel-Token: {token}
Content-Type: application/json

{
  "conversions": [
    {
      "conversion_time": "2024-06-01T12:34:56.000Z",
      "event_id": "tw-rcew3-xxxxx",
      // Optional.
      "event_source_url": "https://www.example.com/checkout",
      // Optional, used for deduplication with web pixel events.
      "conversion_id": "order-9f8b7c6d",
      // Provide at least one of: twclid, hashed_email, hashed_phone_number,
      // or the pair of ip_address and user_agent.
      "identifiers": [
        {
          "twclid": "twclid",
          "hashed_email": "64hexchars_sha256",
          "hashed_phone_number": "64hexchars_sha256",
          "ip_address": "192.0.2.1",
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)"
        }
      ]
    }
  ]
}
