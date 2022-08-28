import React,{useEffect,useState} from 'react';
import BookmarkPost from '../../components/bookmarkedPosts/bookmarkPost';
import CreatePost from '../../components/CreatePost/CreatePost';
import FriendList from '../../components/FriendList/FriendList';
import Header from '../../components/Header/Header';
import PostSidebar from '../../components/PostSidebar/PostSidebar';
import getFunction from '../../functions/getFunction';

const Bookmarks = () => {
    const [bookmarks, setBookmarks] = useState([])
    useEffect(()=>{
        const url = 'https://mrhblog.herokuapp.com/post/getBookmarkedPost'
        getFunction(url,setBookmarks)
    },[bookmarks])


    return (
        <>
            <Header />
            <div className="md:flex w-full">
                <PostSidebar />
        
                <div className='md:w-4/5 mt-12 md:mt-0'>
                    
                    {
                        bookmarks.map((b,i)=><BookmarkPost bookmark={b} key={i} />)
                    }
                    
                </div>
            </div>
        </>
    );
}

export default Bookmarks;
