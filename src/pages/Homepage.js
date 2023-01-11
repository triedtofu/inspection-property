import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Container from '@mui/material/Container';

import TextField from '@mui/material/TextField';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

import styles from './Homepage.module.css';
import { buttonUnstyledClasses } from '@mui/base';

import Navbar from '../components/Navbar';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { width } from '@mui/system';

function Homepage() {
  const [radius, setRadius] = React.useState('');
  const [suburb, setSuburb] = React.useState('');

  // React.useEffect(() => {
  //   const init = {
  //     method: 'GET',
  //     headers: {
  //       accept: 'application/json',
  //       'X-Api-Key': 'key_4dbc92fa490a11ebcc7d3b97f2ff4ba4',
  //     },
  //   };
  //   fetch('https://api.domain.com.au/sandbox/v1/agents/1757528', init).then(
  //     (response) => response.json().then((body) => console.log(body))
  //   );
  // }, []);

  const navigate = useNavigate();

  // const submitSearch = () => {
  //   navigate(`/search?suburb=${suburbSearch}`);
  // };

  return (
    <>
      <Navbar />
      <Container maxWidth="md">
        <Paper
          elevation={3}
          className={styles.searchBackground}
          component="form"
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <form className={styles.wholeSearchBar}>
            <div className={styles.searchAndButton}>
              <InputBase
                className={styles.searchBox}
                placeholder="Search Suburbs..."
                inputProps={{ 'aria-label': 'search suburbs' }}
                onChange={(e) => setSuburb(e.target.value)}
              />
              {/* <Select
              value={radius}
              label="Radius"
              onChange={(e) => setRadius(e.target.value)}
            >
              {['0', '2', '5', '10', '20', '30', '50'].map((radius) => {
                return (
                  <MenuItem key={radius} value={radius}>
                    {radius}
                  </MenuItem>
                );
              })}
            </Select> */}
              {/* <Button variant="outlined">Outlined</Button> */}
            </div>
          </form>
        </Paper>
        <div className={styles.helper}>
          Select the suburb you wish to find properties that have inspection and
          auctions in the next month!
        </div>
      </Container>
    </>
  );
}

export default Homepage;
