// import * as React from 'react';
// import Typography from '@mui/material/Typography';
// import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Link from '@mui/material/Link';

// type BasicBreadcrumbsProps = {};

// type BasicBreadcrumbsState = {};

// class BasicBreadcrumbs extends React.Component<BasicBreadcrumbsProps, BasicBreadcrumbsState> {
//   constructor(props: BasicBreadcrumbsProps) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
//     event.preventDefault();
//     console.info('You clicked a breadcrumb.');
//   }

//   render() {
//     return (
//       <div role="presentation" onClick={this.handleClick}>
//         <Breadcrumbs aria-label="breadcrumb">
//           <Link underline="hover" color="inherit" href="/">
//             MUI
//           </Link>
//           <Link underline="hover" color="inherit" href="/material-ui/getting-started/installation/">
//             Core
//           </Link>
//           <Typography color="text.primary">Breadcrumbs</Typography>
//         </Breadcrumbs>
//       </div>
//     );
//   }
// }

// export default BasicBreadcrumbs;


import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
export default function BasicBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          MUI
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Core
        </Link>
        <Typography color="text.primary">Breadcrumbs</Typography>
      </Breadcrumbs>
    </div>
  );
}
