import type React from 'react';
import type Candidate from '../interfaces/Candidate.interface';
// import { IoEyeOutline } from 'react-icons/io5';
// import { ImCross } from 'react-icons/im';
// import { CgPlayListAdd } from 'react-icons/cg';

type CandidateCardProp = {
    addToPotential?: (() => void) | null;
    currentCandidate?:Candidate,
    onPotentialCandidates?: boolean | null,
    removeFromStorage?: 
  ((
    e: React.MouseEvent<SVGAElement, MouseEvent>,
    currentlyOnPotentialCandidates: boolean | null | undefined,
    login: string | null
  ) => void) | null;
};

const CandidateCard = (prop:CandidateCardProp) => {
// const CandidateCard = () => {
    return (
        <div className="profile-card">
            <div className="profile-card__image">
                <img src={prop.currentCandidate?.avatar_url} alt={`${prop.currentCandidate?.login}`} />
            </div>
            <div className="profile-card__details">
                <h2>{prop.currentCandidate?.login}<span>({prop.currentCandidate?.name})</span></h2>
                <p><strong>Location:</strong> {prop.currentCandidate?.location}</p>
                <p><strong>Email:</strong> <a href={`mailto:${prop.currentCandidate?.email}`}>{prop.currentCandidate?.email}</a></p>
                <p><strong>Company:</strong> {prop.currentCandidate?.company}</p>
                <p><strong>Bio:</strong> {prop.currentCandidate?.bio}</p>
            </div>

        </div>
    );
};

export default CandidateCard