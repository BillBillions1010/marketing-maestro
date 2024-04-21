import { Router } from "express"

export default () => {
  const router = Router()

  router.get("/hello-product", async (req, res) => {
    const myService = req.scope.resolve("myCustomService")

    res.json({
      message: await myService.getProductMessage()
    })
  })

  return router;
}