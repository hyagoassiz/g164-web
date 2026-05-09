"use client";

import Link from "next/link";
import { Container, Typography, Box } from "@mui/material";
import { ProductList, Produto } from "@/components/ProductList";

const produtos: Produto[] = [
  {
    nome: "Hot Wheels Premium - '88 Honda CRX",
    imagem: "https://m.media-amazon.com/images/I/91RgZkZJ65L.jpg",
    links: [
      { label: "Amazon", url: "https://amzn.to/4tU6Hoz" },
      { label: "Mercado Livre", url: "https://meli.la/22hoAiX" },
      { label: "Shopee", url: "https://s.shopee.com.br/7ppwg3KMM5" },
    ],
  },
  {
    nome: "1994 Honda Del Sol",
    imagem:
      "https://acdn-us.mitiendanube.com/stores/006/652/004/products/34953efbb580f18e0c8a3dfba738f869408ca651-f6a57c0b8fda86b00c17755310548683-480-0.webp",
    links: [
      { label: "Amazon", url: "https://amzn.to/3QWiO6x" },
      { label: "Mercado Livre", url: "https://meli.la/1cmb2hk" },
      { label: "Shopee", url: "https://s.shopee.com.br/8V5dU2i0CM" },
    ],
  },
  {
    nome: "1978 Dodge Li'L Red Express Truck",
    imagem:
      "https://acdn-us.mitiendanube.com/stores/006/652/004/products/683477c30cc5a209a8b85448b033bdc8b66e9d86-66d903e5d7114ee03c17693096019152-480-0.webp",
    links: [
      { label: "Amazon", url: "https://amzn.to/4u8DlDK" },
      { label: "Mercado Livre", url: "https://meli.la/1zc9Ai2" },
      {
        label: "Shopee",
        url: "https://s.shopee.com.br/3LNXKn4PbR",
      },
    ],
  },
  {
    nome: "Hot Wheels Premium - Mercedes-Bens 500 SEL",
    imagem:
      "https://acdn-us.mitiendanube.com/stores/006/652/004/products/6441fe397c800134c89de7644d0c73c9eeca66e7-1c0cd45a61639b166b17695655561988-480-0.webp",
    links: [
      { label: "Amazon", url: "https://amzn.to/4mLbcQf" },
      { label: "Mercado Livre", url: "https://meli.la/1h8Bf7T" },
      {
        label: "Shopee",
        url: "https://meli.la/1Cqu8z9 https://s.shopee.com.br/LjvkPg2qq",
      },
    ],
  },
  {
    nome: "Hot Wheels Premium - 2002 Pontiac Firebird",
    imagem:
      "https://acdn-us.mitiendanube.com/stores/006/652/004/products/533281ff7987f760730dc212f4e44981d7d95129-fc8e336e460a3e931f17693095900853-480-0.webp",
    links: [
      { label: "Amazon", url: "https://amzn.to/4dWWd3f" },
      { label: "Mercado Livre", url: "https://meli.la/1JWdBe8" },
      { label: "Shopee", url: "https://s.shopee.com.br/3LNXK1Nni8" },
    ],
  },
  {
    nome: "Hot Wheels Premium - '77 Toyota Celica",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_697923-MLB107570671554_032026-O.webp",
    links: [
      { label: "Amazon", url: "https://amzn.to/4mGwNcp" },
      { label: "Mercado Livre", url: "https://meli.la/2JYnSbR" },
      { label: "Shopee", url: "https://s.shopee.com.br/901u4YYfR7" },
    ],
  },
  {
    nome: "Hot Wheels Premium - Nissan Skyline 2000GT-R LBKW",
    imagem:
      "https://cdn.dsmcdn.com/ty1000324/product/media/images/prod/PIM/20260210/07/fafd48ea-b4b3-4d6f-b2c0-fa24d1964ed1/1_org_zoom.jpg",
    links: [
      { label: "Amazon", url: "https://amzn.to/4tZYhfB" },
      { label: "Mercado Livre", url: "https://meli.la/1Mj42M9" },
      { label: "Shopee", url: "https://s.shopee.com.br/6pxPUgDgps" },
    ],
  },
  {
    nome: "Hot Wheels Premium - 1993 Toyota 4Runner",
    imagem:
      "https://acdn-us.mitiendanube.com/stores/006/652/004/products/aae3b9b172c0fd2bca79d9a6bab9a2eeb4920b34-d88acfc65c97e34eb317693095764179-480-0.webp",
    links: [
      { label: "Amazon", url: "https://amzn.to/3ODZ1If" },
      { label: "Mercado Livre", url: "https://meli.la/2UvNxxR" },
      { label: "Shopee", url: "https://s.shopee.com.br/5ApBVjYBe8" },
    ],
  },
];

export default function Home() {
  return (
    <Box sx={{ minHeight: "100vh", background: "#f5f7fb", py: 2 }}>
      <Container maxWidth="xs">
        {/* HEADER */}
        <Box
          sx={{
            textAlign: "center",
            mb: 4,
            pt: 1,
          }}
        >
          <Link href="/">
            <Box
              component="img"
              src="/g164.png"
              alt="logo"
              sx={{
                width: 150,
                mb: 1.5,
                cursor: "pointer",
                transition: "0.2s",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            />
          </Link>

          <Typography
            sx={{
              fontWeight: 800,
              fontSize: 22,
              lineHeight: 1.2,
              color: "#111827",
              letterSpacing: "-0.5px",
            }}
          >
            Os melhores Hot Wheels Premium 🔥
          </Typography>

          <Typography
            sx={{
              fontSize: 14,
              color: "#6b7280",
              mt: 1,
              maxWidth: 280,
              mx: "auto",
              lineHeight: 1.5,
            }}
          >
            Compare preços entre lojas confiáveis e encontre as melhores ofertas
            👇
          </Typography>
        </Box>

        <ProductList produtos={produtos} />
      </Container>
    </Box>
  );
}
