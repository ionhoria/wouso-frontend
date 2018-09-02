import React from 'react'

import Typography from '@material-ui/core/Typography'

const Home = ({ user }) => (
  <div>
    <Typography variant='title' gutterBottom>
      Bine ai venit, {user.firstName}!
    </Typography>
    <Typography variant='subheading' gutterBottom>
      Pentru a alege un joc poţi folosi meniul din partea stângă. Distracţie placută!
    </Typography>
  </div>
)

export default Home
