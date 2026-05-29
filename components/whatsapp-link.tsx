import type { ComponentProps, ReactNode } from "react";
import { whatsappUrl } from "@/lib/constants";

type Props = Omit<ComponentProps<"a">, "href"> & {
  message?: string;
  children: ReactNode;
};

export function WhatsappLink({ message, children, ...rest }: Props) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      {children}
    </a>
  );
}
