import type { MedusaRequest, MedusaResponse } from "@medusajs/medusa";

export async function GET(
  req: MedusaRequest,
  res: MedusaResponse
): Promise<void> {
  res.sendStatus(200);
  res.json({
    message: "Hello world!",
  });
}
