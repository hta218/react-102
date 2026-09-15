"use client";

import type { ReactNode } from "react";

import {
  elementAttributes,
  type WeaverseElementProps,
} from "@/sections/weaverse-element";

interface MainProps extends WeaverseElementProps {
  children?: ReactNode;
}

/**
 * The page root item.
 *
 * Replaces the SDK's default `main`, which spreads every prop it receives onto
 * its `<div>` — runtime-only values such as `dataContext` included — so React
 * warns about unknown DOM props. Here only the identity attributes Studio
 * needs, plus the class, reach the DOM.
 */
function Main({ children, className, ...rest }: MainProps) {
  return (
    <div {...elementAttributes(rest)} className={className}>
      {children}
    </div>
  );
}

export default Main;

export { schema } from "./schema";
