import { gql, useQuery } from '@apollo/client';
import Grid from '@mui/material/Grid';

import client from '/apolloClient';

const GET_ALBUMS = gql`
  query GetAlbums {
    albums(first: 10) {
      nodes {
        albumTitle
        id
        uri
      }
    }
  }
`;

export default function Albums() {
    const { loading, error, data } = useQuery(GET_ALBUMS, {
        client: client,
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <Grid container spacing={3}>
            {data.albums.nodes.map(({ albumTitle, id, uri }) => (
                <Grid item xs={12} sm={6} md={4} key={id}>
                    <div>
                        <h3>Album Title - {albumTitle}</h3>
                        <br />
                        <b>Album ID:</b>
                        <p>{id}</p>
                        <br />
                        <b>Album URI:</b>
                        <p>{uri}</p>
                        <br />
                    </div>
                </Grid>
            ))}
        </Grid>
    );
}
