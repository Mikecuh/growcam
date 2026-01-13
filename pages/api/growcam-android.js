export default function handler(req, res) {
  const text = `
91.134.85.13 growtopia1.com
91.134.85.13 growtopia2.com
91.134.85.13 www.growtopia1.com
91.134.85.13 www.growtopia2.com
`.trim();

  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.status(200).send(text);
}

