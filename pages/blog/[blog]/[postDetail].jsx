import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataContext";

const postDetail = () => {
  const [postDetail, setPostDetail] = useState();
  const { res } = useContext(DataContext);
  const router = useRouter();
  const id = router.query.postDetail;
  useEffect(() => {
    if (id) {
      res.forEach((post) => {
        console.log(post);
        if (post.id === id) return setPostDetail(post);
      });
    }
  }, [id]);
  return <div>{id}</div>;
};

export default postDetail;
