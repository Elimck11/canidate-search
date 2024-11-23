import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';

import type Candidate from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';

const CandidateSearch = () => {
  //! the function part of the page
  //! ==========================================

  // Add Candidate interface to interface to state variable and set intial state obj
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    avatar_url: '',
    login: '',
    name:'',
    location: '',
    email: '',
    company: '',
    bio: '',
  });

  //* Function for adding Candidate to potential candidate list
  const addToPotential = () => {
    let parsedCandidates:Candidate[] = [];
    const storedCandiates = localStorage.getItem('potentialCandidates');
    if (typeof storedCandiates === 'string') {
      parsedCandidates = JSON.parse(storedCandiates);
    }
    parsedCandidates.push(currentCandidate);
    localStorage.setItem('potentialCandidates', JSON.stringify(parsedCandidates));
    fetchCandidates();
  }

  const fetchCandidates = async () => {
    try {
        const data: Candidate[] = await searchGithub(); // Call the searchGithub function
        
        const userData: Candidate = await searchGithubUser(data[0].login);

        setCurrentCandidate(userData); // Update the state with the fetched candidates
    } catch (err) {
        setError('An error occurred while fetching candidates');
    } finally {
        setLoading(false); // Set loading to false after the fetch is complete
    }
};

  useEffect(() => {
    console.log('fetch candidates')
    fetchCandidates(); // Invoke the fetch function
  }, []); // Empty dependency array means this effect runs once on mount

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  //! ==========================================
  //! the html part of the page
  return (
    <>
      <h1>CandidateSearch</h1>
      <CandidateCard
        currentCandidate={currentCandidate}
      />
      <div className="profile-card__actions">
        <button className="btn btn--red" onClick={() => fetchCandidates()}>
            <span className="btn__icon">-</span>
        </button>
        <button className="btn btn--green" onClick={() => addToPotential()}>
            <span className="btn__icon">+</span>
        </button>
      </div>
      
      {console.log(`Current Candidate: ${currentCandidate}`)}
      {console.log(currentCandidate)}
    </>
  )
};

export default CandidateSearch;