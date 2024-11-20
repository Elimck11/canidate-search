import type Candidate from '../interfaces/Candidate.interface';
import CandidateTable from '../components/CandidateTable';

interface potentialCandidates {
  potentialCandidates: Candidate[],
  setPotentialCandidates: React.Dispatch<React.SetStateAction<Candidate[]>>;
}
// const SavedCandidatesTable = () => {
const SavedCandidatesTable = (props:potentialCandidates) => {

  return (
    <>
        {props.potentialCandidates.map((candidate) => (
        <CandidateTable
            key={candidate.login}
            potentialCandidate={candidate}
            setPotentialCandidates={props.setPotentialCandidates}
        />
        ))}
    </>
  );
};

export default SavedCandidatesTable;