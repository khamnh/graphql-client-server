import classNames from 'classnames';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const LaunchItem = ({ launch }) => {
	const { flight_number, success, date_local, name, id } = launch;
	return (
		<div className="card card-body mb-3">
			<div className="row">
				<div className="col-md-9">
					<h4>Mission: <span className={classNames({
						'text-success': success,
						'text-danger': !success
					})}>{name}</span></h4>
					<p>Date: <Moment format="YYYY-MM-DD HH:mm">{date_local}</Moment></p>
					<p>Flight number: <span className="text-info">{flight_number}</span></p>
				</div>
				<div className="col-md-3">
					<Link to={`/launch/${id}`} className="btn btn-secondary">Launch Details</Link>
				</div>
			</div>
		</div>
	)
}

export default LaunchItem;
