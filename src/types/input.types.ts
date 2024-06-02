import { ComponentProps } from "react";

export interface InputProps extends ComponentProps<"input"> {
  label: string;
  error?: string;
}
