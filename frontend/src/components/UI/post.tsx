import { useState, useRef } from "react";
import testUserImage from "../../assets/testUserImage.jpg";
import testPostImage from "../../assets/testPostImage.jpg";
import useClickOutside from "../../hooks/useClickOutside";
import {
  MapPinIcon,
  DotIcon,
  EllipsisIcon,
  HeartIcon,
  MessageCircleIcon,
  SendIcon,
  BookmarkIcon,
  MinusIcon,
} from "lucide-react";
import PostOptions from "./PostComponents/PostOptions";
import ShareOptions from "./PostComponents/ShareOptions";

interface PostProps {
  PostID: string;
}
export default function Post(props: PostProps) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookMarked] = useState(false);
  const [showPostOptions, setShowPostOptions] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, () => {
    showPostOptions && setShowPostOptions(false);
  });
  const shareRef = useRef(null);
  useClickOutside(shareRef, () => {
    showShareOptions && setShowShareOptions(false);
  });

  return (
    <div className="post flex flex-col gap-3" id={props.PostID}>
      <div className="author w-full justify-between flex gap-5">
        <div className="flex gap-2">
          <img
            className="w-10 h-10 rounded-full"
            src={testUserImage}
            alt="user-profile-photo"
          />
          <div className="info flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <span className="post-author font-bold">pixshanghai</span>
              <time className="flex items-center">
                <DotIcon />
                <span className="text-text-light">10h</span>
              </time>
            </div>
            <address className="flex items-center gap-1.5">
              <MapPinIcon width={20} height={20} />
              <span className="text-sm">lechería</span>
            </address>
          </div>
        </div>
        <div className="relative" ref={dropdownRef}>
          <button
            className="group"
            onClick={() => setShowPostOptions((prev) => !prev)}
          >
            <EllipsisIcon
              className="transition duration-150 ease-in-out hover:text-accent-secondary"
              width={20}
              height={20}
            />
          </button>
          {showPostOptions && <PostOptions />}
        </div>
      </div>
      <img
        className="w-full h-96 object-cover rounded-md"
        src={testPostImage}
        alt="post-content"
      />
      <div className="interact flex gap-4">
        <button className="like" onClick={() => setLiked((prev) => !prev)}>
          <HeartIcon
            className="transition duration-150 ease-in-out hover:text-accent-secondary"
            width={28}
            height={28}
            strokeWidth={liked ? 0 : undefined}
            fill={liked ? "oklch(63.7% 0.237 25.331)" : "none"}
          />
        </button>
        <button className="comment">
          <MessageCircleIcon
            className="transition duration-150 ease-in-out hover:text-accent-secondary"
            width={28}
            height={28}
          />
        </button>
        <div className="flex items-center relative" ref={shareRef}>
          <button
            className="share"
            onClick={() => setShowShareOptions((prev) => !prev)}
          >
            <SendIcon
              className="transition duration-150 ease-in-out hover:text-accent-secondary"
              width={28}
              height={28}
            />
          </button>
          {showShareOptions && <ShareOptions />}
        </div>
        <button
          className="bookmark"
          onClick={() => setBookMarked((prev) => !prev)}
        >
          <BookmarkIcon
            className="transition duration-150 ease-in-out hover:text-accent-secondary"
            width={28}
            height={28}
            strokeWidth={bookmarked ? 0 : undefined}
            fill={bookmarked ? "oklch(76.9% 0.188 70.08)" : "none"}
          />
        </button>
      </div>
      <p className="text-[0.96rem]">
        <span className="post-author font-bold">pixshanghai:</span> going back
        to the phase where cows are in my head.
      </p>

      <p className="pl-2 text-[0.96rem] flex gap-0.5">
        <MinusIcon />
        <span className="post-author font-bold">simonbolivar:</span> me fr dude
      </p>
      <span className="text-sm text-text-light">view all comments</span>
    </div>
  );
}
