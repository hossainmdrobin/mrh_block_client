import Head from 'next/head'
import { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import ProfileBody from '../components/ProfileMian/Partitions/ProfileBody'
import ProfileHeader from '../components/ProfileMian/Partitions/ProfileHeader'
import {useRouter } from 'next/router'

export default function Home() {
  const [profileDetail, setProfileDetail] = useState({})
  const router = useRouter()
  useEffect(() => {
    const token = localStorage.getItem('token')
    if(!token){
      router.push('/auth/login')
    }
    fetch('https://mrhblog.herokuapp.com/profile',{
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    })
      .then(res => res.json())
      .then(data => setProfileDetail(data))
      .catch(err => console.log(err))

  }, []);
  return (
    <div>
      <Head>
        <title>MRH BLOG</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ProfileHeader profileDetail={profileDetail} />
      <ProfileBody profileDetail={profileDetail} />
    </div>
  )
}
