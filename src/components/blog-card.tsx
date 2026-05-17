import { Box, Card, CardMedia, Link, Typography } from "@mui/material";

type Post = {
  id: number;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
};

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <Card
      elevation={0}
      sx={{
        p: 2,
        borderRadius: "6px",
        "&:hover": {
          boxShadow: "0 0 15px #18121E1F",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "24px",
        }}
      >
        <Box sx={{ flex: 2, aspectRatio: "230 / 280" }}>
          <CardMedia
            component="img"
            image={post.imageUrl}
            alt={post.title}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "6px",
            }}
          />
        </Box>

        <Box
          sx={{
            flex: 3,
            py: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h5" component="h5" sx={{ mb: "24px" }}>
            {post.title}
          </Typography>
          <Typography variant="body2">{post.description}</Typography>

          <Box
            sx={{
              mt: "auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{ fontSize: "14px", fontWeight: 700 }}
            >
              {post.date}
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 700 }}>
              <Link href="#" sx={{ color: "var(--color-text)" }}>
                Читать статью
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
