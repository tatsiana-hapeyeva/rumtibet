import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

type UserAvatarProps = {
  alt: string;
  src: string;
};

export default function UserAvatar({ alt, src }: UserAvatarProps) {
  return (
    <Stack spacing={2} sx={{ alignItems: "center" }}>
      <Avatar
        alt={alt}
        src={src}
        sx={{
          width: 200,
          height: 200,
          "& img": {
            objectFit: "cover",
            objectPosition: "center top",
          },
        }}
      />
      <Link href="/profile/edit">Изменить фото</Link>
    </Stack>
  );
}
