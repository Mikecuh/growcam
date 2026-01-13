export default function handler(req, res) {
  const text = `
[General]
bypass-system = true

[Rule]
FINAL,DIRECT

[Host]
growtopia1.com = 91.134.85.13
growtopia2.com = 91.134.85.13
www.growtopia1.com = 91.134.85.13
www.growtopia2.com = 91.134.85.13
`.trim();

  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.status(200).send(text);
}
