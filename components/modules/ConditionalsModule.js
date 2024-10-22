import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, fas, far } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

export default function ConditionalsModule({ handleModuleStart }) {
    library.add(fab, fas, far);
    
    return (
        <div className="card modules_card" data-module="conditional_statements" onClick={handleModuleStart}>
            <div className="card-body">
                <h1 className="d-flex justify-content-center mb-3">
                    <FontAwesomeIcon icon="fa-solid fa-code-branch" />
                </h1>
                <h5 className="card-title">Conditional Statements</h5>
                <p className="card-text">This module covers conditional statements.</p>
                <span className="profile-modules-progress">
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </span>
            </div>
        </div>
    );
}
