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
        const url = 'http://localhost:5000/post/getBookmarkedPost'
        getFunction(url,setBookmarks)
    },[])


    return (
        <>
            <Header />
            <div className="md:flex w-full">
                <PostSidebar />
        
                <div className='md:w-4/5 mt-12 md:mt-0'>
                    
                    {
                        bookmarks.map(b=><BookmarkPost bookmark={b} key={b} />)
                    }
                    
                </div>
            </div>
        </>
    );
}

export default Bookmarks;
