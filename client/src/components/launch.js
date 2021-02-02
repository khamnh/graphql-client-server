import { Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { useParams, Link } from 'react-router-dom';
import classNames from 'classnames'

const LAUNCH_QUERY = gql`
    query LaunchQuery($id: String!) {
        launch(id: $id) {
            id
            name
            flight_number
            success
            rocket {
                id
                name
                type
            }
        }
    }
`

const Launch = () => {
  const { id } = useParams();

  return (
    <Fragment>
      <Query query={LAUNCH_QUERY} variables={{ id }}>
        {
          ({ data, loading, error }) => {
            if (loading) return <h4>Loading</h4>;
            if (error) console.error(error);
            console.log(data)
            const { name, flight_number, success, rocket: { id: rocketId, name: rocketName, type: rocketType }, date_local } = data.launch;
            return (
              <div>
                <h1 className="display-4 my-3"><span className="text-dark">Mission:</span> {name}</h1>
                <h4 className="mb-3">Launch Details</h4>
                <ul className="list-group">
                  <li className="list-group-item">Flight number: {flight_number}</li>
                  <li className="list-group-item">Launch Year: {date_local}</li>
                  <li className="list-group-item">Launch Successful: <span className={classNames({
                    'text-success': success,
                    'text-danger': !success
                  })}>{success ? 'Yes' : 'No'}</span></li>
                </ul>
                <h4 className="my-3">Rocket Details</h4>
                <ul className="list-group">
                  <li className="list-group-item">Rocket id: {rocketId}</li>
                  <li className="list-group-item">Rocket name: {rocketName}</li>
                  <li className="list-group-item">Rocket type: {rocketType}</li>
                </ul>
                <hr/>
                <Link to="/" className="btn btn-secondary" >Back</Link>
              </div>
            )
          }
        }
      </Query>
    </Fragment>
  )
}

export default Launch;
