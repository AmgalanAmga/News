import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataContext";
import {
  Box,
  Stack,
  Avatar,
  Divider,
  TextField,
  Typography,
} from "@mui/material";

const postDetail = () => {
  const router = useRouter();
  const id = router.query.postDetail;
  const { res } = useContext(DataContext);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [commentResult, setCommentResult] = useState("");
  const [commentClicked, setCommentClicked] = useState(false);
  const filteredPost = res.filter((post) => post.id === id)[0];
  const commendBtnHandler = (e) => {
    setCommentClicked(!commentClicked);
  };
  const postComment = async () => {
    const response = await axios.post(
      "https://dummyapi.io/data/v1/comment/create",
      {
        owner: filteredPost.owner.id,
        post: id,
        message: comment,
        publishDate: new Date(),
      },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "app-id": "633533f8f02614e5a07f8857",
        },
      }
    );
  };
  const getCommentResult = async () => {
    const response = await axios.get(
      `https://dummyapi.io/data/v1/post/${id}/comment`,
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "app-id": "633533f8f02614e5a07f8857",
        },
      }
    );
    setComments(response.data.data);
  };
  useEffect(() => {
    getCommentResult();
  }, [id]);
  const enterHandler = async (e) => {
    if (e.keyCode === 13) {
      postComment();
    }
  };
  return (
    <Box
      sx={{
        mt: 15,
        mx: "auto",
        boxShadow: 5,
        width: "50%",
        display: "flex",
        cursor: "pointer",
        overflow: "hidden",
        borderRadius: "25px",
        flexDirection: "column",
        transition: "0.3s ease-in-out",
        justifyContent: "space-between",
      }}
    >
      <Image
        width={370}
        height={500}
        alt="postImage"
        objectFit={"fill"}
        src={filteredPost?.image}
      />
      <Box sx={{ p: 2 }}>
        <Typography
          variant="p"
          sx={{ fontSize: 18, textTransform: "capitalize", color: "#25313C" }}
        >
          {filteredPost?.text}
        </Typography>
        <Stack direction={"row"}>
          <Stack direction={"row"} alignItems="center" spacing={2}>
            <Avatar src={filteredPost?.owner.picture} />
            <Typography>
              {filteredPost?.owner.firstName} {filteredPost?.owner.lastName}
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Typography>
              {new Date(
                filteredPost?.publishDate.slice(0, 10)
              ).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </Typography>
            <Typography
              variant="span"
              onClick={commendBtnHandler}
              sx={{ cursor: "pointer" }}
            >
              Comments
            </Typography>
          </Stack>
        </Stack>
        {commentClicked && (
          <>
            <TextField
              type={"text"}
              sx={{ width: "500px", mt: 1 }}
              placeholder="What is your mind?"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              onKeyUp={enterHandler}
            />
            {comments.length > 0 && (
              <Stack
                direction={"column"}
                mt={1}
                sx={{ height: 150, width: "500px", overflowY: "scroll" }}
              >
                {comments?.map((el, id) => (
                  <Typography
                    sx={{ background: "#c1c1c1", mb: 1, py: 1, px: 4 }}
                    key={id}
                  >
                    {el.message}
                  </Typography>
                ))}
              </Stack>
            )}
          </>
        )}
      </Box>
    </Box>
  );
};

export default postDetail;
