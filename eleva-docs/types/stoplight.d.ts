declare module "@stoplight/elements" {
  import { ComponentType } from "react";

  export interface APIProps {
    apiDescriptionDocument: string;
    router?: string;
    layout?: string;
    basePath?: string;
  }

  export const API: ComponentType<APIProps>;
}
