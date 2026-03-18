export default function handler(req, res) {
  const q = req.query.q || "";

  console.log("Incoming:", q);

  res.status(200).json({
    received: q
  });
}
