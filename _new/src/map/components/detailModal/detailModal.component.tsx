import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper, { PaperProps } from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import { DemoData } from '../../../assets/data/dataType';
import { TransitionProps } from '@material-ui/core/transitions';
import { Slide, Grid, Typography } from '@material-ui/core';

interface IProps {
  service: DemoData;
  deleteDetailService: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dialog: {},
    icon: {
      width: 90,
      paddingRight: 40
    }
  })
);

const Transition = React.forwardRef<unknown, TransitionProps>(
  function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  }
);

function PaperComponent(props: PaperProps) {
  return (
    <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export default function DetailModalContainer(props: IProps) {
  const classes = useStyles();
  const handleClose = props.deleteDetailService;
  return (
    <div>
      <Dialog
        open={true}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        className={classes.dialog}
        TransitionComponent={Transition}
        keepMounted
        fullWidth={true}
        maxWidth="md"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item>
              {' '}
              <img
                src={props.service.img}
                alt="Service Icon"
                className={classes.icon}
              ></img>
            </Grid>
            <Grid item>
              <Typography variant="h3" component="h2">
                {props.service.service}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Category:{' '}
                {props.service.category.map((cat: string) => cat + ' | ')}
              </Typography>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{props.service.description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}