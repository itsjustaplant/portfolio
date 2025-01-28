import { useEffect, useState } from "react";

const API_URL = "https://likes.justaplant.dev/?slug={}";
const headers = {
  "Content-Type": "application/json",
};

interface IProps {
  slug: string;
}

const LikeButton = (props: IProps) => {
  const { slug } = props;
  const [count, setCount] = useState(0);
  const [isClientLiked, setIsClientLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  async function apiCall(method: string) {
    try {
      const response = await fetch(API_URL.replace("{}", slug), {
        headers,
        method,
      });
      const { count = 0, isClientLiked = false } = await response.json();
      setCount(count);
      setIsClientLiked(isClientLiked);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    apiCall("GET");
  }, []);

  return (
    <div className="ml-auo flex gap-1.5 text-primary rounded-md">
      {isLoading ? (
        <svg
          className="animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#ffffff"
          viewBox="0 0 256 256"
        >
          <path d="M230,128a102,102,0,0,1-204,0c0-40.18,23.35-76.86,59.5-93.45a6,6,0,0,1,5,10.9C58.61,60.09,38,92.49,38,128a90,90,0,0,0,180,0c0-35.51-20.61-67.91-52.5-82.55a6,6,0,0,1,5-10.9C206.65,51.14,230,87.82,230,128Z"></path>
        </svg>
      ) : (
        <>
          <svg
            className="cursor-pointer"
            style={{ animationIterationCount: 1 }}
            onClick={() => {
              apiCall("POST");
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill={isClientLiked ? "#D81159" : "white"}
            viewBox="0 0 256 256"
          >
            <path d="M240,102c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,228.66,16,172,16,102A62.07,62.07,0,0,1,78,40c20.65,0,38.73,8.88,50,23.89C139.27,48.88,157.35,40,178,40A62.07,62.07,0,0,1,240,102Z"></path>
          </svg>
          {count}
        </>
      )}
    </div>
  );
};

export default LikeButton;
