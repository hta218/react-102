import type { WeaverseNextComponent } from "@weaverse/next";

import type { Product } from "@/lib/storefront/types";
import { resolveProduct } from "@/lib/weaverse/resource";

type LoaderArgs = Parameters<NonNullable<WeaverseNextComponent["loader"]>>[0];

export interface HeroSlideLoaderData {
  featuredProduct: Product | null;
}

/** Resolves the slide's optional featured product badge. */
export async function loader({
  data,
}: LoaderArgs): Promise<HeroSlideLoaderData> {
  const selection = (data as { featuredProduct?: unknown } | undefined)
    ?.featuredProduct;
  return { featuredProduct: await resolveProduct(selection) };
}
