// This is the library for building openapi documents

import { OpenAPIV3 } from "openapi-types";

export function createOpenApiDocument(): OpenAPIV3.Document {
  return {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
    },
    paths: {},
    servers: [
      {
        url: "http://localhost:3000",
        description: "Development server",
      },
      {
        url: "https://gymsense-api-production.up.railway.app/",
        description: "Production server",
      },
    ],
  };
}

export default class OpenApi {
  static document = createOpenApiDocument();

  static addRouteToOpenApiDocument(
    path: string,
    method: string,
    route: OpenAPIV3.OperationObject
  ) {
    console.log("Adding route to openapi document");
    const document = OpenApi.document;

    if (!document.paths[path]) {
      document.paths[path] = {} as OpenAPIV3.PathItemObject;
    }
    (
      document.paths[path] as OpenAPIV3.PathItemObject & {
        [key: string]: OpenAPIV3.OperationObject;
      }
    )[method] = route;

    OpenApi.document = document;
  }

  constructor() {
    throw new Error("This class cannot be instantiated");
  }

  static getDocument() {
    return this.document;
  }
}
