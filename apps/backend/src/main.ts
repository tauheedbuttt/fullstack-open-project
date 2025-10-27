import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";
import { VercelRequest, VercelResponse } from "@vercel/node";
import { Logger, ValidationPipe } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { HttpExceptionFilter } from "./filters/exception.filter";

let cachedApp: any;
const isVercel = !!process.env.VERCEL_ENV;
const isDevelopment = process.env.NODE_ENV === "development";

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // no express passed
  app.enableCors({ origin: "*" });
  app.setGlobalPrefix("api");
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
  if (!isVercel) {
    const PORT = process.env.PORT || 3000;
    if (isDevelopment) {
      const config = new DocumentBuilder()
        .setTitle("Cats example")
        .setDescription("The cats API description")
        .setVersion("1.0")
        .build();
      const documentFactory = () => SwaggerModule.createDocument(app, config);
      SwaggerModule.setup("docs", app, documentFactory);
      SwaggerModule.setup("docs.json", app, documentFactory, {
        swaggerOptions: { docExpansion: "none" },
      });
    }

    await app.listen(PORT);
    Logger.log(`Starting server on http://localhost:${PORT}`);
    Logger.log(`Swagger on http://localhost:${PORT}/docs`);
  } else {
    await app.init();
    return app.getHttpAdapter().getInstance(); // get internal express instance
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!cachedApp) {
    cachedApp = await bootstrap();
  }
  cachedApp(req, res);
}

if (!isVercel) bootstrap();
