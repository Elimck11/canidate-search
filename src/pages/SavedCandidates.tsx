import { useState, useEffect } from 'react';

import type Candidate from '../interfaces/Candidate.interface';
import SavedCandidateTables from '../components/SavedCandidateTable';


const SavedCandidates = () => {
  //! Candidate interface to state variable
  const [potentialCandidates, setPotentialCandidates] = useState<Candidate[]>([]);

  //! function part of the page
  //! ================================================

  // const removeFromStorage = (
  //   e: React.MouseEvent<SVGAElement, MouseEvent>,
  //   login: string
  // ) => {
  //   e.preventDefault();

  //   //! remove from storage part
  //   let parsedCandidates: Candidate[] = [];

  //   const storedCandiates = localStorage.getItem('potentialCandidates');
  //   if (typeof storedCandiates === 'string') {
  //     parsedCandidates = JSON.parse(storedCandiates);
  //   }
  //   parsedCandidates = parsedCandidates.filter(
  //     (film) => film.login !== login
  //   );
  //   setPotentialCandidates(parsedCandidates);
  //   localStorage.setItem('potentialCandidates', JSON.stringify(parsedCandidates));
  // }


  useEffect(() => {
    const storedCandidates = localStorage.getItem('potentialCandidates');
    console.log(storedCandidates);
    if (storedCandidates) {
      const parsedCandidates = JSON.parse(storedCandidates);
      setPotentialCandidates(parsedCandidates);
    } else {
      setPotentialCandidates([]);
    }
  }, []);

  //! ================================================
  //! Look of the page
  return (
    <>
      <h1>Potential Candidates</h1>
      <table className={"table"}>
        <thead>
          <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Location</th>
          <th>Email</th>
          <th>Company</th>
          <th>Bio</th>
          <th>Reject</th>
          </tr>
        </thead>
        <tbody>
          <SavedCandidateTables
            potentialCandidates={potentialCandidates}
            setPotentialCandidates={setPotentialCandidates}
          />
        </tbody>
      </table>
    </>
  );
};

export default SavedCandidates;

