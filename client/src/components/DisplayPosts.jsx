import { useNavigate } from 'react-router-dom';
import PostCard from "../components/PostCard"

const DisplayPosts = ({posts}) => {

    const navigate = useNavigate();
  return (
    <div>
        <h1 className="font-epilogue font-semibold text-[18px] text-white text-center">({posts.length})</h1>
        <div className="mt-[20px] gap-[20px]">
            {posts.length === 0 && (
                <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
                    You have not created any posts yet
                </p>
            )}

            {posts.length > 0 && posts.map((post) => <PostCard
                key={post.id}
                {...post}
            />)}
        </div>
    </div>
  )
}

export default DisplayPosts