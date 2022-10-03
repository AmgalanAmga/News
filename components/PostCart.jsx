
import Link from "next/link";
import Image from "next/image";
import { Box, Typography, Avatar, Divider, Stack } from "@mui/material";

export const PostCart = ({ post }) => {
  return (
    <Box
      sx={{
        boxShadow: 5,
        width: "100%",
        height: "320px",
        display: "flex",
        cursor: "pointer",
        overflow: "hidden",
        borderRadius: "25px",
        flexDirection: "column",
        justifyContent: "space-between",
        "&:hover": {
          transform: "scale(1.05)",
        },
        transition: "0.3s ease-in-out",
      }}
    >
      <Link href={`/blog/${post.id}`}>
        <Image
          width={370}
          height={200}
          alt="postImage"
          src={post.image}
          objectFit={"fill"}
        />
      </Link>
      <Box sx={{ p: 2 }}>
        <Typography
          variant="p"
          sx={{ fontSize: 18, textTransform: "capitalize", color: "#25313C" }}
        >
          {post.text}
        </Typography>
        <Stack direction={"row"}>
          <Stack direction={"row"} alignItems="center" spacing={2}>
            <Avatar src={post.owner.picture} />
            <Typography>
              {post.owner.firstName} {post.owner.lastName}
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Typography>
              {new Date(post.publishDate.slice(0, 10)).toLocaleDateString(
                "en-US",
                {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }
              )}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
