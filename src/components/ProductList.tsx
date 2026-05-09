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
            borderRadius: "24px",
            background: "#ffffff",
            border: "1px solid #edf0f5",
            overflow: "hidden",
            transition: "all 0.25s ease",
            boxShadow: "0 4px 20px rgba(15,23,42,0.05)",

            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0 12px 30px rgba(15,23,42,0.10)",
            },
          }}
        >
          <Box
            component="img"
            src={produto.imagem}
            alt={produto.nome}
            sx={{
              width: "100%",
              background: "linear-gradient(to bottom, #f8fafc, #eef2f7)",
              p: 2.5,
            }}
          />

          <Box sx={{ p: 2 }}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: 17,
                lineHeight: 1.4,
                color: "#111827",
                mb: 1.5,
              }}
            >
              {produto.nome}
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {produto.links.map((link) => {
                const isAmazon = link.label === "Amazon";
                const isMercadoLivre = link.label === "Mercado Livre";
                const isShopee = link.label === "Shopee";

                const getButtonConfig = () => {
                  if (isAmazon) {
                    return {
                      text: "Comprar na Amazon",
                      bgColor: "#FFF8ED",
                      textColor: "#FF9900",
                      borderColor: "#FF9900",
                      logo: "/amazon.png",
                    };
                  }
                  if (isMercadoLivre) {
                    return {
                      text: "Comprar no Mercado Livre",
                      bgColor: "#F4F8FF",
                      textColor: "#3483FA",
                      borderColor: "#3483FA",
                      logo: "/mercado.png",
                    };
                  }
                  if (isShopee) {
                    return {
                      text: "Comprar na Shopee",
                      bgColor: "#FFF4F1",
                      textColor: "#EE4D2D",
                      borderColor: "#EE4D2D",
                      logo: "/shopee.png",
                    };
                  }
                  return {
                    text: `Comprar em ${link.label}`,
                    bgColor: "#ffffff",
                    textColor: "#6b7280",
                    borderColor: "#d1d5db",
                    logo: null,
                  };
                };

                const config = getButtonConfig();

                return (
                  <Button
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    fullWidth
                    sx={{
                      background: config.bgColor,
                      color: config.textColor,
                      border: `1px solid ${config.borderColor}`,
                      borderRadius: "16px",
                      minHeight: 52,
                      textTransform: "none",
                      fontSize: 14,
                      py: 1.4,
                      px: 2,
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1.2,
                      transition: "all 0.2s ease",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",

                      "&:hover": {
                        background: config.bgColor,
                        transform: "translateY(-2px)",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                        borderColor: config.textColor,
                      },
                    }}
                  >
                    {config.logo && (
                      <Box
                        component="img"
                        src={config.logo}
                        alt={`${link.label} logo`}
                        sx={{
                          width: 25,
                          height: 25,
                          objectFit: "contain",
                        }}
                      />
                    )}

                    {config.text}
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
