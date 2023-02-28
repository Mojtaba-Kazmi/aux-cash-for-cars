import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
} from "next-share";

function Sharing() {
  return (
    <div>
      <FacebookShareButton
        url={"http://localhost:3000/blog/post1"}
        quote={"next-share is a social share buttons for your next React apps."}
        hashtag={"#nextshare"}
        image={postImage}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <PinterestShareButton url={"http://localhost:3000/blog/post1"}>
        <PinterestIcon size={32} round />
      </PinterestShareButton>

      <TwitterShareButton
        url={"http://localhost:3000/blog/post1"}
        hashtag={"#nextshare"}
        text="somthing"
        image={postImage}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <WhatsappShareButton url={"http://localhost:3000/blog/post1"}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
}

export default Sharing;
