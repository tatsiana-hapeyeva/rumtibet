import { Box, Card, CardMedia, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export type TourCardProps = {
  image: string;
  rating: number;
  title: string;
  subtitle: string;
  price: number;
  currency?: string;
};

export function TourCard({
  image,
  rating,
  title,
  subtitle,
  price,
  currency = "$",
}: TourCardProps) {
  return (
    <Card
      sx={{
        width: "380px",
        aspectRatio: "380 / 500",
        borderRadius: "32px",
        overflow: "hidden",
      }}
    >
      <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{ width: "100%", height: "100%" }}
        />

        <Box
          sx={{
            position: "absolute",
            top: 50,
            right: 0,
            display: "flex",
            alignItems: "center",
            gap: "10px",
            borderTopLeftRadius: "4px",
            borderBottomLeftRadius: "4px",
            p: "4px 8px",
            background: "#FDFDFD66",
            backdropFilter: "blur(4px)",
          }}
        >
          <StarIcon sx={{ fontSize: 24, color: "#F2BE22" }} />
          <Typography variant="body2" sx={{ fontWeight: 700 }}>
            {rating}
          </Typography>
        </Box>

        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#FFFFFF33",
            backdropFilter: "blur(6px)",
          }}
        >
          <Box
            sx={{
              pt: "20px",
              pb: "20px",
              pl: "30px",
              textAlign: "left",
            }}
          >
            <Typography variant="h4">{title}</Typography>
            <Typography variant="body2" sx={{ color: "#FDFDFD" }}>
              {subtitle}
            </Typography>
          </Box>

          <Box
            sx={{
              mr: "30px",
              p: "8px 16px",
              borderRadius: "4px",
              background: "#FFFFFF4D",
              width: "fit-content",
            }}
          >
            <Typography variant="h4">
              {price} {currency}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
