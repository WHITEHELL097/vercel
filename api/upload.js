import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false
  }
};

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const form = formidable({
    uploadDir: "/tmp",
    keepExtensions: true
  });

  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: "Upload failed" });
    }

    const file = files.file;

    res.status(200).json({
      status: "uploaded",
      filename: file?.[0]?.newFilename || "unknown"
    });
  });
}
