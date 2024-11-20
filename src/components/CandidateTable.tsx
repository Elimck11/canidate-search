import type Candidate from '../interfaces/Candidate.interface';
import { removeFromStorage } from '../util/removeFromStorage';
// import { IoEyeOutline } from 'react-icons/io5';
// import { ImCross } from 'react-icons/im';
// import { CgPlayListAdd } from 'react-icons/cg';

type CandidateCardProp = {
    addToPotential?: (() => void) | null;
    potentialCandidate?:Candidate,
    onPotentialCandidates?: boolean | null;
    setPotentialCandidates: React.Dispatch<React.SetStateAction<Candidate[]>>;
};

const CandidateTable = (prop:CandidateCardProp) => {
    return (
        <>
        <tr>
            <td>
                <img src={prop.potentialCandidate?.avatar_url} alt={`${prop.potentialCandidate?.login}'s profile`} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
            </td>
            <td>
                <div>{prop.potentialCandidate?.name}</div>
                <div style={{ fontStyle: 'italic' }}>({prop.potentialCandidate?.login})</div>
            </td>
            <td>{prop.potentialCandidate?.location}</td>
            <td><a href={`mailto:${prop.potentialCandidate?.email}`}>{prop.potentialCandidate?.email}</a></td>
            <td>{prop.potentialCandidate?.company}</td>
            <td>{prop.potentialCandidate?.bio}</td>
            <td>
            <button
             onClick={() => removeFromStorage(prop.potentialCandidate?.login, prop.setPotentialCandidates)}
             style={{ backgroundColor: 'red', color: 'white', borderRadius: '50%', border: 'none', width: '30px', height: '30px' }}>
                &minus;
            </button>
            </td>
        </tr>
        </>
    );
}

export default CandidateTable;