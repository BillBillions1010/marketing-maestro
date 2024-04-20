import {
    ProductService,
    ScheduledJobArgs,
    ScheduledJobConfig,
  } from "@medusajs/medusa";
  
  export default async function myCustomJob({ container }: ScheduledJobArgs) {
    const productService: ProductService = container.resolve("productService");
  
    const products = await productService.listAndCount();
  
    // Do something with the products
  }
  
  export const config: ScheduledJobConfig = {
    name: "daily-product-report",
    schedule: "0 0 * * *", // Every day at midnight
  };
  