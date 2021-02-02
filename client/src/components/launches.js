import { Fragment } from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import LaunchItem from './launchItem';
import MissionKey from './MissionKey';

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number
            name
            date_local
            success
            id
        }
    }
`

const Launches = () => {

	return (
		<Fragment>
			<h1 className="display-4 my-3">Launches</h1>
			<MissionKey />
			<Query query={LAUNCHES_QUERY}>
				{({ loading, data, error }) => {
					if (loading) return <h4>Loading...</h4>;
					if (error) console.log(error);

					console.log(data);

					return (
						<Fragment>
							{
								data.launches.map(item => {
									return <LaunchItem key={item.id} launch={item} />
								})
							}
						</Fragment>
					)
				}}
			</Query>
		</Fragment>
	)
}

export default Launches;