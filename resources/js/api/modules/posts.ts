// import { api } from '@/api';
// import { Post } from '@/types/api'
// import { PostController } from '../controllers'

export function usePostsClient() {
  // const { index } = PostController

  const getPosts = async () => {
    // const response = await api.call<Post>(index());
    // return response.data;
  };

  return {
    getPosts,
  };
}
