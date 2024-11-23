import type Candidate from '../interfaces/Candidate.interface';

export const removeFromStorage = (
    login: string | undefined,
    setPotentialCandidates: React.Dispatch<React.SetStateAction<Candidate[]>>
  ) => {

    //! remove from storage part
    let parsedCandidates: Candidate[] = [];

    const storedCandiates = localStorage.getItem('potentialCandidates');
    if (typeof storedCandiates === 'string') {
      parsedCandidates = JSON.parse(storedCandiates);
    }
    parsedCandidates = parsedCandidates.filter(
      (Candidate) => Candidate.login !== login
    );
    // setPotentialCandidates(parsedCandidates);
    localStorage.setItem('potentialCandidates', JSON.stringify(parsedCandidates));

    setPotentialCandidates(parsedCandidates);
  }