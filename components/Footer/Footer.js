/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
// core components
import styles from 'assets/jss/nextjs-material-dashboard/components/footerStyle.js';

export default function Footer(props) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}></div>
        <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()} Desenvolvido por{' '}
            <a
              href='https://claudiomarcosdf.wixsite.com/portifolio'
              target='_blank'
              className={classes.a}
              style={{ marginRight: '25px' }}
            >
              Sgt Claudio Marcos
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
