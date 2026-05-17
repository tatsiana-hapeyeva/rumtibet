import { useQuery } from "@tanstack/react-query";
import PostCard from "../components/blog-card.js";
import axios from "axios";
import { API_URL } from "../shared/config/baseUrl.js";
import Button from "../components/button.js";
import { SectionContainer } from "../components/sectionContainer";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

type Post = {
  id: number;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
};

export function Blog() {
  const {
    data: posts = [],
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await axios.get<Post[]>(`${API_URL}/posts`);
      return data.slice(0, 4);
    },
  });

  if (isPending) return null;
  if (isError) {
    console.error(error);
    return null;
  }

  return (
    <div className="blog__container">
      <SectionContainer>
        <div className="blog__content">
          <Typography variant="h2" component="h2">
            делимся впечатлениями
          </Typography>
          <Typography variant="h1" component="h2">
            Блог о путешествиях
          </Typography>
        </div>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            columnGap: "20px",
            rowGap: "24px",
            mt: "40px",
            mb: "50px",
          }}
        >
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button>Другие материалы</Button>
        </Box>
      </SectionContainer>
    </div>
  );
}
