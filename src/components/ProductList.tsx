"use client";

import { Card, Button, Box, Typography } from "@mui/material";

export type ProdutoLink = {
  label: string;
  url: string;
};

export type Produto = {
  nome: string;
  imagem: string;
  links: ProdutoLink[];
};

type ProductListProps = {
  produtos: Produto[];
};

export function ProductList({ produtos }: ProductListProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {produtos.map((produto) => (
        <Card
          key={produto.nome}
          sx={{
            borderRadius: 3,
            background: "#ffffff",
            border: "1px solid #e5e7eb",
            overflow: "hidden",
            transition: "0.2s",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            "&:hover": {
              transform: "scale(1.02)",
            },
          }}
        >
          <Box
            component="img"
            src={produto.imagem}
            alt={produto.nome}
            sx={{
              width: "100%",
              background: "#f9fafb",
              p: 2,
            }}
          />

          <Box sx={{ p: 2 }}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: 16,
                color: "#111827",
                mb: 1.5,
              }}
            >
              {produto.nome}
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {produto.links.map((link) => {
                const isAmazon = link.label === "Amazon";

                return (
                  <Button
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    fullWidth
                    sx={{
                      background: isAmazon ? "#FF9900" : "#3483FA",
                      color: "#fff",
                      borderRadius: 2,
                      textTransform: "none",
                      fontSize: 13,
                      py: 1.2,
                      fontWeight: 600,
                      "&:hover": {
                        opacity: 0.9,
                      },
                    }}
                  >
                    {isAmazon
                      ? "Comprar na Amazon"
                      : "Comprar no Mercado Livre"}
                  </Button>
                );
              })}
            </Box>
          </Box>
        </Card>
      ))}
    </Box>
  );
}
