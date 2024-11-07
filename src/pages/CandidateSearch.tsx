import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';

const CandidateSearch = () => {

  interface Candidate {
    username: string,
    avatar: string,
    location: string,
    email: string,
    company: string,
    bio: string
  }


  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    username: "",
    avatar:"",
    location: "",
    email: "",
    company: "",
    bio: ""
  })

  const [candidates, setCandidates] = useState([]);


  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(function() {

    async function getData() {
      const myArray = await searchGithub();
      setCandidates(myArray);

      const firstCandidate = myArray[0];

      // console.log(firstCandidate)

      const userData = await searchGithubUser(firstCandidate.login)

      console.log(userData)

      setCurrentCandidate({
        username: userData.login,
        avatar: userData.avatar_url,
        location: userData.location,
        email: userData.email,
        company: userData.company,
        bio: userData.bio
      })

    }


    getData();

  }, [])



  useEffect(function() {
    
    async function getData() {
      const nextOne: any = candidates[currentIndex];

      const userData = await searchGithubUser(nextOne.login);

      setCurrentCandidate({
        username: userData.login,
        avatar: userData.avatar_url,
        location: userData.location,
        email: userData.email,
        company: userData.company,
        bio: userData.bio
      });
    }

    getData();

  }, [currentIndex])



  function nextCandidate() {
    setCurrentIndex(currentIndex + 1);
  }


  return (
    <>
      <h1>Candidate Search</h1>
 

      <div className="card">
          <img className="card-image" src={currentCandidate.avatar}/>

          <h3>{currentCandidate.username}</h3>

          <p>Location: {currentCandidate.location || "No location provided"}</p>
          <p>Email: {currentCandidate.email || "No email provided"}</p>
          <p>Company: {currentCandidate.company || "No company provided"}</p>
          <p>Bio: {currentCandidate.bio || "No bio provided"}</p>

      </div>
      
      
      <div className="button-container">
        <button onClick={nextCandidate}>Minus</button>
        <button>Plus</button>
      </div>
    
    </>
  )
};

export default CandidateSearch;
